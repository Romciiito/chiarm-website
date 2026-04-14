import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://chiarm.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CHIARM — Privacy-First Telegram CRM",
    template: "%s | CHIARM",
  },
  description:
    "Self-hosted desktop CRM for Telegram. AI summaries, smart replies, voice cloning, anti-spam — all running on your computer. Your data never leaves your machine.",
  keywords: [
    "Telegram CRM",
    "self-hosted CRM",
    "privacy-first messaging",
    "desktop CRM",
    "AI messaging",
    "Telegram automation",
    "local AI",
    "voice cloning",
  ],
  authors: [{ name: "CHIARM" }],
  openGraph: {
    title: "CHIARM — Privacy-First Telegram CRM",
    description:
      "Self-hosted desktop CRM for Telegram. Your data stays on your computer.",
    type: "website",
    url: BASE_URL,
    siteName: "CHIARM",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CHIARM — Privacy-First Telegram CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHIARM — Privacy-First Telegram CRM",
    description:
      "Self-hosted desktop CRM for Telegram. Your data stays on your computer.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
