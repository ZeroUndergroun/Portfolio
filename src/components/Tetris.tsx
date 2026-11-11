"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ── Constants ──────────────────────────────────────────────────────────────
const COLS = 10;
const ROWS = 20;
const LB_KEY = "rt-tetris-leaderboard";
const LINE_SCORES = [0, 100, 300, 500, 800];
const CLEAR_MS = 260;
const TETRIS_MS = 460;

type Cell = 0 | 1;
type Matrix = Cell[][];
type PieceType = "I" | "O" | "T" | "S" | "Z" | "J" | "L";

const PIECES: Record<PieceType, Matrix> = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
};
const TYPES = Object.keys(PIECES) as PieceType[];

type Current = { matrix: Matrix; x: number; y: number };
type Phase = "start" | "playing" | "paused" | "over";
type LbEntry = { name: string; score: number; lines: number };
type Clearing = { rows: number[]; t: number; tetris: boolean };

// dir 1 = clockwise, -1 = counter-clockwise. All pieces are square matrices.
const rotate = (m: Matrix, dir: 1 | -1): Matrix => {
  const t = m[0].map((_, i) => m.map((row) => row[i]));
  return (dir === 1 ? t.map((row) => [...row].reverse()) : [...t].reverse()) as Matrix;
};

// Tight bounding box of the filled cells, so previews can be framed correctly.
const pieceBounds = (m: Matrix) => {
  let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[r].length; c++) {
      if (!m[r][c]) continue;
      if (r < minR) minR = r;
      if (r > maxR) maxR = r;
      if (c < minC) minC = c;
      if (c > maxC) maxC = c;
    }
  }
  return { minR, maxR, minC, maxC };
};

const shuffledBag = (): PieceType[] => {
  const bag = [...TYPES];
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
  return bag;
};

const spawn = (type: PieceType): Current => {
  const matrix = PIECES[type].map((r) => [...r]) as Matrix;
  return { matrix, x: Math.floor((COLS - matrix[0].length) / 2), y: 0 };
};

const seededBoard = (): LbEntry[] => [
  { name: "RT", score: 12400, lines: 64 },
  { name: "CI", score: 6100, lines: 31 },
  { name: "QA", score: 2800, lines: 14 },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function Tetris() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nextRef = useRef<HTMLCanvasElement>(null);
  const holdRef = useRef<HTMLCanvasElement>(null);
  const boardWrapRef = useRef<HTMLDivElement>(null);

  // React state drives the HUD + overlays; the fast game state lives in a ref.
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [phase, setPhase] = useState<Phase>("start");
  const [showLb, setShowLb] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LbEntry[]>([]);

  const game = useRef({
    board: new Array<Cell>(COLS * ROWS).fill(0),
    current: spawn("T"),
    currentType: "T" as PieceType,
    bag: [] as PieceType[],
    nextType: "T" as PieceType,
    hold: null as PieceType | null,
    canHold: true,
    clearing: null as Clearing | null,
    score: 0,
    lines: 0,
    level: 1,
    phase: "start" as Phase,
    acc: 0,
    last: 0,
  });
  const colors = useRef({ text: "#201e1d", accent: "#0f8f4c", bg: "#f3f2f2" });

  const sync = useCallback(() => {
    const g = game.current;
    setScore(g.score);
    setLines(g.lines);
    setLevel(g.level);
    setPhase(g.phase);
  }, []);

  const readColors = useCallback(() => {
    const cs = getComputedStyle(document.documentElement);
    colors.current = {
      text: cs.getPropertyValue("--color-text").trim() || "#201e1d",
      accent: cs.getPropertyValue("--color-accent").trim() || "#0f8f4c",
      bg: cs.getPropertyValue("--color-bg").trim() || "#f3f2f2",
    };
  }, []);

  const loadLeaderboard = useCallback((): LbEntry[] => {
    try {
      const raw = localStorage.getItem(LB_KEY);
      if (raw) return JSON.parse(raw) as LbEntry[];
    } catch {
      /* ignore */
    }
    const seeded = seededBoard();
    try {
      localStorage.setItem(LB_KEY, JSON.stringify(seeded));
    } catch {
      /* ignore */
    }
    return seeded;
  }, []);

  // ── Piece helpers ──────────────────────────────────────────────────────
  const takeNext = useCallback((): PieceType => {
    const g = game.current;
    if (g.bag.length === 0) g.bag = shuffledBag();
    return g.bag.shift()!;
  }, []);

  const collides = useCallback((m: Matrix, px: number, py: number): boolean => {
    const g = game.current;
    for (let r = 0; r < m.length; r++) {
      for (let c = 0; c < m[r].length; c++) {
        if (!m[r][c]) continue;
        const x = px + c;
        const y = py + r;
        if (x < 0 || x >= COLS || y >= ROWS) return true;
        if (y >= 0 && g.board[y * COLS + x]) return true;
      }
    }
    return false;
  }, []);

  // Saves the finished run into the top-6 local leaderboard.
  const saveScore = useCallback(() => {
    const g = game.current;
    const board = loadLeaderboard();
    const next = [...board, { name: "YOU", score: g.score, lines: g.lines }]
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    try {
      localStorage.setItem(LB_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setLeaderboard(next);
  }, [loadLeaderboard]);

  const spawnNext = useCallback(() => {
    const g = game.current;
    g.currentType = g.nextType;
    g.current = spawn(g.currentType);
    g.nextType = takeNext();
    g.canHold = true;
    // Top-out: new piece already collides → game over.
    if (collides(g.current.matrix, g.current.x, g.current.y)) {
      g.phase = "over";
      saveScore();
    }
  }, [takeNext, collides, saveScore]);

  const findFullRows = useCallback((): number[] => {
    const g = game.current;
    const rows: number[] = [];
    for (let r = 0; r < ROWS; r++) {
      let full = true;
      for (let c = 0; c < COLS; c++) {
        if (!g.board[r * COLS + c]) {
          full = false;
          break;
        }
      }
      if (full) rows.push(r);
    }
    return rows;
  }, []);

  // Removes cleared rows, drops the rest, and applies scoring.
  const collapseRows = useCallback((rows: number[]) => {
    const g = game.current;
    for (const r of rows) {
      g.board.splice(r * COLS, COLS);
      g.board.unshift(...new Array<Cell>(COLS).fill(0));
    }
    const n = rows.length;
    g.lines += n;
    g.level = Math.floor(g.lines / 8) + 1;
    g.score += LINE_SCORES[n] * g.level;
  }, []);

  const lockPiece = useCallback(() => {
    const g = game.current;
    const { matrix, x, y } = g.current;
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] && y + r >= 0) g.board[(y + r) * COLS + (x + c)] = 1;
      }
    }
    const full = findFullRows();
    if (full.length > 0) {
      // Hand off to the clear animation; collapse + next piece happen when it ends.
      g.clearing = { rows: full, t: 0, tetris: full.length === 4 };
    } else {
      spawnNext();
    }
  }, [findFullRows, spawnNext]);

  const step = useCallback(() => {
    const g = game.current;
    if (!collides(g.current.matrix, g.current.x, g.current.y + 1)) {
      g.current.y++;
    } else {
      lockPiece();
    }
  }, [collides, lockPiece]);

  // ── Drawing ────────────────────────────────────────────────────────────
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const g = game.current;
    const { text, accent, bg } = colors.current;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    const cs = Math.floor(Math.min((w - 20) / COLS, (h - 20) / ROWS));
    const boardW = cs * COLS;
    const boardH = cs * ROWS;
    const ox = Math.floor((w - boardW) / 2);
    const oy = Math.floor((h - boardH) / 2);

    // grid lines at ~12% of text
    ctx.globalAlpha = 0.12;
    ctx.strokeStyle = text;
    ctx.lineWidth = 1;
    for (let c = 0; c <= COLS; c++) {
      ctx.beginPath();
      ctx.moveTo(ox + c * cs + 0.5, oy);
      ctx.lineTo(ox + c * cs + 0.5, oy + boardH);
      ctx.stroke();
    }
    for (let r = 0; r <= ROWS; r++) {
      ctx.beginPath();
      ctx.moveTo(ox, oy + r * cs + 0.5);
      ctx.lineTo(ox + boardW, oy + r * cs + 0.5);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    const block = (x: number, y: number, color: string, alpha = 1) => {
      if (y < 0) return;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.fillRect(ox + x * cs, oy + y * cs, cs - 2, cs - 2);
      ctx.globalAlpha = 1;
    };

    // settled blocks
    for (let i = 0; i < g.board.length; i++) {
      if (g.board[i]) block(i % COLS, Math.floor(i / COLS), text);
    }

    // line-clear animation: flashing rows (+ a full-board flash on a Tetris)
    if (g.clearing) {
      const dur = g.clearing.tetris ? TETRIS_MS : CLEAR_MS;
      const p = Math.min(1, g.clearing.t / dur);
      if (g.clearing.tetris) {
        ctx.globalAlpha = 0.4 * (1 - p);
        ctx.fillStyle = accent;
        ctx.fillRect(ox, oy, boardW, boardH);
        ctx.globalAlpha = 1;
      }
      const freq = g.clearing.tetris ? 10 : 6;
      const on = Math.sin(p * Math.PI * freq) >= 0;
      ctx.globalAlpha = 1 - p * 0.2;
      ctx.fillStyle = on ? accent : bg;
      for (const r of g.clearing.rows) {
        ctx.fillRect(ox, oy + r * cs, boardW, cs - 2);
      }
      ctx.globalAlpha = 1;
    }

    // ghost + active piece (hidden while a clear is animating)
    if ((g.phase === "playing" || g.phase === "paused") && !g.clearing) {
      let gy = g.current.y;
      while (!collides(g.current.matrix, g.current.x, gy + 1)) gy++;
      const m = g.current.matrix;
      for (let r = 0; r < m.length; r++) {
        for (let c = 0; c < m[r].length; c++) {
          if (m[r][c]) block(g.current.x + c, gy + r, accent, 0.3);
        }
      }
      for (let r = 0; r < m.length; r++) {
        for (let c = 0; c < m[r].length; c++) {
          if (m[r][c]) block(g.current.x + c, g.current.y + r, accent);
        }
      }
    }
  }, [collides]);

  // Draws a single piece, framed to its bounding box, into a small HUD canvas.
  const drawMini = useCallback(
    (canvas: HTMLCanvasElement | null, type: PieceType | null, alpha: number) => {
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      const { text, bg } = colors.current;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
      if (!type) return;

      const m = PIECES[type];
      const b = pieceBounds(m);
      const pw = b.maxC - b.minC + 1;
      const ph = b.maxR - b.minR + 1;
      const cs = Math.floor(Math.min((w - 8) / pw, (h - 8) / ph));
      const ox = Math.floor((w - pw * cs) / 2);
      const oy = Math.floor((h - ph * cs) / 2);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = text;
      for (let r = b.minR; r <= b.maxR; r++) {
        for (let c = b.minC; c <= b.maxC; c++) {
          if (m[r][c])
            ctx.fillRect(ox + (c - b.minC) * cs, oy + (r - b.minR) * cs, cs - 2, cs - 2);
        }
      }
      ctx.globalAlpha = 1;
    },
    []
  );

  const drawPreviews = useCallback(() => {
    const g = game.current;
    drawMini(nextRef.current, g.nextType, 1);
    drawMini(holdRef.current, g.hold, g.canHold ? 1 : 0.35);
  }, [drawMini]);

  // ── Actions ────────────────────────────────────────────────────────────
  const move = useCallback(
    (dx: number) => {
      const g = game.current;
      if (g.phase !== "playing" || g.clearing) return;
      if (!collides(g.current.matrix, g.current.x + dx, g.current.y)) {
        g.current.x += dx;
        draw();
      }
    },
    [collides, draw]
  );

  const rotateCurrent = useCallback(
    (dir: 1 | -1) => {
      const g = game.current;
      if (g.phase !== "playing" || g.clearing) return;
      const rotated = rotate(g.current.matrix, dir);
      for (const off of [0, -1, 1, -2, 2]) {
        if (!collides(rotated, g.current.x + off, g.current.y)) {
          g.current.matrix = rotated;
          g.current.x += off;
          draw();
          return;
        }
      }
    },
    [collides, draw]
  );

  const holdPiece = useCallback(() => {
    const g = game.current;
    if (g.phase !== "playing" || g.clearing || !g.canHold) return;
    const cur = g.currentType;
    if (g.hold === null) {
      g.hold = cur;
      g.currentType = g.nextType;
      g.current = spawn(g.currentType);
      g.nextType = takeNext();
    } else {
      const swap = g.hold;
      g.hold = cur;
      g.currentType = swap;
      g.current = spawn(swap);
    }
    g.canHold = false;
    if (collides(g.current.matrix, g.current.x, g.current.y)) {
      g.phase = "over";
      saveScore();
    }
    sync();
    draw();
    drawPreviews();
  }, [takeNext, collides, saveScore, sync, draw, drawPreviews]);

  const softDrop = useCallback(() => {
    const g = game.current;
    if (g.phase !== "playing" || g.clearing) return;
    step();
    sync();
    draw();
    drawPreviews();
  }, [step, sync, draw, drawPreviews]);

  const hardDrop = useCallback(() => {
    const g = game.current;
    if (g.phase !== "playing" || g.clearing) return;
    let dropped = 0;
    while (!collides(g.current.matrix, g.current.x, g.current.y + 1)) {
      g.current.y++;
      dropped++;
    }
    g.score += dropped * 2;
    lockPiece();
    sync();
    draw();
    drawPreviews();
  }, [collides, lockPiece, sync, draw, drawPreviews]);

  const startGame = useCallback(() => {
    const g = game.current;
    g.board = new Array<Cell>(COLS * ROWS).fill(0);
    g.bag = shuffledBag();
    g.nextType = g.bag.shift()!;
    g.currentType = takeNext();
    g.current = spawn(g.currentType);
    g.hold = null;
    g.canHold = true;
    g.clearing = null;
    g.score = 0;
    g.lines = 0;
    g.level = 1;
    g.acc = 0;
    g.last = performance.now();
    g.phase = "playing";
    setShowLb(false);
    sync();
    draw();
    drawPreviews();
  }, [takeNext, sync, draw, drawPreviews]);

  const togglePause = useCallback(() => {
    const g = game.current;
    if (g.phase === "playing") g.phase = "paused";
    else if (g.phase === "paused") {
      g.phase = "playing";
      g.last = performance.now();
    }
    sync();
  }, [sync]);

  const reset = useCallback(() => {
    const g = game.current;
    g.board = new Array<Cell>(COLS * ROWS).fill(0);
    g.phase = "start";
    g.hold = null;
    g.canHold = true;
    g.clearing = null;
    g.score = 0;
    g.lines = 0;
    g.level = 1;
    sync();
    draw();
    drawPreviews();
  }, [sync, draw, drawPreviews]);

  // ── Effects ────────────────────────────────────────────────────────────
  // Init colors + leaderboard; keep colors fresh on theme change.
  useEffect(() => {
    readColors();
    setLeaderboard(loadLeaderboard());
    game.current.bag = shuffledBag();
    game.current.nextType = game.current.bag.shift()!;

    const observer = new MutationObserver(() => {
      readColors();
      draw();
      drawPreviews();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, [readColors, loadLeaderboard, draw, drawPreviews]);

  // Main render/gravity loop + resize handling.
  useEffect(() => {
    let raf = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      const g = game.current;
      const dt = t - g.last;
      g.last = t;
      if (g.phase === "playing") {
        if (g.clearing) {
          g.clearing.t += dt;
          const dur = g.clearing.tetris ? TETRIS_MS : CLEAR_MS;
          if (g.clearing.t >= dur) {
            collapseRows(g.clearing.rows);
            g.clearing = null;
            spawnNext();
          }
          sync();
        } else {
          g.acc += dt;
          const speed = Math.max(90, 700 - (g.level - 1) * 65);
          let guard = 0;
          while (g.acc >= speed && guard < 4) {
            g.acc -= speed;
            step();
            guard++;
          }
          sync();
        }
      }
      draw();
    };
    raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      draw();
      drawPreviews();
    });
    if (canvasRef.current) ro.observe(canvasRef.current);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [step, sync, draw, drawPreviews, collapseRows, spawnNext]);

  // Keyboard controls.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      )
        return;

      const handled = new Set([
        "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " ",
        "a", "A", "d", "D", "w", "W", "s", "S",
        "x", "X", "z", "Z", "c", "C", "Shift",
        "p", "P", "r", "R",
      ]);
      if (!handled.has(e.key)) return;
      e.preventDefault();

      switch (e.key) {
        case "ArrowLeft":
        case "a":
        case "A":
          move(-1);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          move(1);
          break;
        case "ArrowUp":
        case "w":
        case "W":
        case "x":
        case "X":
          rotateCurrent(1);
          break;
        case "z":
        case "Z":
          rotateCurrent(-1);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          softDrop();
          break;
        case " ":
          hardDrop();
          break;
        case "c":
        case "C":
        case "Shift":
          holdPiece();
          break;
        case "p":
        case "P":
          togglePause();
          break;
        case "r":
        case "R":
          reset();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, rotateCurrent, softDrop, hardDrop, holdPiece, togglePause, reset]);

  // Auto-pause when the board scrolls out of view.
  useEffect(() => {
    const el = boardWrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && game.current.phase === "playing") {
          game.current.phase = "paused";
          sync();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [sync]);

  // ── Render ─────────────────────────────────────────────────────────────
  const hudLabel = "font-mono text-[10px] uppercase tracking-[0.14em] text-caption";

  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative flex aspect-square min-h-[340px] w-full border-2 border-divider bg-surface">
        {/* HUD column */}
        <div className="flex w-[138px] flex-none flex-col px-3.5 py-4">
          <div className="flex flex-col gap-3">
            <div>
              <div className={hudLabel}>Score</div>
              <div className="font-heading text-[26px] font-bold leading-tight tracking-[-0.02em]">
                {score}
              </div>
            </div>
            <div className="flex gap-[18px]">
              <div>
                <div className={hudLabel}>Lines</div>
                <div className="font-heading text-[16px] font-bold">{lines}</div>
              </div>
              <div>
                <div className={hudLabel}>Level</div>
                <div className="font-heading text-[16px] font-bold text-accent-700">
                  {level}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <div className={`${hudLabel} mb-1`}>Hold</div>
                <canvas ref={holdRef} className="block h-9 w-12" />
              </div>
              <div>
                <div className={`${hudLabel} mb-1`}>Next</div>
                <canvas ref={nextRef} className="block h-9 w-12" />
              </div>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-[3px] font-mono text-[10px] uppercase tracking-[0.06em] text-faint">
            <span>← → move</span>
            <span>↑/X · Z rotate</span>
            <span>C hold · space drop</span>
            <span>P pause · R reset</span>
          </div>
        </div>

        {/* Board + overlays */}
        <div ref={boardWrapRef} className="relative min-w-0 flex-1 border-l border-divider">
          <canvas
            ref={canvasRef}
            onClick={() => {
              if (game.current.phase === "start" || game.current.phase === "over")
                startGame();
            }}
            className="block h-full w-full cursor-pointer touch-none"
          />

          {(phase === "start" || phase === "paused" || phase === "over") &&
            !showLb && (
              <div
                className="absolute inset-0 flex flex-col justify-center gap-3 p-6"
                style={{
                  background:
                    "color-mix(in srgb, var(--color-bg) 91%, transparent)",
                }}
              >
                <p className="m-0 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-700">
                  {phase === "over"
                    ? `Game over · ${score} · ${lines} lines`
                    : phase === "paused"
                      ? "Paused"
                      : "Fig. 01 — Regression"}
                </p>
                <p className="m-0 font-heading text-[26px] font-bold leading-[1.05] tracking-[-0.02em]">
                  {phase === "over" ? (
                    "Nice run."
                  ) : phase === "paused" ? (
                    "Take a breath."
                  ) : (
                    <>
                      Clear the
                      <br />
                      backlog.
                    </>
                  )}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={phase === "paused" ? togglePause : startGame}
                  >
                    {phase === "over"
                      ? "Play again"
                      : phase === "paused"
                        ? "Resume"
                        : "Play"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setLeaderboard(loadLeaderboard());
                      setShowLb(true);
                    }}
                  >
                    Leaderboard
                  </button>
                </div>
              </div>
            )}

          {showLb && (
            <div className="absolute inset-0 z-[3] flex flex-col gap-3.5 bg-bg p-5">
              <p className="m-0 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-700">
                Leaderboard — this browser
              </p>
              <div className="flex flex-col border-t-2 border-divider">
                {leaderboard.map((row, i) => (
                  <div
                    key={`${row.name}-${i}`}
                    className="grid grid-cols-[24px_1fr_auto] items-center gap-2 border-b border-divider py-2 text-[13px]"
                  >
                    <span className="font-mono text-accent-700">{i + 1}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                      {row.name} · {row.lines} lines
                    </span>
                    <span className="font-heading font-bold">{row.score}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="btn btn-secondary mt-auto self-start"
                onClick={() => setShowLb(false)}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Touch controls */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex gap-0.5">
          <button type="button" aria-label="Move left" onClick={() => move(-1)} className="btn btn-secondary h-11 w-[46px]">←</button>
          <button type="button" aria-label="Rotate counter-clockwise" onClick={() => rotateCurrent(-1)} className="btn btn-secondary h-11 w-[46px]">↺</button>
          <button type="button" aria-label="Rotate clockwise" onClick={() => rotateCurrent(1)} className="btn btn-secondary h-11 w-[46px]">↻</button>
          <button type="button" aria-label="Move right" onClick={() => move(1)} className="btn btn-secondary h-11 w-[46px]">→</button>
          <button type="button" aria-label="Hard drop" onClick={hardDrop} className="btn btn-secondary h-11 w-[46px]">↓</button>
        </div>
        <button type="button" onClick={holdPiece} className="btn btn-secondary h-11">Hold</button>
        <button type="button" onClick={togglePause} className="btn btn-secondary h-11">Pause</button>
        <button type="button" onClick={reset} className="btn btn-secondary h-11">Reset</button>
      </div>

      <p className="m-0 text-[11px] text-caption">
        Fig. 01 — Clearing a backlog, one full row at a time.
      </p>
    </div>
  );
}
