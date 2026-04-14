import { LegalLayout } from "@/components/legal-layout";

export const metadata = {
  title: "Privacy Policy — CHIARM",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 2025">
      <p>
        CHIARM is built on a simple privacy principle: <strong>your data belongs to you and stays on your machine</strong>. This policy explains what little data we do collect, and what we do with it.
      </p>

      <h2>1. Data we collect</h2>

      <h3>1.1 Website (chiarm.app)</h3>
      <p>
        This website does not use tracking pixels, cookies for analytics, or third-party analytics services. We use privacy-friendly server-side access logs (IP address, page requested, timestamp) for abuse prevention only. These are retained for 30 days and never shared.
      </p>

      <h3>1.2 Desktop application</h3>
      <p>
        The CHIARM desktop application does not transmit any data to our servers. All of the following stays entirely on your computer:
      </p>
      <ul>
        <li>Telegram messages, contacts, and media</li>
        <li>AI model files and inference results</li>
        <li>Message templates</li>
        <li>Analytics and usage statistics</li>
        <li>Team configuration and roles</li>
        <li>Voice clone models</li>
      </ul>
      <p>We have no technical capability to access any of this data.</p>

      <h3>1.3 License & billing</h3>
      <p>
        When you purchase a subscription, our payment processor collects payment details (we never see your card number). We receive: your email address, country, and transaction ID. This is used for license issuance and customer support only.
      </p>

      <h2>2. Cookies</h2>
      <p>
        This website uses no cookies except those strictly necessary for the checkout process (session tokens). We do not use advertising, tracking, or analytics cookies.
      </p>

      <h2>3. Third-party services</h2>
      <p>
        The only third-party service we use on this website is our payment processor for subscription billing. We do not use Google Analytics, Meta Pixel, Hotjar, Intercom, or any similar tool.
      </p>
      <p>
        The desktop application connects directly to Telegram&apos;s API (api.telegram.org) on your behalf. CHIARM itself has no servers involved in this connection.
      </p>

      <h2>4. Data retention & deletion</h2>
      <p>
        Since we hold only your email and billing information, you can request deletion at any time by emailing{" "}
        <a href="mailto:privacy@chiarm.app">privacy@chiarm.app</a>. We will delete your account record within 30 days.
      </p>
      <p>
        Your local CHIARM data (conversations, templates, etc.) is deleted when you remove the application&apos;s data folder from your machine. We have no copy of it.
      </p>

      <h2>5. GDPR & international transfers</h2>
      <p>
        Because we process only minimal billing data, GDPR compliance is straightforward. Your data is stored in EU data centres (via our payment processor). No data is transferred to third countries without adequate protections.
      </p>
      <p>
        For GDPR requests (access, correction, erasure, portability), contact{" "}
        <a href="mailto:privacy@chiarm.app">privacy@chiarm.app</a>. We will respond within 30 days.
      </p>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this policy. Material changes will be communicated by email to active subscribers. Continued use after notification constitutes acceptance.
      </p>

      <h2>7. Contact</h2>
      <p>
        Privacy questions: <a href="mailto:privacy@chiarm.app">privacy@chiarm.app</a>
      </p>
    </LegalLayout>
  );
}
