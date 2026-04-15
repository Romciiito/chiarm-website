"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Download, MessageSquare, Bot, Users, Shield, ArrowRight, BookOpen, Terminal,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const SECTION_ICONS: Record<string, React.ReactNode> = {
  "installation":  <Download      className="h-5 w-5" />,
  "first-launch":  <Terminal      className="h-5 w-5" />,
  "telegram":      <MessageSquare className="h-5 w-5" />,
  "ai-features":   <Bot           className="h-5 w-5" />,
  "team":          <Users         className="h-5 w-5" />,
  "privacy":       <Shield        className="h-5 w-5" />,
};

export default function DocsPage() {
  const { t } = useLanguage();
  const d = t.docs;

  return (
    <div className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {d.tag}
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">{d.title}</h1>
          <p className="text-muted-foreground">{d.desc}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar TOC */}
          <aside className="lg:w-56 shrink-0">
            <nav className="sticky top-20 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-2">
                {d.onThisPage}
              </p>
              {d.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <span className="shrink-0 text-muted-foreground/60">
                    {SECTION_ICONS[s.id]}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="flex-1 min-w-0 space-y-12">
            {d.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {SECTION_ICONS[section.id]}
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                <div className="space-y-6">
                  {section.content.map((block) => (
                    <div key={block.heading}>
                      <h3 className="font-semibold text-sm mb-2">{block.heading}</h3>
                      <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {block.body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Support callout */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <BookOpen className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold mb-1.5">{d.support.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{d.support.desc}</p>
              <ButtonLink href="mailto:support@chiarm.app" variant="outline" size="sm" className="rounded-full">
                {d.support.btn}
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
