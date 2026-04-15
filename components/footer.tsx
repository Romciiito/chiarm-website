"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-3 hover:opacity-80 transition-opacity">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
              {f.tagline}
            </p>
          </div>

          {/* Link groups */}
          {f.groups.map((group) => (
            <div key={group.name}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                {group.name}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(link.href.startsWith("http") || link.href.startsWith("mailto")
                        ? { rel: "noopener noreferrer", target: "_blank" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} CHIARM. {f.copyright}</span>
          <span className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            {f.privacyLine}
          </span>
        </div>
      </div>
    </footer>
  );
}
