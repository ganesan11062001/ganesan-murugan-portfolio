import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../src/app/globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ganesan Murugan — Computational Biology & AI",
  description:
    "MS Bioinformatics @ Northeastern — building agentic AI platforms, de novo protein design pipelines, and multi-omics infrastructure for drug discovery.",
  metadataBase: new URL("https://ganesanmurugan.dev"),
  openGraph: {
    title: "Ganesan Murugan — Computational Biology & AI",
    description:
      "Agentic AI, protein design, multi-omics, and the HPC/cloud to run them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-[#050507] text-white antialiased">
        <Navigation />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
