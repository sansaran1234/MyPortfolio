import type { SiteTheme } from "./types";

/**
 * "Contemporary Gallery" theme — a warm, editorial, museum-exhibition layout.
 * Light-mode palette. Switching to this theme swaps the entire page layout,
 * not just the color tokens.
 */
export const galleryTheme: SiteTheme = {
  id: "gallery",
  label: "Contemporary Gallery",
  colors: {
    background: "#faf8f2",
    foreground: "#151515",
    primary: "#8cc0eb",
    primaryContainer: "#bfddf0",
    onPrimary: "#151515",
    surface: "#faf8f2",
    surfaceContainerLow: "#f4f0e6",
    surfaceContainer: "#ffebcc",
    surfaceContainerHigh: "#fff9d2",
    surfaceContainerHighest: "#bfddf0",
    outline: "#666666",
    outlineVariant: "#151515",
    glassBackground: "rgba(250, 248, 242, 0.72)",
    selectionBackground: "#8cc0eb",
    selectionColor: "#151515",
  },
  ambient: {
    bubble: {
      first: "255,249,210",
      second: "255,235,204",
      third: "191,221,240",
      fourth: "140,192,235",
      fifth: "255,235,204",
      sixth: "191,221,240",
    },
    gridLineRgb: "21,21,21",
    profileAccentRgb: "140,192,235",
    gradientSurfaceHigh: "255,249,210",
    gradientSurfaceMid: "255,235,204",
    gradientSurfaceLow: "250,248,242",
  },
};
