import type { Metadata } from "next";
import {
  Geist,
  Instrument_Serif,
  Inter,
  Inter_Tight,
  Manrope,
  MonteCarlo,
  Space_Grotesk,
} from "next/font/google";
import { ThemeStyles } from "@/components/theme/ThemeStyles";
import { resolveSiteThemeId } from "@/themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-technical",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const monteCarlo = MonteCarlo({
  variable: "--font-monte-carlo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio | Sansaran",
  description:
    "A professional showcase of engineering precision and technical elegance.",
};

const fontVariables = [
  inter.variable,
  manrope.variable,
  spaceGrotesk.variable,
  geist.variable,
  interTight.variable,
  instrumentSerif.variable,
  monteCarlo.variable,
].join(" ");

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
