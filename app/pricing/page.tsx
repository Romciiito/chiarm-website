"use client";

import { Fragment } from "react";
import { ButtonLink } from "@/components/button-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Minus, ArrowRight, Shield } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const planHrefs = [
  "mailto:sales@chiarm.app",
  "mailto:sales@chiarm.app",
  "mailto:sales@chiarm.app",
] as const;

const planPrices = ["99", "279", null] as const;

const planHighlights = [false, true, false] as const;

function CheckCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-primary mx-auto" />;
  if (value === false) return <Minus className="h-4 w-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-16 pb-12 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {t.pricing.tag}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t.pricing.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t.pricing.desc}
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {t.pricing.plans.map((plan, idx) => {
              const href = planHrefs[idx];
              const price = planPrices[idx];
              const highlight = planHighlights[idx];
              const soldOut = (plan as { soldOut?: boolean }).soldOut === true;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-6 flex flex-col ${
                    soldOut
                      ? "border-border bg-card opacity-70"
                      : highlight
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  {plan.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[11px] font-semibold text-white whitespace-nowrap ${soldOut ? "bg-muted-foreground" : "bg-primary"}`}>
                      {plan.badge}
                    </span>
                  )}
                  <div className="mb-5">
                    <h2 className="text-lg font-bold mb-1">{plan.name}</h2>
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  </div>
                  <div className="mb-6">
                    {price ? (
                      <>
                        <span className={`text-4xl font-bold ${soldOut ? "line-through text-muted-foreground" : ""}`}>{price}€</span>
                        <span className="text-muted-foreground text-sm">{t.pricing.vatNote}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-muted-foreground">{t.pricing.customPrice}</span>
                    )}
                  </div>
                  {soldOut ? (
                    <button
                      disabled
                      className="rounded-full mb-6 w-full py-2 px-4 text-sm font-medium border border-border text-muted-foreground cursor-not-allowed bg-muted/40"
                    >
                      {plan.cta}
                    </button>
                  ) : (
                  <ButtonLink
                    href={href}
                    variant={highlight ? "default" : "outline"}
                    className="rounded-full mb-6"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ButtonLink>
                  )}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-16 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-10">
            {t.pricing.comparisonTitle}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground w-1/2">
                    {t.pricing.featureCol}
                  </th>
                  {t.pricing.plans.map((p) => (
                    <th key={p.name} className="px-4 py-3 font-semibold text-center">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.pricing.categories.map((section) => (
                  <Fragment key={section.name}>
                    <tr className="bg-muted/30">
                      <td
                        colSpan={4}
                        className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        {section.name}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.f} className="border-t border-border/40 hover:bg-muted/20 transition-colors">
                        <td className="px-5 py-3 text-muted-foreground">{row.f}</td>
                        <td className="px-4 py-3 text-center">
                          <CheckCell value={row.s} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <CheckCell value={row.t} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <CheckCell value={row.e} />
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
            {t.pricing.faqTitle}
          </h2>
          <Accordion multiple={false}>
            {t.pricing.faqs.map((faq, i) => (
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
            {t.pricing.enterprise.title}
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            {t.pricing.enterprise.desc}
          </p>
          <ButtonLink href="mailto:sales@chiarm.app" className="rounded-full px-6" rel="noopener noreferrer">
            {t.pricing.enterprise.btn}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
