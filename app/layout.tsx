import type { Metadata } from "next";
import { Anton, Geist, Instrument_Serif } from "next/font/google";
import { ThemeThread } from "@/components/theme-thread";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Moguloju Sai — AI Engineer",
  description:
    "Portfolio of Moguloju Sai, a full stack AI engineer building production agents, voice systems, and retrieval pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <ThemeThread />
      </body>
    </html>
  );
}
