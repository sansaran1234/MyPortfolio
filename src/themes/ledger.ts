import type { SiteTheme } from "./types";

/** Default "Architectural Ledger" theme — the original portfolio look. */
export const ledgerTheme: SiteTheme = {
  id: "ledger",
  label: "Architectural Ledger",
  colors: {
    background: "#0b1326",
    foreground: "#dae2fd",
    primary: "#45f99c",
    primaryContainer: "#00dc82",
    onPrimary: "#00391d",
    surface: "#0b1326",
    surfaceContainerLow: "#131b2e",
    surfaceContainer: "#171f33",
    surfaceContainerHigh: "#222a3d",
    surfaceContainerHighest: "#2d3449",
    outline: "#859587",
    outlineVariant: "#3c4a3f",
    glassBackground: "rgba(19, 27, 46, 0.7)",
    selectionBackground: "#45f99c",
    selectionColor: "#00391d",
  },
  ambient: {
    bubble: {
      first: "69,249,156",
      second: "122,162,255",
      third: "79,125,255",
      fourth: "218,226,253",
      fifth: "0,220,130",
      sixth: "86,198,255",
    },
    gridLineRgb: "60,74,63",
    profileAccentRgb: "122,162,255",
    gradientSurfaceHigh: "34,42,61",
    gradientSurfaceMid: "23,31,51",
    gradientSurfaceLow: "11,19,38",
  },
};
