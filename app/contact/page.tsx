import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — CHIARM",
  description:
    "Get in touch with the CHIARM team. Pre-sales questions, support, feedback, and bug reports.",
  openGraph: {
    title: "Contact CHIARM",
    description:
      "Pre-sales, support, feedback, and bug reports — everything that used to hit support@chiarm.app.",
    url: "https://chiarm.app/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16 sm:py-24">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-3 text-balance text-muted-foreground">
          For pre-sales questions, onboarding help, or to report a bug or
          request a feature. Existing customers can also use{" "}
          <a
            href="https://app.chiarm.app"
            className="underline underline-offset-4"
          >
            the in-app feedback form
          </a>{" "}
          which pre-fills your app version.
        </p>
      </div>

      <ContactForm />

      <p className="mt-8 text-center text-xs text-muted-foreground">
        You can also email{" "}
        <a
          href="mailto:support@chiarm.app"
          className="underline underline-offset-4"
        >
          support@chiarm.app
        </a>{" "}
        directly — messages from the form land in the same inbox.
      </p>
    </main>
  );
}
