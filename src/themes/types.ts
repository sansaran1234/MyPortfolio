export type ThemeId = "ledger" | "ember";

export interface ThemeBubblePalette {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
}

export interface ThemeAmbientTokens {
  bubble: ThemeBubblePalette;
  gridLineRgb: string;
  profileAccentRgb: string;
  gradientSurfaceHigh: string;
  gradientSurfaceMid: string;
  gradientSurfaceLow: string;
}

export interface ThemeColorTokens {
  background: string;
  foreground: string;
  primary: string;
  primaryContainer: string;
  onPrimary: string;
  surface: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  outline: string;
  outlineVariant: string;
  glassBackground: string;
  selectionBackground: string;
  selectionColor: string;
}

export interface SiteTheme {
  id: ThemeId;
  label: string;
  colors: ThemeColorTokens;
  ambient: ThemeAmbientTokens;
}
