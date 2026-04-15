"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Client-side contact form.
 *
 * POSTs to the CHIARM license server at api.chiarm.app/feedback —
 * unauthenticated (no JWT session from the marketing site). The license
 * server stores the row + fires an email to support@chiarm.app via
 * Resend. Same endpoint the desktop app uses, different `source`.
 *
 * We deliberately don't handle duplicate submissions from here — the
 * server's Redis SET NX EX 300 dedup collapses rapid double-clicks into
 * the same row and returns `duplicate: true`, which we treat as success.
 */
const LICENSE_SERVER_URL =
  process.env.NEXT_PUBLIC_LICENSE_SERVER_URL ?? "https://api.chiarm.app";

const CATEGORIES = [
  { value: "bug", label: "Bug report" },
  { value: "feature", label: "Feature request" },
  { value: "billing", label: "Billing question" },
  { value: "other", label: "Something else" },
] as const;

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [category, setCategory] =
    useState<(typeof CATEGORIES)[number]["value"]>("bug");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setErrorMsg(null);

    try {
      const resp = await fetch(`${LICENSE_SERVER_URL}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "website",
          email,
          category,
          message,
          user_agent:
            typeof navigator !== "undefined" ? navigator.userAgent : undefined,
        }),
      });
      if (!resp.ok) {
        const detail = await resp.json().catch(() => ({}));
        throw new Error(
          (detail as { detail?: string }).detail ?? `HTTP ${resp.status}`,
        );
      }
      setState("sent");
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Couldn't reach the server. Please try again.",
      );
    }
  };

  if (state === "sent") {
    return (
      <div className="rounded-lg border border-border bg-card/50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
        <h2 className="mt-4 text-xl font-semibold">Thanks — we got it.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A team member will reply to{" "}
          <span className="font-medium text-foreground">{email}</span>{" "}
          within one business day. If it&rsquo;s urgent, reply to the
          confirmation email we&rsquo;ve sent and it&rsquo;ll be flagged.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {state === "error" && errorMsg && (
        <div className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {errorMsg}{" "}
          <a
            href={`mailto:support@chiarm.app?subject=${encodeURIComponent(
              `[${category}] from contact form`,
            )}`}
            className="underline underline-offset-2"
          >
            Email us instead
          </a>
          .
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={state === "sending"}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Category
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {CATEGORIES.map((c) => (
            <button
              type="button"
              key={c.value}
              onClick={() => setCategory(c.value)}
              disabled={state === "sending"}
              className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                category === c.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:bg-accent/30"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={5}
          maxLength={8000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={state === "sending"}
          placeholder="What's up?"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <p className="mt-1 text-xs text-muted-foreground">
          {message.length} / 8000
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2 rounded-full"
        disabled={state === "sending"}
      >
        {state === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Send
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
