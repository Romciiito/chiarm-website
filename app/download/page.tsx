import type { Metadata } from "next";
import { ArrowRight, Apple, Lock, Terminal } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

const PORTAL_DOWNLOAD_URL = "https://app.chiarm.app/download";

export const metadata: Metadata = {
  title: "Download CHIARM",
  description:
    "CHIARM desktop app — signed installers for active Pro and Enterprise subscribers. Sign in to download.",
  openGraph: {
    title: "Download CHIARM",
    description:
      "Desktop app for active CHIARM subscribers. Sign in to access installers.",
    url: "https://chiarm.app/download",
    images: [{ url: "/og-download.png", width: 1200, height: 630 }],
  },
  // This page is intentionally NOT indexed: we don't want search engines
  // pushing visitors straight at a gated sign-in wall when they were
  // looking for a free download — they should land on `/` or `/pricing`
  // and learn what CHIARM is first.
  robots: { index: false, follow: true },
};

export default function DownloadPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
        <Lock className="h-5 w-5 text-muted-foreground" />
      </div>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Download CHIARM
      </h1>
      <p className="mt-3 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
        CHIARM is a paid product. Installers are available to customers on an
        active Pro or Enterprise subscription — sign in to your account to
        download the latest signed build for your platform.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <ButtonLink href={PORTAL_DOWNLOAD_URL} size="lg" className="gap-2">
          Sign in to download
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink
          href="/pricing"
          size="lg"
          variant="outline"
          className="gap-2"
        >
          See pricing
        </ButtonLink>
      </div>

      {/* Platform availability — informational only, no download URLs. */}
      <section
        aria-labelledby="availability"
        className="mt-16 w-full rounded-lg border border-border bg-card/50 p-6 text-left"
      >
        <h2
          id="availability"
          className="text-sm font-medium uppercase tracking-wide text-muted-foreground"
        >
          Current availability
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="flex items-start gap-3">
            <Apple className="mt-0.5 h-5 w-5 text-foreground" aria-hidden />
            <div>
              <p className="font-medium text-foreground">
                macOS — Apple Silicon
              </p>
              <p className="text-sm text-muted-foreground">
                Available now. M1 / M2 / M3 / M4.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Terminal className="mt-0.5 h-5 w-5 text-foreground" aria-hidden />
            <div>
              <p className="font-medium text-foreground">Linux — x86_64</p>
              <p className="text-sm text-muted-foreground">
                Available now. Portable AppImage.
              </p>
            </div>
          </li>
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">
          Windows and Intel Mac builds are in active development and will ship
          to existing subscribers at no extra cost.
        </p>
      </section>

      <p className="mt-10 text-xs text-muted-foreground">
        Not a customer yet?{" "}
        <a
          href="mailto:sales@chiarm.app?subject=CHIARM%20early%20access"
          className="underline underline-offset-4"
        >
          Contact sales
        </a>{" "}
        for early-access onboarding.
      </p>
    </main>
  );
}
