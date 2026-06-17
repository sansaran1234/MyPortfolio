import { getSiteThemeCss } from "@/themes";

export const ThemeStyles = () => {
  return (
    <style
      id="site-theme-tokens"
      dangerouslySetInnerHTML={{ __html: getSiteThemeCss() }}
    />
  );
};
