"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Download, Monitor, Apple, Terminal, Shield, CheckCircle2, ArrowRight } from "lucide-react";

type OS = "macos-arm" | "macos-x64" | "windows" | "linux" | "unknown";

function detectOS(): OS {
  if (typeof window === "undefined") return "unknown";
  const ua = window.navigator.userAgent;
  const platform = window.navigator.platform || "";
  if (/Mac/.test(platform) || /Mac/.test(ua)) {
    // Apple Silicon detection
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl");
    const renderer = gl?.getExtension("WEBGL_debug_renderer_info");
    const gpuInfo = renderer
      ? gl?.getParameter(renderer.UNMASKED_RENDERER_WEBGL) ?? ""
      : "";
    if (/Apple/.test(String(gpuInfo)) || /arm/.test(navigator.userAgent.toLowerCase())) {
      return "macos-arm";
    }
    return "macos-x64";
  }
  if (/Win/.test(platform) || /Win/.test(ua)) return "windows";
  if (/Linux/.test(platform) || /Linux/.test(ua)) return "linux";
  return "unknown";
}

const downloads = {
  "macos-arm": {
    label: "macOS (Apple Silicon)",
    icon: <Apple className="h-5 w-5" />,
    url: "https://downloads.chiarm.app/latest/CHIARM-arm64.dmg",
    filename: "CHIARM-arm64.dmg",
    available: true,
    note: "Requires macOS 12 Monterey or later",
  },
  "macos-x64": {
    label: "macOS (Intel)",
    icon: <Apple className="h-5 w-5" />,
    url: "https://downloads.chiarm.app/latest/CHIARM-x64.dmg",
    filename: "CHIARM-x64.dmg",
    available: true,
    note: "Requires macOS 12 Monterey or later",
  },
  windows: {
    label: "Windows",
    icon: <Monitor className="h-5 w-5" />,
    url: "https://downloads.chiarm.app/latest/CHIARM-Setup.exe",
    filename: "CHIARM-Setup.exe",
    available: false,
    note: "Coming soon — Windows 10/11",
  },
  linux: {
    label: "Linux",
    icon: <Terminal className="h-5 w-5" />,
    url: "https://downloads.chiarm.app/latest/CHIARM.AppImage",
    filename: "CHIARM.AppImage",
    available: false,
    note: "Coming soon — AppImage (x86_64)",
  },
  unknown: {
    label: "macOS (Apple Silicon)",
    icon: <Apple className="h-5 w-5" />,
    url: "https://downloads.chiarm.app/latest/CHIARM-arm64.dmg",
    filename: "CHIARM-arm64.dmg",
    available: true,
    note: "Requires macOS 12 Monterey or later",
  },
};

const steps = [
  {
    step: "1",
    title: "Download & open",
    desc: "Download the .dmg file and open it. Drag CHIARM to your Applications folder.",
  },
  {
    step: "2",
    title: "Launch CHIARM",
    desc: "Open CHIARM from your Applications folder. On first launch, macOS may ask you to confirm — click Open.",
  },
  {
    step: "3",
    title: "Connect Telegram",
    desc: "Enter your Telegram phone number. CHIARM connects directly to Telegram's API — no proxy, no middleman.",
  },
  {
    step: "4",
    title: "Start messaging",
    desc: "Your conversations load locally. Explore AI features, set up templates, and invite your team.",
  },
];

const sysReqs = [
  { os: "macOS", req: "12 Monterey or later, Apple Silicon or Intel" },
  { os: "Windows", req: "Windows 10 (64-bit) or later — coming soon" },
  { os: "Linux", req: "Ubuntu 20.04+ or equivalent — coming soon" },
  { os: "RAM", req: "4 GB minimum, 8 GB recommended" },
  { os: "Storage", req: "500 MB free disk space" },
  { os: "Internet", req: "Required only for Telegram sync; app runs offline otherwise" },
];

export default function DownloadPage() {
  const [os, setOs] = useState<OS>("unknown");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setOs(detectOS());
    setMounted(true);
  }, []);

  const primary = downloads[os];
  const others = (Object.entries(downloads) as [OS, (typeof downloads)[OS]][]).filter(
    ([key]) => key !== os && key !== "unknown"
  );

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-16 pb-12 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Download
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Get CHIARM for{" "}
            {mounted && os !== "unknown"
              ? os.startsWith("macos")
                ? "macOS"
                : os === "windows"
                ? "Windows"
                : "Linux"
              : "your computer"}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Free to download. Everything runs locally — no account required to start.
          </p>

          {/* Primary download */}
          <div className="inline-flex flex-col items-center gap-3">
            {primary.available ? (
              <a
                href={primary.url}
                download={primary.filename}
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 text-base font-semibold shadow-md gap-2")}
              >
                <Download className="h-5 w-5" />
                Download {primary.label}
              </a>
            ) : (
              <Button
                size="lg"
                className="rounded-full px-8 text-base font-semibold gap-2"
                disabled
              >
                <Download className="h-5 w-5" />
                {primary.label} — Coming soon
              </Button>
            )}
            <p className="text-xs text-muted-foreground">{primary.note}</p>
          </div>
        </div>
      </section>

      {/* All platforms */}
      <section className="py-12 bg-background border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-6">
            All platforms
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {(Object.entries(downloads) as [OS, (typeof downloads)[OS]][])
              .filter(([key]) => key !== "unknown")
              .map(([key, dl]) => (
                <div
                  key={key}
                  className={`flex items-center gap-4 rounded-xl border p-4 ${
                    key === os ? "border-primary bg-primary/5" : "border-border bg-card"
                  }`}
                >
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0 text-muted-foreground">
                    {dl.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{dl.label}</p>
                    <p className="text-xs text-muted-foreground">{dl.note}</p>
                  </div>
                  {dl.available ? (
                    <a
                      href={dl.url}
                      download={dl.filename}
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ size: "sm", variant: "outline" }), "rounded-full shrink-0")}
                    >
                      <Download className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-medium text-muted-foreground bg-muted rounded-full px-2 py-0.5 shrink-0">
                      Soon
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Installation steps */}
      <section className="py-16 bg-muted/30 border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 text-center">
            Getting started
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-10">
            Up and running in minutes
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System requirements */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            System requirements
          </h2>
          <div className="rounded-xl border border-border overflow-hidden">
            {sysReqs.map((row, i) => (
              <div
                key={row.os}
                className={`flex gap-4 px-5 py-3 text-sm ${
                  i < sysReqs.length - 1 ? "border-b border-border/60" : ""
                }`}
              >
                <span className="font-semibold w-24 shrink-0">{row.os}</span>
                <span className="text-muted-foreground">{row.req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-12 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Your data never leaves your machine</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            CHIARM connects directly to Telegram&apos;s API from your computer. We have no servers, no telemetry, and no way to read your messages even if we wanted to.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              No account required to download
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              No telemetry or tracking
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Open to audit on request
            </div>
          </div>
        </div>
      </section>

      {/* Docs CTA */}
      <section className="cta-gradient py-14">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-3">Need help getting set up?</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Our documentation covers installation, first launch, and Telegram setup step by step.
          </p>
          <ButtonLink href="/docs" variant="outline" className="rounded-full">
            Read the docs
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
