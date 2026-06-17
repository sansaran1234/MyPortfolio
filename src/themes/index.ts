import { generateAllThemesCss } from "./css";
import { emberTheme } from "./ember";
import { ledgerTheme } from "./ledger";
import type { SiteTheme, ThemeId } from "./types";

export const DEFAULT_THEME_ID: ThemeId = "ledger";

export const SITE_THEMES: Record<ThemeId, SiteTheme> = {
  ledger: ledgerTheme,
  ember: emberTheme,
};

const THEME_IDS = Object.keys(SITE_THEMES) as ThemeId[];

export function isThemeId(value: string): value is ThemeId {
  return THEME_IDS.includes(value as ThemeId);
}

/** Reads NEXT_PUBLIC_SITE_THEME (build-time). Falls back to ledger. */
export function resolveSiteThemeId(): ThemeId {
  const envTheme = process.env.NEXT_PUBLIC_SITE_THEME?.trim().toLowerCase();

  if (envTheme && isThemeId(envTheme)) {
    return envTheme;
  }

  return DEFAULT_THEME_ID;
}

export function getSiteTheme(themeId: ThemeId = resolveSiteThemeId()): SiteTheme {
  return SITE_THEMES[themeId];
}

export function getSiteThemeCss(): string {
  return generateAllThemesCss(Object.values(SITE_THEMES), DEFAULT_THEME_ID);
}

export type { SiteTheme, ThemeId, ThemeBubblePalette } from "./types";
