import { LegalLayout } from "@/components/legal-layout";

export const metadata = {
  title: "Data Processing Agreement — CHIARM",
};

export default function DpaPage() {
  return (
    <LegalLayout title="Data Processing Agreement (DPA)" lastUpdated="April 2025">
      <p>
        This Data Processing Agreement (&quot;DPA&quot;) supplements the Terms of Service and is entered into between CHIARM (&quot;Processor&quot;) and the customer (&quot;Controller&quot;) in connection with the use of the CHIARM desktop application.
      </p>

      <h2>1. Definitions</h2>
      <p>
        Terms used in this DPA have the meanings given to them in the EU General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679).
      </p>
      <ul>
        <li><strong>Personal Data:</strong> any information relating to an identified or identifiable natural person processed in connection with the Software.</li>
        <li><strong>Processing:</strong> any operation performed on Personal Data.</li>
        <li><strong>Sub-processor:</strong> any third party engaged by the Processor to process Personal Data on the Processor&apos;s behalf.</li>
      </ul>

      <h2>2. Nature of data processing</h2>
      <p>
        CHIARM is designed as a local-only application. <strong>Personal Data processed by the Software (including Telegram contacts and messages) is processed exclusively on the Controller&apos;s own hardware and is never transmitted to CHIARM&apos;s servers.</strong>
      </p>
      <p>
        CHIARM acts as a software tool that facilitates the Controller&apos;s own processing. In most deployments, CHIARM does not act as a data processor under GDPR because it does not receive or store Personal Data on behalf of the Controller.
      </p>

      <h2>3. Controller obligations</h2>
      <p>As Controller, you agree to:</p>
      <ul>
        <li>Process Personal Data in compliance with applicable data protection laws.</li>
        <li>Ensure you have a lawful basis for processing the Personal Data of individuals you contact via Telegram through the Software.</li>
        <li>Implement appropriate technical and organisational measures to protect Personal Data stored locally.</li>
        <li>Maintain appropriate backups of locally stored data.</li>
      </ul>

      <h2>4. Billing data processing</h2>
      <p>
        CHIARM processes limited Personal Data (email address, country, transaction ID) for billing and license management. For this limited processing:
      </p>
      <ul>
        <li>Purpose: subscription billing, license issuance, customer support</li>
        <li>Legal basis: performance of a contract (Article 6(1)(b) GDPR)</li>
        <li>Retention: for the duration of the subscription plus 3 years for legal/accounting purposes</li>
        <li>Sub-processors: payment processor (details available on request)</li>
      </ul>

      <h2>5. Security measures</h2>
      <p>CHIARM implements the following technical and organisational measures for billing data:</p>
      <ul>
        <li>Encryption in transit (TLS 1.2+) and at rest</li>
        <li>Access controls and least-privilege principles</li>
        <li>Regular security assessments</li>
        <li>Incident response procedures</li>
      </ul>

      <h2>6. Data subject rights</h2>
      <p>
        CHIARM will assist the Controller in responding to requests from data subjects exercising their rights under applicable law (access, rectification, erasure, portability, restriction, objection) to the extent CHIARM holds relevant Personal Data. Requests should be sent to{" "}
        <a href="mailto:privacy@chiarm.app">privacy@chiarm.app</a>.
      </p>

      <h2>7. Data breach notification</h2>
      <p>
        CHIARM will notify the Controller without undue delay (and in any event within 72 hours) of becoming aware of a personal data breach affecting data CHIARM holds. Notification will include available details of the breach, likely consequences, and measures taken.
      </p>

      <h2>8. Termination</h2>
      <p>
        Upon termination of the subscription, CHIARM will delete or anonymise billing Personal Data within 30 days (subject to legal retention obligations). Local data held by the Controller on their own hardware is outside CHIARM&apos;s control.
      </p>

      <h2>9. Governing law</h2>
      <p>
        This DPA is governed by the laws of the European Union and, where applicable, the laws of the Member State in which the Controller is established.
      </p>

      <h2>10. Contact</h2>
      <p>
        DPA enquiries: <a href="mailto:privacy@chiarm.app">privacy@chiarm.app</a>
      </p>
    </LegalLayout>
  );
}
