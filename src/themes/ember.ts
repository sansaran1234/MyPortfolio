import type { SiteTheme } from "./types";

/** Warm amber accent theme — alternate palette for ENV-based switching. */
export const emberTheme: SiteTheme = {
  id: "ember",
  label: "Ember Forge",
  colors: {
    background: "#120e0c",
    foreground: "#f5e6dc",
    primary: "#ff9f5a",
    primaryContainer: "#ff7a2f",
    onPrimary: "#3d1500",
    surface: "#120e0c",
    surfaceContainerLow: "#1a1411",
    surfaceContainer: "#221a16",
    surfaceContainerHigh: "#2d231d",
    surfaceContainerHighest: "#3a2e26",
    outline: "#a89284",
    outlineVariant: "#5c4a3f",
    glassBackground: "rgba(26, 20, 17, 0.72)",
    selectionBackground: "#ff9f5a",
    selectionColor: "#3d1500",
  },
  ambient: {
    bubble: {
      first: "255,159,90",
      second: "255,122,47",
      third: "232,93,58",
      fourth: "245,230,220",
      fifth: "255,183,120",
      sixth: "196,98,74",
    },
    gridLineRgb: "92,74,63",
    profileAccentRgb: "232,93,58",
    gradientSurfaceHigh: "45,35,29",
    gradientSurfaceMid: "34,26,22",
    gradientSurfaceLow: "18,14,12",
  },
};
