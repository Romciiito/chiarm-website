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
  Shield,
  Zap,
  Bot,
  Users,
  MessageSquare,
  Volume2,
  Lock,
  BarChart3,
  Filter,
  Layers,
  ArrowRight,
  CheckCircle2,
  Monitor,
  Play,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

/* ---------- sub-components ---------- */

function StatCard({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-muted-foreground">{icon}</div>
      <div>
        <p className="font-semibold text-sm text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function WhyCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="mb-2 text-muted-foreground">{icon}</div>
      <p className="font-semibold text-sm mb-1">{title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 text-muted-foreground shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-sm mb-0.5">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: string;
}) {
  return (
    <div className="relative rounded-xl bg-muted/50 p-5 border border-border/50">
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-background border border-border rounded-full px-2 py-0.5">
          {badge}
        </span>
      )}
      <div className="mb-3 text-muted-foreground">{icon}</div>
      <p className="font-semibold text-sm mb-1.5">{title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

/* ---------- mock app UI cards ---------- */

function MessagingMockup() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 text-xs text-muted-foreground">CHIARM — Conversations</span>
      </div>
      <div className="p-5 space-y-3">
        {[
          { name: "Alexei K.", msg: "When is the next update?", time: "2m", unread: 3 },
          { name: "Maria V.", msg: "Thanks for the quick reply!", time: "5m", unread: 0 },
          { name: "Dmitri P.", msg: "Can I get a demo?", time: "12m", unread: 1 },
          { name: "Anna S.", msg: "Invoice received, thanks.", time: "1h", unread: 0 },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-primary">{item.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">{item.name}</p>
              <p className="text-xs text-muted-foreground truncate">{item.msg}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] text-muted-foreground">{item.time}</span>
              {item.unread > 0 && (
                <span className="h-4 w-4 rounded-full bg-primary flex items-center justify-center text-[9px] text-white font-bold">
                  {item.unread}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 pb-4">
        <div className="rounded-lg bg-muted/50 border border-border px-3 py-2 flex items-center gap-2">
          <Bot className="h-3 w-3 text-primary" />
          <span className="text-xs text-muted-foreground">
            AI smart reply: &quot;Happy to help with your question…&quot;
          </span>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 text-xs text-muted-foreground">CHIARM — Analytics</span>
      </div>
      <div className="p-5">
        <p className="text-xs text-muted-foreground mb-1">Conversations handled</p>
        <p className="text-2xl font-bold mb-4">1,284</p>
        <div className="space-y-3">
          {[
            { label: "Replied", pct: 78, color: "bg-primary" },
            { label: "AI-assisted", pct: 52, color: "bg-primary/60" },
            { label: "Spam blocked", pct: 23, color: "bg-muted-foreground/40" },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{row.label}</span>
                <span className="font-medium">{row.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border flex justify-between text-xs">
          <div>
            <p className="text-muted-foreground">Accounts</p>
            <p className="font-semibold">3 active</p>
          </div>
          <div>
            <p className="text-muted-foreground">Team members</p>
            <p className="font-semibold">5 users</p>
          </div>
          <div>
            <p className="text-muted-foreground">Avg reply</p>
            <p className="font-semibold">4 sec</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- icon constants ---------- */

const statsIcons = [
  <Shield key="shield" className="h-5 w-5" />,
  <MessageSquare key="msg" className="h-5 w-5" />,
  <Bot key="bot" className="h-5 w-5" />,
];

const whyIcons = [
  <Lock key="lock" className="h-5 w-5" />,
  <Zap key="zap" className="h-5 w-5" />,
  <Users key="users" className="h-5 w-5" />,
  <Monitor key="monitor" className="h-5 w-5" />,
];

const msgRowIcons = [
  <Bot key="bot" className="h-4 w-4" />,
  <MessageSquare key="msg" className="h-4 w-4" />,
  <Volume2 key="vol" className="h-4 w-4" />,
  <Filter key="filter" className="h-4 w-4" />,
];

const analyticsRowIcons = [
  <BarChart3 key="bar" className="h-4 w-4" />,
  <Users key="users" className="h-4 w-4" />,
  <Layers key="layers" className="h-4 w-4" />,
  <Shield key="shield" className="h-4 w-4" />,
];

const gridIcons = [
  <Bot key="bot" className="h-5 w-5" />,
  <Volume2 key="vol" className="h-5 w-5" />,
  <Filter key="filter" className="h-5 w-5" />,
  <Users key="users" className="h-5 w-5" />,
  <Layers key="layers" className="h-5 w-5" />,
  <MessageSquare key="msg" className="h-5 w-5" />,
  <BarChart3 key="bar" className="h-5 w-5" />,
  <Lock key="lock" className="h-5 w-5" />,
  <Zap key="zap" className="h-5 w-5" />,
];

const trustIcons = [
  <Shield key="shield" className="h-6 w-6" />,
  <Lock key="lock" className="h-6 w-6" />,
  <CheckCircle2 key="check" className="h-6 w-6" />,
];

/* ---------- page ---------- */

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            {t.home.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {t.home.h1Line1}{" "}
            <span className="text-primary">{t.home.h1Line2}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.home.descPre}
            <strong className="text-foreground font-medium">
              {t.home.descStrong}
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <ButtonLink href="/pricing" size="lg" className="rounded-full px-8 text-base font-semibold shadow-md">
              {t.home.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline" size="lg" className="rounded-full px-8 text-base">
              {t.home.ctaSecondary}
            </ButtonLink>
          </div>
          <p className="text-xs text-muted-foreground">
            {t.home.platformNote}
          </p>
        </div>

        {/* Video embed placeholder */}
        <div className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-muted/40 shadow-2xl aspect-video flex items-center justify-center group cursor-pointer">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-foreground/10 backdrop-blur group-hover:bg-foreground/20 transition-colors">
                <Play className="h-7 w-7 text-foreground ml-1" />
              </div>
              <p className="text-sm text-muted-foreground">{t.home.videoPlaceholder}</p>
            </div>
            <div
              className="pointer-events-none absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.2) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-border/60 bg-background py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-border/60">
            {t.home.stats.map((stat, i) => (
              <div
                key={i}
                className={
                  i === 0
                    ? "flex justify-center sm:pr-8"
                    : i === 1
                    ? "flex justify-center sm:px-8"
                    : "flex justify-center sm:pl-8"
                }
              >
                <StatCard
                  icon={statsIcons[i]}
                  label={stat.label}
                  sub={stat.sub}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHIARM ── */}
      <section className="py-20 md:py-28 bg-background" id="features">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary mb-4">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                {t.home.whyTitle}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {t.home.whyCards.map((card, i) => (
                <WhyCard
                  key={i}
                  icon={whyIcons[i]}
                  title={card.title}
                  desc={card.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SECTION 1: Messaging ── */}
      <section className="py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                {t.home.msg.tag}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
                {t.home.msg.title}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t.home.msg.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {t.home.msg.rows.map((row, i) => (
                  <FeatureRow
                    key={i}
                    icon={msgRowIcons[i]}
                    title={row.title}
                    desc={row.desc}
                  />
                ))}
              </div>
              <ButtonLink href="/pricing" variant="outline" size="sm" className="mt-8 rounded-full">
                {t.home.msg.cta}
              </ButtonLink>
            </div>
            <MessagingMockup />
          </div>
        </div>
      </section>

      {/* ── FEATURE SECTION 2: Analytics ── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <AnalyticsMockup />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                {t.home.analytics.tag}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
                {t.home.analytics.title}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t.home.analytics.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {t.home.analytics.rows.map((row, i) => (
                  <FeatureRow
                    key={i}
                    icon={analyticsRowIcons[i]}
                    title={row.title}
                    desc={row.desc}
                  />
                ))}
              </div>
              <ButtonLink href="/pricing" variant="outline" size="sm" className="mt-8 rounded-full">
                {t.home.analytics.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ── */}
      <section className="py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {t.home.grid.tag}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.home.grid.title}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              {t.home.grid.desc}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.home.grid.cards.map((card, i) => (
              <FeatureCard
                key={i}
                icon={gridIcons[i]}
                title={card.title}
                desc={card.desc}
                badge={card.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {t.home.trust.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            {t.home.trust.title}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {t.home.trust.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-xl bg-muted/40 border border-border/50 p-6 text-left"
              >
                <div className="mb-3 text-primary">{trustIcons[i]}</div>
                <p className="font-semibold mb-1.5">{card.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-muted/30 border-y border-border/60" id="faq">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t.home.faq.tag}</p>
            <h2 className="text-3xl font-bold tracking-tight">{t.home.faq.title}</h2>
          </div>
          <Accordion multiple={false} className="space-y-0">
            {t.home.faq.items.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-sm font-medium py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="cta-gradient py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t.home.cta.title}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t.home.cta.desc}
          </p>
          <ButtonLink href="/pricing" size="lg" className="rounded-full px-8 text-base font-semibold shadow-md">
            {t.home.cta.btn}
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <p className="mt-3 text-xs text-muted-foreground">
            {t.home.cta.note}
          </p>
        </div>
      </section>
    </>
  );
}
