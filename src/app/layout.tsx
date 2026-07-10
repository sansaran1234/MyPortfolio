import type { Metadata } from "next";
import { ThemeStyles } from "@/components/theme/ThemeStyles";
import { fontVariables } from "@/lib/fonts";
import { resolveSiteThemeId } from "@/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Sansaran",
  description:
    "A professional showcase of engineering precision and technical elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeId = resolveSiteThemeId();
  const isGallery = themeId === "gallery";

  return (
    <html
      lang="en"
      data-theme={themeId}
      className={`${fontVariables} h-full ${isGallery ? "" : "dark"}`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-on-primary">
        <ThemeStyles />
        {children}
      </body>
    </html>
  );
}
