// Static placeholder for the hero's playable Tetris frame. Mirrors the final
// layout (HUD column + board + start overlay) so the composition is right; the
// live game gets dropped into the board area in a later pass.
export default function HeroGameFrame() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative flex aspect-square min-h-[340px] w-full border-2 border-divider bg-surface">
        {/* HUD column */}
        <div className="flex w-[138px] flex-none flex-col px-3.5 py-4">
          <div className="flex flex-col gap-3.5">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-caption">
                Score
              </div>
              <div className="font-heading text-[26px] font-bold leading-tight tracking-[-0.02em]">
                0
              </div>
            </div>
            <div className="flex gap-[18px]">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-caption">
                  Lines
                </div>
                <div className="font-heading text-[16px] font-bold">0</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-caption">
                  Level
                </div>
                <div className="font-heading text-[16px] font-bold text-accent-700">
                  1
                </div>
              </div>
            </div>
            <div>
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-caption">
                Next
              </div>
              <div className="h-11 w-[88px] border border-divider bg-bg/40" />
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-[3px] font-mono text-[10px] uppercase tracking-[0.06em] text-faint">
            <span>← → move</span>
            <span>↑ rotate</span>
            <span>space drop</span>
            <span>P pause · R reset</span>
          </div>
        </div>

        {/* Board area + start overlay */}
        <div className="relative min-w-0 flex-1 border-l border-divider">
          <div
            className="absolute inset-0 flex flex-col justify-center gap-3 p-6"
            style={{
              background: "color-mix(in srgb, var(--color-bg) 91%, transparent)",
            }}
          >
            <p className="m-0 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-700">
              Fig. 01 — Regression
            </p>
            <p className="m-0 font-heading text-[26px] font-bold leading-[1.05] tracking-[-0.02em]">
              Clear the
              <br />
              backlog.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="btn btn-primary opacity-60">Play</span>
              <span className="btn btn-secondary opacity-60">Leaderboard</span>
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              Tetris — coming soon
            </p>
          </div>
        </div>
      </div>

      <p className="m-0 text-[11px] text-caption">
        Fig. 01 — Clearing a backlog, one full row at a time.
      </p>
    </div>
  );
}
