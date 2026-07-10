import localFont from "next/font/local";
import {
  Geist,
  Bodoni_Moda,  Instrument_Serif,
  Inter,
  Inter_Tight,
  Lobster_Two,
  Manrope,
  MonteCarlo,
  Pacifico,
  Short_Stack,
  Space_Grotesk,
} from "next/font/google";

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

const lobsterTwo = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: "400",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const shortStack = Short_Stack({
  variable: "--font-short-stack",
  subsets: ["latin"],
  weight: "400",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

const playwriteIE = localFont({
  src: "../assets/fonts/playwrite-ie.woff2",
  variable: "--font-playwrite-ie",
  display: "swap",
  weight: "100 400",
});

export const fontVariables = [
  inter.variable,
  manrope.variable,
  spaceGrotesk.variable,
  geist.variable,
  interTight.variable,
  instrumentSerif.variable,
  monteCarlo.variable,
  lobsterTwo.variable,
  pacifico.variable,
  shortStack.variable,
  bodoniModa.variable,
  playwriteIE.variable,
].join(" ");
