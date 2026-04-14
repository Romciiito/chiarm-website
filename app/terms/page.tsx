import { LegalLayout } from "@/components/legal-layout";

export const metadata = {
  title: "Terms of Service — CHIARM",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 2025">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using CHIARM (&quot;the Software&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Software.
      </p>

      <h2>2. License</h2>
      <p>
        Subject to your compliance with these Terms and payment of applicable fees, CHIARM grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Software on hardware you own or control, solely for your internal business or personal purposes.
      </p>
      <ul>
        <li>You may not sublicense, sell, resell, transfer, assign, or otherwise commercially exploit the Software.</li>
        <li>You may not reverse engineer, decompile, or disassemble the Software except as permitted by applicable law.</li>
        <li>You may not remove or alter any proprietary notices in the Software.</li>
      </ul>

      <h2>3. Subscription & Payment</h2>
      <p>
        Access to the full feature set of CHIARM requires a paid subscription. Subscriptions are billed monthly in advance. All prices are exclusive of VAT, which is charged at your local rate.
      </p>
      <p>
        Subscriptions renew automatically. You may cancel at any time; cancellation takes effect at the end of the current billing period. No refunds are issued for partial periods.
      </p>

      <h2>4. Permitted Use</h2>
      <p>
        You agree to use CHIARM only in accordance with applicable laws and the terms of service of the messaging platforms you connect (including Telegram&apos;s Terms of Service). You are solely responsible for your use of connected accounts and any messages sent through the Software.
      </p>
      <p>
        You must not use CHIARM for spam, harassment, illegal marketing, or any activity that violates the terms of any connected platform.
      </p>

      <h2>5. Data & Privacy</h2>
      <p>
        CHIARM is designed to run entirely on your local machine. We do not collect, transmit, or store your messages, contacts, or conversation data. See our Privacy Policy for full details.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        THE SOFTWARE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND. CHIARM DOES NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE. USE OF THE SOFTWARE IS AT YOUR OWN RISK.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHIARM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may terminate or suspend your license immediately, without prior notice, if you breach these Terms. Upon termination, you must cease all use of the Software.
      </p>

      <h2>9. Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use of the Software after changes constitutes acceptance of the updated Terms. We will notify active subscribers of material changes by email.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href="mailto:legal@chiarm.app">legal@chiarm.app</a>.
      </p>
    </LegalLayout>
  );
}
