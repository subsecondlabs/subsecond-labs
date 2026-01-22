import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200">
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a
          href="/"
          className="mb-12 flex items-center gap-2 text-sm text-green-500 transition-colors hover:text-green-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-8 leading-relaxed text-zinc-400">
          <strong>Effective Date:</strong> January 22, 2026<br />
          <strong>Last Updated:</strong> January 22, 2026
        </p>
        <p className="mb-8 leading-relaxed text-zinc-400">
          <strong>SubSecond Labs</strong> ("Company", "We", "Us", or "Our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our web engineering services.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">1. Information We Collect</h2>
        <div className="mb-4 space-y-4 text-zinc-400">
          <p>We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("Personal Information").</p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Personal Identifiers:</strong> Real name, email address, postal address, and phone number (collected via inquiry forms, contracts, or billing details).</li>
            <li><strong>Business Data:</strong> Company URL, server logs, tech stack configurations, and project assets required for service delivery.</li>
            <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type, operating system, and interaction data (collected automatically via server logs and cookies).</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">2. Legal Basis for Processing (GDPR)</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          We process your personal data under the following legal bases:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
          <li><strong>Contractual Necessity:</strong> Processing is required to fulfill our service agreement with you (e.g., building your website, sending invoices).</li>
          <li><strong>Legitimate Interests:</strong> Processing is necessary for our business interests (e.g., fraud prevention, network security, and improving our services).</li>
          <li><strong>Legal Obligation:</strong> Processing is required to comply with tax and accounting laws in India.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">3. How We Use Your Information</h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
          <li>To provide, maintain, and improve our web engineering services.</li>
          <li>To process transactions, generate invoices, and manage client accounts.</li>
          <li>To communicate with you regarding project milestones, security updates, or administrative notices.</li>
          <li>To enforce our Terms of Service and comply with legal obligations.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">4. Third-Party Infrastructure</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          Our services rely on enterprise-grade third-party infrastructure. We do not sell data, but data may be processed by these sub-processors to deliver the Service:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
          <li><strong>Vercel Inc. (USA):</strong> Hosting, Edge Network delivery, and Serverless function execution.</li>
          <li><strong>Sanity.io (Norway/USA):</strong> Content Management System (CMS) data storage.</li>
          <li><strong>Stripe / Wise:</strong> Payment processing and fraud detection.</li>
          <li><strong>Google Analytics / PostHog:</strong> Privacy-focused performance analytics.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">5. Cookie Policy & Do Not Track</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          We use cookies to enhance your experience.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
          <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., session security).</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site. You can disable these in your browser settings.</li>
          <li><strong>Do Not Track (DNT):</strong> Our systems do not currently respond to browser "Do Not Track" signals, as no uniform standard for this signal has been adopted.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">6. International Data Transfers</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          SubSecond Labs is located in <strong>India</strong>. Information we collect may be transferred to, stored, and processed in India or any other country where our third-party processors maintain facilities. By using our Services, you consent to any such transfer of information outside of your country of residence.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">7. Security & Breach Protocol</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          We use administrative, technical, and physical security measures (HTTPS, 2FA, Role-Based Access) to protect your personal information. In the event of a data breach that affects your personal data, we will notify you via email within 72 hours of becoming aware of the breach, in accordance with GDPR and local laws.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">8. Data Retention</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          We retain client project files, code repositories, and communication records for a period of <strong>12 months post-completion</strong> for backup, maintenance, and legal liability purposes. You may request permanent deletion of your data at any time by contacting us.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">9. Your Data Protection Rights (Universal)</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          We are committed to data privacy for all users, regardless of location.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
          <li><strong>Right to Access & Rectification:</strong> Request copies or corrections of your personal data.</li>
          <li><strong>Right to Deletion:</strong> Request erasure of your personal data ("Right to be Forgotten").</li>
          <li><strong>Right to Opt-Out:</strong> We do not sell personal data. To demonstrate our commitment to privacy, we voluntarily extend the right to opt-out of data sales to all users globally, which also satisfies the specific requirements for California residents under the CCPA.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">10. Children's Privacy</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will delete that information.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">11. Grievance Redressal (India)</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the contact details of the Grievance Officer are provided below:
        </p>
        <p className="mb-4 leading-relaxed text-zinc-400">
          <strong>Designation:</strong> Grievance Officer<br />
          <strong>Email:</strong> <a href="mailto:legal@subsecondlabs.com" className="text-green-500 hover:text-green-400">legal@subsecondlabs.com</a><br />
          <strong>Address:</strong> Uttarakhand, India
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">12. Contact Information</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          For general privacy concerns or to exercise your rights, you may contact us at:<br /><br />
          <strong>SubSecond Labs</strong><br />
          Uttarakhand, India<br />
          <strong>Email:</strong> <a href="mailto:legal@subsecondlabs.com" className="text-green-500 hover:text-green-400">legal@subsecondlabs.com</a>
        </p>
      </main>
    </div>
  );
}