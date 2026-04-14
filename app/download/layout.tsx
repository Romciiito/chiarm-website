import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download — CHIARM",
  description:
    "Download CHIARM for macOS (Apple Silicon & Intel). Free to try. Privacy-first Telegram CRM that runs entirely on your computer.",
  openGraph: {
    title: "Download CHIARM",
    description:
      "Free desktop app for macOS. Privacy-first Telegram CRM — your data never leaves your machine.",
    url: "https://chiarm.app/download",
    images: [{ url: "/og-download.png", width: 1200, height: 630 }],
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
