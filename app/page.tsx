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

/* ---------- data ---------- */

const faqs = [
  {
    q: "Is CHIARM really free to download?",
    a: "CHIARM is free to download and evaluate. Continued use requires a subscription starting at 279€/month + VAT. Enterprise pricing is available for large teams — contact us.",
  },
  {
    q: "Where is my data stored?",
    a: "All your data — contacts, conversations, templates, AI models — is stored exclusively on your computer. Nothing is ever sent to our servers. We never see your messages.",
  },
  {
    q: "Which messaging platforms does CHIARM support?",
    a: "Currently Telegram is fully supported. WhatsApp and Instagram DM support are in development and coming soon.",
  },
  {
    q: "Does it work on Windows and Linux?",
    a: "macOS (Apple Silicon & Intel) is fully supported. Windows and Linux builds are in progress — sign up for early access on the download page.",
  },
  {
    q: "What AI features are included?",
    a: "CHIARM includes AI conversation summaries, smart reply suggestions, and voice cloning for voice messages. The AI models run locally, so no data is sent to cloud AI providers.",
  },
  {
    q: "How does team collaboration work?",
    a: "CHIARM supports owner, manager, and chatter roles. Multiple team members can work across multiple Telegram accounts from a single installation.",
  },
];

/* ---------- page ---------- */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs text-muted-foreground mb-6 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Now with AI voice cloning
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Your Telegram CRM,{" "}
            <span className="text-primary">on your computer</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Manage Telegram conversations, automate follow-ups, and send
            AI-powered messages —{" "}
            <strong className="text-foreground font-medium">
              without your data ever leaving your machine.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <ButtonLink href="/download" size="lg" className="rounded-full px-8 text-base font-semibold shadow-md">
              Download free
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline" size="lg" className="rounded-full px-8 text-base">
              See pricing
            </ButtonLink>
          </div>
          <p className="text-xs text-muted-foreground">
            macOS available now · Windows &amp; Linux coming soon
          </p>
        </div>

        {/* Video embed placeholder */}
        <div className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-muted/40 shadow-2xl aspect-video flex items-center justify-center group cursor-pointer">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-foreground/10 backdrop-blur group-hover:bg-foreground/20 transition-colors">
                <Play className="h-7 w-7 text-foreground ml-1" />
              </div>
              <p className="text-sm text-muted-foreground">Product demo video coming soon</p>
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
            <div className="flex justify-center sm:pr-8">
              <StatCard
                icon={<Shield className="h-5 w-5" />}
                label="100% private by design"
                sub="All data stays on your computer"
              />
            </div>
            <div className="flex justify-center sm:px-8">
              <StatCard
                icon={<MessageSquare className="h-5 w-5" />}
                label="Telegram-native"
                sub="WhatsApp & Instagram coming soon"
              />
            </div>
            <div className="flex justify-center sm:pl-8">
              <StatCard
                icon={<Bot className="h-5 w-5" />}
                label="AI-powered, locally"
                sub="Summaries, smart replies, voice cloning"
              />
            </div>
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
                Why choose CHIARM?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <WhyCard
                icon={<Lock className="h-5 w-5" />}
                title="Zero-knowledge architecture"
                desc="Your messages, contacts, and templates never touch our infrastructure. The app runs entirely offline once installed."
              />
              <WhyCard
                icon={<Zap className="h-5 w-5" />}
                title="Anti-spam engine"
                desc="Built-in rate limiting and consent validation protect your accounts from bans and keep your messaging compliant."
              />
              <WhyCard
                icon={<Users className="h-5 w-5" />}
                title="Multi-account & teams"
                desc="Owner, manager, and chatter roles. Multiple Telegram accounts, one unified interface for your whole team."
              />
              <WhyCard
                icon={<Monitor className="h-5 w-5" />}
                title="Native desktop performance"
                desc="No browser tabs, no slow web apps. CHIARM is a real desktop app — fast, always available, no internet required."
              />
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
                Messaging
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
                Smarter conversations at scale
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Handle hundreds of Telegram threads without losing context. AI fills in the gaps so you can focus on high-value conversations.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <FeatureRow
                  icon={<Bot className="h-4 w-4" />}
                  title="AI smart replies"
                  desc="Context-aware response suggestions generated locally."
                />
                <FeatureRow
                  icon={<MessageSquare className="h-4 w-4" />}
                  title="Conversation summaries"
                  desc="Instantly catch up on long threads with one-click AI summaries."
                />
                <FeatureRow
                  icon={<Volume2 className="h-4 w-4" />}
                  title="Voice cloning"
                  desc="Send voice messages in your own cloned voice — no recording needed."
                />
                <FeatureRow
                  icon={<Filter className="h-4 w-4" />}
                  title="Anti-spam engine"
                  desc="Rate limits and consent checks keep your accounts safe."
                />
              </div>
              <ButtonLink href="/download" variant="outline" size="sm" className="mt-8 rounded-full">
                Try for free
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
                Analytics
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
                Know what drives your results
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every conversation is tracked locally. See reply rates, response times, team performance, and account health — no third-party analytics required.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <FeatureRow
                  icon={<BarChart3 className="h-4 w-4" />}
                  title="Conversation analytics"
                  desc="Reply rates, response time, open rates per account."
                />
                <FeatureRow
                  icon={<Users className="h-4 w-4" />}
                  title="Team performance"
                  desc="Per-chatter stats: messages sent, replied, reaction time."
                />
                <FeatureRow
                  icon={<Layers className="h-4 w-4" />}
                  title="Multi-account view"
                  desc="Manage and monitor all your Telegram accounts in one dashboard."
                />
                <FeatureRow
                  icon={<Shield className="h-4 w-4" />}
                  title="Local-only storage"
                  desc="All metrics stay on your machine. No data sent to us."
                />
              </div>
              <ButtonLink href="/download" variant="outline" size="sm" className="mt-8 rounded-full">
                Try for free
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
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Everything in one app
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              A complete toolkit for Telegram CRM — built for privacy, speed, and team collaboration.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="AI Copilot"
              desc="Locally-running AI suggests replies, summarises threads, and helps draft messages — zero cloud dependency."
              badge="local AI"
            />
            <FeatureCard
              icon={<Volume2 className="h-5 w-5" />}
              title="Voice Cloning"
              desc="Record a short sample once, then send voice messages in your voice automatically — no re-recording."
            />
            <FeatureCard
              icon={<Filter className="h-5 w-5" />}
              title="Anti-Spam Engine"
              desc="Rate limiting, consent validation, and message pacing protect your accounts from platform bans."
            />
            <FeatureCard
              icon={<Users className="h-5 w-5" />}
              title="Role-Based Teams"
              desc="Invite chatters, assign accounts, set permissions. Owner → Manager → Chatter hierarchy built in."
            />
            <FeatureCard
              icon={<Layers className="h-5 w-5" />}
              title="Multi-Account"
              desc="Switch between multiple Telegram accounts instantly. One unified inbox for all."
            />
            <FeatureCard
              icon={<MessageSquare className="h-5 w-5" />}
              title="Message Templates"
              desc="Create, organize, and reuse templates with variables. Speed up repetitive conversations."
            />
            <FeatureCard
              icon={<BarChart3 className="h-5 w-5" />}
              title="Local Analytics"
              desc="Full conversation history, reply rates, and team stats — stored privately on your machine."
            />
            <FeatureCard
              icon={<Lock className="h-5 w-5" />}
              title="End-to-End Privacy"
              desc="No cloud, no telemetry, no third-party integrations unless you add them. Complete data sovereignty."
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Offline Operation"
              desc="Works without an internet connection after setup. Your CRM is always available, even without Wi-Fi."
            />
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Privacy promise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Built different, by design
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="h-6 w-6" />,
                title: "No servers, ever",
                desc: "CHIARM has no backend. There is nothing to breach, leak, or subpoena.",
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: "No tracking pixels",
                desc: "No Google Analytics, no Intercom, no Hotjar. This website and the app are tracker-free.",
              },
              {
                icon: <CheckCircle2 className="h-6 w-6" />,
                title: "GDPR by default",
                desc: "Since your data stays on your computer, you are the only data controller. Compliance is trivial.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-muted/40 border border-border/50 p-6 text-left"
              >
                <div className="mb-3 text-primary">{item.icon}</div>
                <p className="font-semibold mb-1.5">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-muted/30 border-y border-border/60" id="faq">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">FAQ</p>
            <h2 className="text-3xl font-bold tracking-tight">Common questions</h2>
          </div>
          <Accordion multiple={false} className="space-y-0">
            {faqs.map((faq, i) => (
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
            Get started with CHIARM today
          </h2>
          <p className="text-muted-foreground mb-8">
            Download the desktop app and connect your first Telegram account in under 5 minutes.
          </p>
          <ButtonLink href="/download" size="lg" className="rounded-full px-8 text-base font-semibold shadow-md">
            Download for macOS
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <p className="mt-3 text-xs text-muted-foreground">
            Free to try · 279€/month for full access
          </p>
        </div>
      </section>
    </>
  );
}
