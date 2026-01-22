import Image from "next/image";
import { ArrowRight, Gauge, Hammer, Rocket, Scan } from "lucide-react";
import { FadeIn } from "./components/FadeIn";

const AUDIT_URL = "https://tally.so/r/Pdz6ad";

const specRows = [
  {
    label: "Load Time",
    standard: "4.2s - 8.0s",
    custom: "< 1.0s",
  },
  {
    label: "Security",
    standard: "Vulnerable Plugins",
    custom: "Bank-Grade",
  },
  {
    label: "SEO",
    standard: "Google Penalized",
    custom: "Google Preferred",
  },
  {
    label: "Maintenance",
    standard: "Monthly Fees",
    custom: "Zero Maintenance",
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
    <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
      {/* HERO */}
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Cyber-Industrial Performance
            </div>

            {/* HEADLINE */}
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl text-balance">
              We Engineer <span className="whitespace-nowrap text-green-500">SubSecond</span> Websites.
            </h1>

            <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
              Stop losing Google Ad leads to slow load times. We guarantee a
              90+ Mobile Performance Score for high-ticket contractors or you don&apos;t pay.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#problem"
                className="group inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-medium text-zinc-50 transition hover:border-green-500/50 hover:text-green-500"
              >
                View the Standard
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <div className="h-px w-8 bg-zinc-800"></div>
                LCP target: <span className="font-mono text-green-500">0.8s</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center">
            <div className="relative flex h-56 w-56 lg:h-64 lg:w-64 flex-col items-center justify-center rounded-full border border-green-500/30 bg-green-500/5 text-center shadow-[0_0_60px_rgba(167,255,84,0.15)] backdrop-blur-sm">
              <div className="text-6xl lg:text-7xl font-bold tracking-tighter text-white">100</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-green-500 font-semibold">
                Lighthouse
              </div>
              <div className="mt-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-green-500">
                Mobile
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* LOGOS */}
      <section className="border-y border-zinc-800/60 bg-black/40 py-10 backdrop-blur-sm">
        <FadeIn delay={0.05}>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
            {/* LABEL GROUP */}
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-zinc-800 md:hidden"></span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-semibold whitespace-nowrap">
                Engineered On
              </p>
              <div className="hidden h-8 w-px bg-zinc-800 md:block"></div>
            </div>

            {/* LOGOS STACK */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale transition duration-500 hover:grayscale-0 hover:opacity-100">
              <Image
                src="/nextjs.svg"
                alt="Next.js"
                width={90}
                height={28}
                className="h-6 w-auto object-contain brightness-0 invert"
              />
              <Image
                src="/vercel.svg"
                alt="Vercel"
                width={80}
                height={22}
                className="h-5 w-auto object-contain brightness-0 invert"
              />
              <Image
                src="/react.svg"
                alt="React"
                width={90}
                height={30}
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section id="problem" className="space-y-12">
        <FadeIn>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white">The 3-Second Rule.</h2>
            <p className="max-w-2xl text-lg text-zinc-400">
              53% of mobile traffic leaves if your site takes over 3 seconds to
              load. Your current site is burning your ad budget.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-red-400 font-semibold">
                Legacy WordPress
              </p>
              <div className="mt-6 space-y-2">
                <div className="text-4xl font-semibold text-red-300">
                  6.5s Load
                </div>
                <p className="text-zinc-500">Bleeding Ad Spend</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-green-500/30 bg-green-500/5 p-8 shadow-[0_0_30px_rgba(167,255,84,0.05)]">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Rocket className="h-12 w-12 text-green-500" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-green-500 font-semibold">
                SubSecond Build
              </p>
              <div className="mt-6 space-y-2">
                <div className="text-4xl font-semibold text-green-500">
                  0.8s Load
                </div>
                <p className="text-zinc-400">Maximum Conversion</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* VISUAL DOMINANCE */}
      <section className="py-12">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-16">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[80px]"></div>

            <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-semibold text-white">Visual Dominance.</h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Speed doesn&apos;t mean ugly. We deliver high-fidelity aesthetics
                  that load instantly. Your competitors look like 2015. You look like 2030.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-zinc-300">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-500">✓</div>
                    4K Image Clarity (WebP)
                  </li>
                  <li className="flex items-center gap-4 text-zinc-300">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-500">✓</div>
                    Fluid Animations (60 FPS)
                  </li>
                  <li className="flex items-center gap-4 text-zinc-300">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-500">✓</div>
                    Dark Mode Optimized
                  </li>
                </ul>
              </div>

              <div className="relative mx-auto w-full max-w-[380px]">
                <div className="relative aspect-[9/18.5] drop-shadow-2xl">
                  <Image
                    src="/mobile-mockup.png"
                    alt="High-Ticket Mobile Experience"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-[60px]"></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* TECH SPECS */}
      <section className="space-y-12">
        <FadeIn>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">The Hardware Difference.</h2>
            <p className="max-w-2xl text-lg text-zinc-400">
              The stack is the product. Compare a legacy WordPress build to a SubSecond
              custom deployment.
            </p>
          </div>
        </FadeIn>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/20">
          {/* Desktop Header (Hidden on Mobile) */}
          <div className="hidden md:grid gap-4 border-b border-zinc-800 bg-zinc-900/50 p-6 grid-cols-[1fr_1fr_1fr]">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Spec</div>
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Standard</div>
            <div className="text-xs uppercase tracking-[0.2em] text-green-500">SubSecond</div>
          </div>

          <div className="p-6 grid gap-6 md:gap-0">
            {specRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-2 gap-y-4 gap-x-4 border-b border-zinc-800/50 pb-6 md:pb-6 last:border-b-0 last:pb-0 md:grid-cols-[1fr_1fr_1fr] md:items-center"
              >
                {/* Label: Full Width on Mobile */}
                <div className="text-sm font-semibold text-zinc-200 col-span-2 md:col-span-1 border-b border-zinc-800/30 md:border-none pb-2 md:pb-0">
                  {row.label}
                </div>

                {/* Standard (Red) */}
                <div className="flex flex-col gap-1">
                  <span className="md:hidden text-[10px] uppercase tracking-wider text-red-400/50 font-medium">
                    Average
                  </span>
                  <span className="text-sm text-red-400/80">{row.standard}</span>
                </div>

                {/* Custom (Green) - Aligned Right on Mobile */}
                <div className="flex flex-col gap-1 items-end md:items-start">
                  <span className="md:hidden text-[10px] uppercase tracking-wider text-green-500/50 font-medium">
                    SubSecond
                  </span>
                  <span className="text-sm font-semibold text-green-500 text-right md:text-left">
                    {row.custom}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="space-y-12">
        <FadeIn>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">From Audit to Launch in 7 Days.</h2>
            <p className="max-w-2xl text-lg text-zinc-400">
              A tight, repeatable protocol that ships a performance-first site fast.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {protocolSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.title} delay={0.05 * index}>
                <div className="group relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 transition hover:border-zinc-700 hover:bg-zinc-900/40">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-500">
                    <span>0{index + 1}</span>
                    <Icon className="h-5 w-5 text-green-500 opacity-60 transition group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-zinc-100">{step.title}</h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{step.body}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="space-y-12">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-white">
            Built on the Modern Web&apos;s Bleeding Edge.
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {arsenalCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 transition hover:bg-zinc-900/40"
            >
              <h3 className="text-base font-semibold text-zinc-200">{card.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 px-6 py-24 text-center sm:px-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-green-500/20 blur-[100px]"></div>
          <div className="relative z-10 mx-auto max-w-2xl space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to weaponize your website?
            </h2>
            <p className="text-lg text-zinc-400">
              You are losing leads every second your current site loads. Stop the bleeding.
            </p>
            {/* BUTTON UPDATE: text-black for visibility on neon */}
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-green-500 px-8 py-4 text-base font-bold text-black shadow-[0_0_20px_rgba(167,255,84,0.4)] transition duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:scale-105"
            >
              Get Your Free Audit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}