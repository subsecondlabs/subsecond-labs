import Image from "next/image";
import { ArrowRight, Gauge, Hammer, Rocket, Scan } from "lucide-react";
import { FadeIn } from "./components/FadeIn";

// RUTHLESS UPDATE: Aggressive Copy Installed
const specRows = [
  {
    label: "Load Time",
    standard: "4.2s - 8.0s",
    custom: "< 1.0s (Sub-Second)",
  },
  {
    label: "Security",
    standard: "Vulnerable Plugins",
    custom: "Bank-Grade Encryption", // Trustworthy & Strong
  },
  {
    label: "SEO",
    standard: "Google Penalized",     // Fear Trigger (Keep this!)
    custom: "Google Preferred",       // Authority Trigger
  },
  {
    label: "Maintenance",
    standard: "Monthly Fees & Updates", // The Pain Point
    custom: "Zero Maintenance",         // The Solution (Keep this!)
  },
];

const protocolSteps = [
  {
    title: "The Audit",
    body: "We rip apart your current metrics and identify the revenue leaks.",
    icon: Scan,
  },
  {
    title: "The Re-Engineering",
    body: "We rebuild your core pages on Next.js. No drag-and-drop. Pure code.",
    icon: Hammer,
  },
  {
    title: "The Handover",
    body: "We deploy to Vercel's global edge network. You get a perfect 100 Score.",
    icon: Rocket,
  },
];

const arsenalCards = [
  {
    title: "React Server Components",
    body: "Zero client-side bloat. Logic runs on the server, not the user's phone.",
  },
  {
    title: "Vercel Edge Network",
    body: "Static assets replicated in 100+ global data centers. Instant delivery everywhere.",
  },
  {
    title: "Next.js Image Optimization",
    body: "Automatic webp conversion. Images are never the bottleneck.",
  },
  {
    title: "Type-Safe Architecture",
    body: "TypeScript ensures your site effectively never crashes.",
  },
  {
    title: "Semantic SEO",
    body: "Google reads our code perfectly. No messy div-soup.",
  },
  {
    title: "CMS Integration",
    body: "You edit text in Sanity.io. We handle the code. Best of both worlds.",
  },
];

const faqItems = [
  {
    question: "Can I still edit my own text?",
    answer:
      "Yes. We connect a Headless CMS (Sanity.io) so you can edit content without breaking the code.",
  },
  {
    question: "Why not just use WordPress?",
    answer: "WordPress is for blogs. Next.js is for businesses that can't afford to be slow.",
  },
  {
    question: "What is the guarantee?",
    answer: "If we don't hit a Green Mobile Score (90+), you don't pay.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50">
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 tracking-tight">
            <Image
              src="/logo.svg"
              alt="SubSecond Labs"
              width={210}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>
          {/* STEALTH UPDATE: Changed to hello@ */}
          <a
            href="mailto:hello@subsecondlabs.com"
            className="inline-flex items-center gap-2 rounded-md border border-green-500/70 bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-500 transition hover:border-green-500 hover:bg-green-500/25 hover:text-green-500 terminal-glow"
          >
            [ Get Audit ]
          </a>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-green-500">
                Cyber-Industrial Performance
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                We Engineer Sub-Second Websites for High-Ticket Contractors.
              </h1>
              <p className="max-w-xl text-lg text-zinc-400">
                Stop losing Google Ad leads to slow load times. We guarantee a
                90+ Mobile Performance Score or you don&apos;t pay.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#problem"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm font-medium text-zinc-50 transition hover:border-green-500/70 hover:text-green-500"
                >
                  View the Performance Standard
                  <ArrowRight className="h-4 w-4" />
                </a>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <Gauge className="h-4 w-4 text-green-500" />
                  LCP target:{" "}
                  <span className="font-mono text-green-500">0.8s</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center">
              <div className="relative flex h-56 w-56 flex-col items-center justify-center rounded-full border border-green-500/40 bg-green-500/10 text-center shadow-[0_0_35px_rgba(167,255,84,0.4)] terminal-glow">
                <div className="text-6xl font-semibold text-white">100</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-green-500">
                  Lighthouse
                </div>
                <div className="mt-2 rounded-full border border-green-500/40 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-green-500">
                  Mobile
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="border-y border-zinc-800/80 py-16">
          <FadeIn delay={0.05}>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                Engineered On
              </p>
              <div className="flex flex-wrap items-center gap-8 text-zinc-400">
                <Image
                  src="/nextjs.svg"
                  alt="Next.js"
                  width={180}
                  height={48}
                  className="h-8 w-28 object-contain invert brightness-0 opacity-50"
                />
                <Image
                  src="/vercel.svg"
                  alt="Vercel"
                  width={160}
                  height={48}
                  className="h-8 w-28 object-contain invert brightness-0 opacity-50"
                />
                <Image
                  src="/react.svg"
                  alt="React"
                  width={170}
                  height={48}
                  className="h-8 w-28 object-contain invert brightness-0 opacity-50"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="problem" className="space-y-10">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">The 3-Second Rule.</h2>
              <p className="max-w-2xl text-lg text-zinc-400">
                53% of mobile traffic leaves if your site takes over 3 seconds to
                load. Your current site is burning your ad budget.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-panel grid-border rounded-2xl p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                  Average WordPress Site
                </p>
                <div className="mt-6 space-y-3">
                  <div className="text-3xl font-semibold text-red-300">
                    6.5s Load
                  </div>
                  <p className="text-zinc-400">Lost Leads</p>
                  <p className="font-mono text-xs text-zinc-400">
                    Render path: bloated plugins
                  </p>
                </div>
              </div>

              <div className="glass-panel grid-border rounded-2xl p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-green-500">
                  SubSecond Build
                </p>
                <div className="mt-6 space-y-3">
                  <div className="text-3xl font-semibold text-green-500">
                    0.8s Load
                  </div>
                  <p className="text-zinc-300">Captured Revenue</p>
                  <p className="font-mono text-xs text-zinc-400">
                    Render path: engineered for speed
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="space-y-10">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">The Hardware Difference.</h2>
              <p className="max-w-2xl text-lg text-zinc-400">
                The stack is the product. Compare a legacy WordPress build to a SubSecond
                custom deployment tuned for speed and resilience.
              </p>
            </div>
          </FadeIn>

          <div className="glass-panel grid-border rounded-2xl p-6">
            <div className="grid gap-4 border-b border-zinc-800 pb-4 md:grid-cols-[1fr_1fr_1fr]">
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Spec</div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Standard WordPress
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                SubSecond Custom Build
              </div>
            </div>
            <div className="mt-4 grid gap-4">
              {specRows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-3 border-b border-zinc-800/60 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[1fr_1fr_1fr]"
                >
                  <div className="text-sm font-semibold text-zinc-200">{row.label}</div>
                  <div className="text-sm text-red-300">{row.standard}</div>
                  <div className="text-sm font-semibold text-[#a3ff12]">{row.custom}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">From Audit to Launch in 7 Days.</h2>
              <p className="max-w-2xl text-lg text-zinc-400">
                A tight, repeatable protocol that ships a performance-first site fast without
                sacrificing build quality.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {protocolSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={0.05 * index}>
                  <div className="glass-panel grid-border flex h-full flex-col gap-4 rounded-2xl p-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-500">
                      <span>Step {index + 1}</span>
                      <Icon className="h-5 w-5 text-[#a3ff12]" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100">{step.title}</h3>
                    <p className="text-sm text-zinc-400">{step.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="space-y-10">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Built on the Modern Web&apos;s Bleeding Edge.
              </h2>
              <p className="max-w-2xl text-lg text-zinc-400">
                We don&apos;t use plugins. We use raw engineering.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {arsenalCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:border-green-500/80"
              >
                <h3 className="text-lg font-semibold text-zinc-100">{card.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Technical Briefing.</h2>
              <p className="max-w-2xl text-lg text-zinc-400">
                Straight answers to the most common production questions before you commit.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="glass-panel grid-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100">{item.question}</h3>
                <p className="mt-3 text-sm text-zinc-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="min-h-[50vh]">
          <div className="glass-panel grid-border flex h-full flex-col justify-between gap-10 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(163,255,18,0.2),_rgba(5,5,5,0.95)_65%)] px-6 py-16 text-center sm:px-10 lg:px-16">
            <div className="mx-auto max-w-3xl space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                The Kill
              </p>
              <h2 className="text-4xl font-semibold text-zinc-50 md:text-5xl">
                Ready to weaponize your website?
              </h2>
              <p className="text-lg text-zinc-300">
                You are losing leads every second your current site loads. Stop the bleeding.
              </p>
              {/* STEALTH UPDATE: Changed to hello@ */}
              <a
                href="mailto:hello@subsecondlabs.com"
                className="inline-flex items-center justify-center rounded-md border border-green-500/70 bg-green-500/15 px-6 py-3 text-base font-semibold text-green-500 transition hover:border-green-500 hover:bg-green-500/25 hover:text-green-500 terminal-glow"
              >
                Get Your Free Audit
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 bg-[#050505] py-12 text-xs text-zinc-600">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="SubSecond Labs"
              width={120}
              height={28}
              className="h-6 w-auto opacity-70 grayscale"
            />
            <span>© 2026 SubSecond Labs. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" className="transition hover:text-zinc-400">
              Privacy Policy
            </a>
            <a href="/terms" className="transition hover:text-zinc-400">
              Terms of Service
            </a>
            {/* STEALTH UPDATE: Changed to hello@ */}
            <a
              href="mailto:hello@subsecondlabs.com"
              className="transition hover:text-zinc-400"
            >
              hello@subsecondlabs.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}