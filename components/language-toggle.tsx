"use client";

import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "cs" : "en")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs font-semibold tracking-widest text-muted-foreground transition-colors hover:text-foreground hover:border-border",
        className
      )}
      aria-label={locale === "en" ? "Switch to Czech" : "Přepnout do angličtiny"}
    >
      <span className={locale === "en" ? "text-foreground" : "text-muted-foreground/50"}>EN</span>
      <span className="text-muted-foreground/30 mx-0.5">/</span>
      <span className={locale === "cs" ? "text-foreground" : "text-muted-foreground/50"}>CZ</span>
    </button>
  );
}
