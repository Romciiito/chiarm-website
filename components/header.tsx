"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/pricing",   label: t.nav.pricing },
    { href: "/docs",      label: t.nav.docs },
    { href: "/changelog", label: t.nav.changelog },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <ButtonLink href="mailto:support@chiarm.app" variant="ghost" size="sm">
            {t.nav.contact}
          </ButtonLink>
          <ButtonLink href="/pricing" size="sm" className="rounded-full px-4">
            {t.nav.getStarted}
          </ButtonLink>
        </div>

        {/* Mobile: toggles + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/60 bg-background px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                  pathname === link.href
                    ? "text-foreground font-medium bg-muted"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:support@chiarm.app"
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.contact}
            </Link>
            <div className="pt-2">
              <ButtonLink
                href="/pricing"
                size="sm"
                className="w-full rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.getStarted}
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
