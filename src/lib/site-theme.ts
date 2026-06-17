import { getSiteTheme, resolveSiteThemeId } from "@/themes";
import type { ThemeBubblePalette } from "@/themes";

export function getActiveBubblePalette(): ThemeBubblePalette {
  return getSiteTheme(resolveSiteThemeId()).ambient.bubble;
}
