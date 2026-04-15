import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — CHIARM",
  description:
    "Simple, transparent pricing for CHIARM. One flat rate, no per-seat fees, no usage limits. Your data stays on your machine.",
  openGraph: {
    title: "Pricing — CHIARM",
    description: "One flat rate. No per-seat fees. No usage limits.",
    url: "https://chiarm.app/pricing",
    images: [{ url: "/og-pricing.png", width: 1200, height: 630 }],
  },
};
import { ButtonLink } from "@/components/button-link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Minus, ArrowRight, Shield } from "lucide-react";

const plans = [
  {
    name: "Solo",
    price: "279",
    period: "month",
    desc: "For individual operators running Telegram outreach.",
    cta: "Get started",
    href: "mailto:sales@chiarm.app",
    highlight: false,
    features: [
      "1 Telegram account",
      "AI smart replies",
      "Conversation summaries",
      "Message templates",
      "Anti-spam engine",
      "Local analytics",
      "macOS desktop app",
      "Email support",
    ],
    missing: ["Voice cloning", "Team roles", "Multi-account", "Priority support"],
  },
  {
    name: "Team",
    price: "279",
    period: "month",
    desc: "For small teams managing multiple Telegram accounts.",
    cta: "Get started",
    href: "mailto:sales@chiarm.app",
    highlight: true,
    badge: "Most popular",
    features: [
      "Up to 5 Telegram accounts",
      "AI smart replies",
      "Conversation summaries",
      "Voice cloning",
      "Message templates",
      "Anti-spam engine",
      "Local analytics",
      "Owner + manager + chatter roles",
      "Multi-account dashboard",
      "macOS desktop app",
      "Priority email support",
    ],
    missing: [],
  },
  {
    name: "Enterprise",
    price: null,
    period: null,
    desc: "Custom deployment for large teams and agencies.",
    cta: "Contact sales",
    href: "mailto:sales@chiarm.app",
    highlight: false,
    features: [
      "Unlimited Telegram accounts",
      "All Team features",
      "WhatsApp (coming soon)",
      "Instagram DMs (coming soon)",
      "Custom integrations",
      "Dedicated onboarding",
      "SLA & uptime guarantee",
      "Invoice billing",
    ],
    missing: [],
  },
];

const comparison = [
  {
    category: "Core",
    rows: [
      { feature: "Telegram accounts", solo: "1", team: "Up to 5", enterprise: "Unlimited" },
      { feature: "macOS app", solo: true, team: true, enterprise: true },
      { feature: "Windows / Linux (coming soon)", solo: false, team: false, enterprise: "Early access" },
    ],
  },
  {
    category: "AI features",
    rows: [
      { feature: "Smart reply suggestions", solo: true, team: true, enterprise: true },
      { feature: "Conversation summaries", solo: true, team: true, enterprise: true },
      { feature: "Voice cloning", solo: false, team: true, enterprise: true },
    ],
  },
  {
    category: "Messaging",
    rows: [
      { feature: "Anti-spam engine", solo: true, team: true, enterprise: true },
      { feature: "Message templates", solo: true, team: true, enterprise: true },
      { feature: "Rate limiting & consent checks", solo: true, team: true, enterprise: true },
    ],
  },
  {
    category: "Team & management",
    rows: [
      { feature: "Owner / manager / chatter roles", solo: false, team: true, enterprise: true },
      { feature: "Multi-account dashboard", solo: false, team: true, enterprise: true },
      { feature: "Local analytics & reports", solo: "Basic", team: "Full", enterprise: "Full" },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Email support", solo: true, team: true, enterprise: true },
      { feature: "Priority support", solo: false, team: true, enterprise: true },
      { feature: "Dedicated onboarding", solo: false, team: false, enterprise: true },
      { feature: "SLA", solo: false, team: false, enterprise: true },
    ],
  },
];

const pricingFaqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — download CHIARM and evaluate it for free. A subscription is required to continue using it after the trial period.",
  },
  {
    q: "What does the price include?",
    a: "All updates, new features, and email support are included in your subscription. There are no per-seat or per-message fees.",
  },
  {
    q: "Do you offer monthly and annual billing?",
    a: "Currently we offer monthly billing only. Annual billing with a discount is on the roadmap — contact us to discuss.",
  },
  {
    q: "Is VAT included in the price?",
    a: "No, 279€ is exclusive of VAT. VAT is applied at your local rate during checkout.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit/debit cards. Invoice billing is available for Enterprise customers.",
  },
];

function CheckCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-primary mx-auto" />;
  if (value === false) return <Minus className="h-4 w-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-16 pb-12 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-muted-foreground text-lg">
            One flat price. No per-seat fees. No usage limits. Your data stays on your machine.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 flex flex-col ${
                  plan.highlight
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-white whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
                <div className="mb-5">
                  <h2 className="text-lg font-bold mb-1">{plan.name}</h2>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  {plan.price ? (
                    <>
                      <span className="text-4xl font-bold">{plan.price}€</span>
                      <span className="text-muted-foreground text-sm">/{plan.period} + VAT</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-muted-foreground">Custom</span>
                  )}
                </div>
                <ButtonLink
                  href={plan.href}
                  variant={plan.highlight ? "default" : "outline"}
                  className="rounded-full mb-6"
                  {...(plan.href.startsWith("mailto") ? { rel: "noopener noreferrer" } : {})}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
                <ul className="space-y-2.5 text-sm flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2 opacity-40">
                      <Minus className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-16 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-10">
            Full feature comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground w-1/2">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th key={p.name} className="px-4 py-3 font-semibold text-center">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((section) => (
                  <Fragment key={section.category}>
                    <tr className="bg-muted/30">
                      <td
                        colSpan={4}
                        className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-border/40 hover:bg-muted/20 transition-colors">
                        <td className="px-5 py-3 text-muted-foreground">{row.feature}</td>
                        <td className="px-4 py-3 text-center">
                          <CheckCell value={row.solo} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <CheckCell value={row.team} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <CheckCell value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            Pricing FAQ
          </h2>
          <Accordion multiple={false}>
            {pricingFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`pfaq-${i}`} className="border-border/60">
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

      {/* CTA */}
      <section className="cta-gradient py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Questions about Enterprise?
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Large team, custom requirements, or need invoice billing? Let&apos;s talk.
          </p>
          <ButtonLink href="mailto:sales@chiarm.app" className="rounded-full px-6" rel="noopener noreferrer">
            Contact sales
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
