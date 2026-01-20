import Image from "next/image";
import { ArrowRight, Gauge, Globe2, Search, Server } from "lucide-react";
import { FadeIn } from "./components/FadeIn";

const engineCards = [
  {
    title: "Next.js Architecture",
    body: "Server rendering and static streaming for instant first paint.",
    icon: Server,
  },
  {
    title: "Vercel Edge Network",
    body: "Global delivery that cuts latency where your leads live.",
    icon: Globe2,
  },
  {
    title: "Perfect SEO Scores",
    body: "Technical foundations that rank higher and convert faster.",
    icon: Search,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50">
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <Image
              src="/logo.svg"
              alt="SubSecond Labs"
              width={140}
              height={32}
              priority
            />
            <span className="sr-only">SubSecond Labs</span>
          </div>
          <a
            href="mailto:rakshit@subsecondlabs.com"
            className="inline-flex items-center gap-2 rounded-md border border-green-500/50 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 transition hover:border-green-400 hover:text-green-300 terminal-glow"
          >
            [ Get Audit ]
          </a>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-green-400">
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
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm font-medium text-zinc-50 transition hover:border-green-500/70 hover:text-green-300"
                >
                  View the Performance Standard
                  <ArrowRight className="h-4 w-4" />
                </a>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <Gauge className="h-4 w-4 text-green-400" />
                  LCP target:{" "}
                  <span className="font-mono text-green-400">0.8s</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center">
              <div className="relative flex h-56 w-56 flex-col items-center justify-center rounded-full border border-green-500/40 bg-green-500/10 text-center terminal-glow">
                <div className="text-6xl font-semibold text-green-400">100</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-green-300">
                  Lighthouse
                </div>
                <div className="mt-2 rounded-full border border-green-500/40 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-green-300">
                  Mobile
                </div>
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
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="glass-panel grid-border rounded-2xl p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                  Average WordPress Site
                </p>
                <div className="mt-6 space-y-3">
                  <div className="text-3xl font-semibold text-red-300">
                    6.5s Load
                  </div>
                  <p className="text-zinc-400">Lost Leads</p>
                  <p className="font-mono text-xs text-zinc-500">
                    Render path: bloated plugins
                  </p>
                </div>
              </div>

              <div className="glass-panel grid-border rounded-2xl p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-green-400">
                  SubSecond Build
                </p>
                <div className="mt-6 space-y-3">
                  <div className="text-3xl font-semibold text-green-300">
                    0.8s Load
                  </div>
                  <p className="text-zinc-300">Captured Revenue</p>
                  <p className="font-mono text-xs text-zinc-500">
                    Render path: engineered for speed
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="engine" className="space-y-10">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Not WordPress. Pure Engineering.
              </h2>
              <p className="max-w-2xl text-lg text-zinc-400">
                We build on a high-performance stack tuned for speed, precision,
                and measurable revenue impact.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {engineCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.title} delay={0.05 * index}>
                  <div className="glass-panel grid-border h-full rounded-2xl p-6">
                    <Icon className="h-6 w-6 text-green-400" />
                    <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                    <p className="mt-3 text-sm text-zinc-400">{card.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>SubSecond Labs. Kansas City &amp; Global.</div>
          <div>Lead Engineer: Rakshit Singh</div>
          <a
            href="mailto:rakshit@subsecondlabs.com"
            className="text-green-400 hover:text-green-300"
          >
            rakshit@subsecondlabs.com
          </a>
        </div>
      </footer>
    </div>
  );
}
