import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p className="mb-8 leading-relaxed text-zinc-400">
          <strong>Effective Date:</strong> January 21, 2026<br />
          <strong>Last Updated:</strong> January 21, 2026
        </p>
        <p className="mb-8 leading-relaxed text-zinc-400">
          These Terms of Service ("Terms") constitute a binding legal agreement between <strong>SubSecond Labs</strong> ("Agency", "We", "Us") and the entity engaging our services ("Client", "You"). By accepting a Proposal, paying a deposit, or using our Services, you agree to be bound by these Terms.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">1. Scope of Services</h2>
        <div className="mb-4 space-y-4 text-zinc-400">
          <p><strong>1.1 Deliverables:</strong> The Agency shall provide the web engineering, development, and auditing services specifically outlined in the Invoice or Project Proposal ("Services").</p>
          <p><strong>1.2 Exclusions:</strong> Unless explicitly stated in the Proposal, Services do not include domain registration, ongoing SEO marketing, content writing, or graphic design.</p>
          <p><strong>1.3 Revisions & Change Orders:</strong> The Client is entitled to two (2) rounds of minor revisions during the development phase. Any major structural changes or feature additions requested after the approval of the design phase will be treated as a <strong>Change Order</strong>. Such changes will be scoped separately and incur an <strong>additional fixed fee</strong>, which must be approved and paid by the Client before the extra work commences.</p>
          <p><strong>1.4 Deemed Acceptance:</strong> Upon delivery of the final project (or a Staging Link), the Client has a window of <strong>five (5) business days</strong> to review the work and report any material defects. If the Client fails to provide written feedback within this period, the Deliverables will be legally deemed <strong>"Accepted"</strong>, and the Final Balance will become immediately due.</p>
        </div>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">2. Fees, Payments & Taxes</h2>
        <div className="mb-4 space-y-4 text-zinc-400">
          <p><strong>2.1 Deposit:</strong> A non-refundable deposit of <strong>50%</strong> of the total project fee is required to commence work.</p>
          <p><strong>2.2 Final Balance:</strong> The remaining 50% is due immediately upon project completion (or Deemed Acceptance). The Agency will provide a live "Staging Link" for review. The final source code and domain transfer will ONLY occur after the final balance has cleared in the Agency's bank account.</p>
          <p><strong>2.3 Payment Methods:</strong> We accept payments via Stripe (Credit Card) and International Wire Transfer (Wise/SWIFT).</p>
          <p><strong>2.4 Escrow Option:</strong> For projects exceeding $5,000 USD, the Client may request to use a licensed Escrow service (e.g., Escrow.com). In this event, the Client agrees to pay all associated transaction and escrow fees.</p>
          <p><strong>2.5 Taxes & Transfer Fees:</strong> All fees are exclusive of taxes, levies, or duties imposed by taxing authorities. The Client is responsible for paying all such taxes (including but not limited to VAT, GST, or Withholding Tax). Furthermore, the Client shall cover all bank charges or wire transfer fees, ensuring the Agency receives the full invoiced amount.</p>
          <p><strong>2.6 Third-Party Costs:</strong> The Client is solely responsible for all direct costs associated with third-party vendors required for the project, including but not limited to Vercel hosting, Sanity CMS plans, Domain Name registration, and API credits. The Client agrees to attach their own billing method to these services prior to handoff.</p>
          <p><strong>2.7 Dispute & Chargeback Policy:</strong> The Client agrees to contact the Agency to resolve any billing disputes before contacting their bank. <strong>If the Client initiates a chargeback or payment dispute without valid cause:</strong> (a) The Client immediately forfeits all Intellectual Property rights to the Deliverables; (b) The Agency reserves the right to immediately take down the website and issue a DMCA notice to the domain registrar; and (c) The Client will be liable for a $250 administrative penalty plus all legal costs incurred to recover funds.</p>
        </div>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">3. Standards, Guarantees & Compatibility</h2>
        <div className="mb-4 space-y-4 text-zinc-400">
          <p><strong>3.1 The 90+ Performance Guarantee:</strong> We guarantee a Mobile Performance Score of <strong>90+ (Green)</strong> on Google Lighthouse at the moment of final deployment.</p>
          <p><strong>3.2 Accessibility (ADA/WCAG):</strong> We employ best practices to ensure the Deliverables comply with <strong>WCAG 2.1 Level AA</strong> standards. However, digital accessibility is an ongoing process. The Agency does not warrant that the website will be error-free or 100% compliant at all times.</p>
          <p><strong>3.3 Guarantee Voidance:</strong> All guarantees are automatically void if the Client or their agents: (a) Upload uncompressed media files (&gt;500KB); (b) Install third-party scripts (e.g., heavy chat widgets, pixels); or (c) Modify the source code without Agency supervision.</p>
          <p><strong>3.4 Zero Maintenance Defined:</strong> "Zero Maintenance" refers to the stability of the serverless architecture. It does not imply free ongoing content updates, feature additions, or bug fixes caused by Client modification.</p>
          <p><strong>3.5 Browser Compatibility:</strong> The Website will be engineered to function on the latest two versions of major modern browsers (Chrome, Safari, Firefox, Edge). We do not guarantee compatibility with obsolete browsers (e.g., Internet Explorer 11) unless explicitly scoped.</p>
        </div>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">4. Intellectual Property Rights</h2>
        <div className="mb-4 space-y-4 text-zinc-400">
          <p><strong>4.1 Client Ownership (Deliverables):</strong> Upon full payment, the Agency assigns to the Client all right, title, and interest in the custom "Deliverables" (page layouts, content integration, and front-end code created unique to the Project).</p>
          <p><strong>4.2 Agency Background IP:</strong> The Agency retains full ownership of its proprietary codebase, pre-existing libraries, hooks, utility functions, and optimization engines ("Background Technology") used to build the Deliverables.</p>
          <p><strong>4.3 License Grant:</strong> The Agency grants the Client a perpetual, non-exclusive, royalty-free, worldwide license to use the Background Technology <em>solely as integrated into the final Website</em>.</p>
          <p><strong>4.4 Source Code Exclusion:</strong> This license applies only to the compiled or packaged form (Object Code) of the Background Technology. <strong>The Client has no right to access, extract, reverse-engineer, or resell the uncompiled source code repositories of the Agency's Background Technology.</strong></p>
          <p><strong>4.5 Feedback:</strong> If the Client provides specific suggestions or feedback regarding the Agency's Background Technology, the Agency retains all rights to implement such feedback into its core products without royalty or obligation to the Client.</p>
        </div>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">5. Client Obligations & Warranty</h2>
        <div className="mb-4 space-y-4 text-zinc-400">
          <p><strong>5.1 Assets:</strong> The Client agrees to provide all necessary assets (branding, text, credentials) in a timely manner.</p>
          <p><strong>5.2 Legal Warranty:</strong> The Client warrants that they own or have the right to use all content (text, images, trademarks) provided to the Agency. The Agency is not responsible for copyright infringement in materials provided by the Client.</p>
        </div>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">6. Indemnification</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          The Client agrees to indemnify, defend, and hold harmless SubSecond Labs and its employees from any and all claims, liabilities, damages, and expenses (including legal fees) arising from: (a) The Client's breach of these Terms; (b) Content provided by the Client (e.g., copyright claims, defamation); (c) The Client's business operations or products sold via the Website.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">7. Limitation of Liability</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUBSECOND LABS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR DATA LOSS CAUSED BY THIRD-PARTY INFRASTRUCTURE (VERCEL, SANITY, AWS). OUR TOTAL LIABILITY SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT IN THE SIX (6) MONTHS PRECEDING THE CLAIM.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">8. Force Majeure</h2>
        <p className="mb-4 leading-relaxed text-zinc-400">
          The Agency shall not be liable for any failure or delay in performance caused by circumstances beyond its reasonable control, including but not limited to acts of God, internet service provider failures (e.g., Vercel outages), denial of service attacks, or government restrictions.
        </p>

        <h2 className="mb-4 mt-12 text-xl font-semibold text-white">9. General Provisions</h2>
        <div className="mb-4 space-y-4 text-zinc-400">
          <p><strong>9.1 Governing Law:</strong> These Terms shall be governed by the laws of <strong>India</strong>. Legal action shall be instituted exclusively in the courts of <strong>Uttarakhand, India</strong>.</p>
          <p><strong>9.2 Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
          <p><strong>9.3 Marketing Rights:</strong> Unless a strict NDA is signed, the Agency retains the right to display the final Project in its portfolio and marketing materials to demonstrate its capabilities.</p>
          <p><strong>9.4 Non-Solicitation:</strong> During the term of this engagement and for 24 months thereafter, the Client agrees not to directly hire, recruit, or solicit any employee or contractor of the Agency.</p>
          <p><strong>9.5 Entire Agreement:</strong> These Terms constitute the entire agreement between the parties and supersede all prior agreements or understandings.</p>
          <p><strong>9.6 Notices:</strong> Legal notices may be delivered via email to the address on file and will be considered effective 24 hours after sending.</p>
        </div>
      </main>
    </div>
  );
}