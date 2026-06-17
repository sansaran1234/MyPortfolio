import type { SiteTheme } from "./types";

function themeToCssBlock(theme: SiteTheme, selector: string): string {
  const { colors, ambient } = theme;

  return `
${selector} {
  --token-background: ${colors.background};
  --token-foreground: ${colors.foreground};
  --token-primary: ${colors.primary};
  --token-primary-container: ${colors.primaryContainer};
  --token-on-primary: ${colors.onPrimary};
  --token-surface: ${colors.surface};
  --token-surface-container-low: ${colors.surfaceContainerLow};
  --token-surface-container: ${colors.surfaceContainer};
  --token-surface-container-high: ${colors.surfaceContainerHigh};
  --token-surface-container-highest: ${colors.surfaceContainerHighest};
  --token-outline: ${colors.outline};
  --token-outline-variant: ${colors.outlineVariant};
  --token-glass-background: ${colors.glassBackground};
  --token-selection-background: ${colors.selectionBackground};
  --token-selection-color: ${colors.selectionColor};

  --token-rgb-bubble-1: ${ambient.bubble.first};
  --token-rgb-bubble-2: ${ambient.bubble.second};
  --token-rgb-bubble-3: ${ambient.bubble.third};
  --token-rgb-bubble-4: ${ambient.bubble.fourth};
  --token-rgb-bubble-5: ${ambient.bubble.fifth};
  --token-rgb-bubble-6: ${ambient.bubble.sixth};
  --token-rgb-grid-line: ${ambient.gridLineRgb};
  --token-rgb-profile-accent: ${ambient.profileAccentRgb};
  --token-rgb-gradient-high: ${ambient.gradientSurfaceHigh};
  --token-rgb-gradient-mid: ${ambient.gradientSurfaceMid};
  --token-rgb-gradient-low: ${ambient.gradientSurfaceLow};
}`.trim();
}

export function generateAllThemesCss(
  themes: SiteTheme[],
  defaultThemeId: string,
): string {
  return themes
    .map((theme) => {
      const selector =
        theme.id === defaultThemeId
          ? `:root, [data-theme="${theme.id}"]`
          : `[data-theme="${theme.id}"]`;

      return themeToCssBlock(theme, selector);
    })
    .join("\n\n");
}
