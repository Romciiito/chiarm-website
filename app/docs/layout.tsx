import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation — CHIARM",
  description:
    "User guide for CHIARM: installation on macOS, connecting Telegram accounts, AI features, team setup, and privacy configuration.",
  openGraph: {
    title: "Documentation — CHIARM",
    description: "Install CHIARM, connect Telegram, and get your team running in minutes.",
    url: "https://chiarm.app/docs",
    images: [{ url: "/og-docs.png", width: 1200, height: 630 }],
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
