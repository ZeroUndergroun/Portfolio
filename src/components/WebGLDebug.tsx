"use client";
import { useEffect } from "react";
import { getWebGLRenderer } from "@/lib/webgl";

export default function WebGLDebug() {
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
      const renderer = getWebGLRenderer(gl);
      // Log at info level so it's visible in production console for debugging
      // eslint-disable-next-line no-console
      console.info('[WebGLDebug] renderer:', renderer);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[WebGLDebug] could not determine renderer', e);
    }
  }, []);

  return null;
}
