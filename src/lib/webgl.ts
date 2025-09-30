export function getWebGLRenderer(gl: WebGLRenderingContext | WebGL2RenderingContext | null): string {
  if (!gl) return 'no-gl-context';

  try {
    const ext = (gl.getExtension as any)?.('WEBGL_debug_renderer_info')
      || (gl.getExtension as any)?.('MOZ_WEBGL_debug_renderer_info')
      || (gl.getExtension as any)?.('WEBKIT_WEBGL_debug_renderer_info');

    if (ext && (ext as any).UNMASKED_RENDERER_WEBGL) {
      const unmasked = gl.getParameter((ext as any).UNMASKED_RENDERER_WEBGL) as string | null;
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
