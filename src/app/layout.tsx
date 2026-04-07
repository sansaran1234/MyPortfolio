import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Portfolio | Sansaran",
  description: "A professional showcase of engineering precision and technical elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
