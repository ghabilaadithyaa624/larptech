import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LarpTech — AI solutions for everything that pays.",
    template: "%s | LarpTech",
  },
  description:
    "One AI partner across every revenue-driving function — marketing, sales, agents, security, commerce, trading. We build the AI that runs your business.",
  keywords: ["AI", "AI agents", "Marketing AI", "Sales AI", "Security MSSP", "E-commerce AI", "Trading AI", "AI automation"],
  authors: [{ name: "LarpTech" }],
  openGraph: {
    title: "LarpTech — AI solutions for everything that pays.",
    description: "One AI partner across every revenue-driving function. Stop juggling vendors.",
    type: "website",
    locale: "en_US",
    siteName: "LarpTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "LarpTech — AI solutions for everything that pays.",
    description: "One AI partner across every revenue-driving function.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <body className="bg-[#0A0A0F] text-[#F5F5F7] antialiased">{children}</body>
    </html>
  );
}
