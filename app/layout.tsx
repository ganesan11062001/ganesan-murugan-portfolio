import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/app/globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ganesan Murugan - Bioinformatics Software Engineer",
  description: "MS Bioinformatics @ Northeastern University | ML/AI solutions for drug discovery, structural biology, and genomics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
