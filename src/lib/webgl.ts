interface WebGLDebugRendererInfo {
  UNMASKED_RENDERER_WEBGL: number;
}

export function getWebGLRenderer(gl: WebGLRenderingContext | WebGL2RenderingContext | null): string {
  if (!gl) return 'no-gl-context';

  try {
    const ext = (gl.getExtension as unknown as (name: string) => unknown)('WEBGL_debug_renderer_info')
      || (gl.getExtension as unknown as (name: string) => unknown)('MOZ_WEBGL_debug_renderer_info')
      || (gl.getExtension as unknown as (name: string) => unknown)('WEBKIT_WEBGL_debug_renderer_info');

    if (ext && typeof (ext as WebGLDebugRendererInfo).UNMASKED_RENDERER_WEBGL === 'number') {
      const unmasked = gl.getParameter((ext as WebGLDebugRendererInfo).UNMASKED_RENDERER_WEBGL) as string | null;
      if (unmasked) return unmasked;
    }
  } catch (e) {
    // ignore and fall through to fallback
  }

  try {
    const renderer = gl.getParameter((gl as WebGLRenderingContext).RENDERER) as string | null;
    if (renderer) return renderer;
  } catch (e) {
    // ignore
  }

  return 'unknown-renderer';
}
