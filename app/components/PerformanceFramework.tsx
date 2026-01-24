'use client'

import { useAnalytics } from './core/analytics/useAnalytics'

const AUDIT_URL = process.env.NEXT_PUBLIC_AUDIT_URL ?? ''

export default function PerformanceFramework() {
  const { track } = useAnalytics()

  const handleAccess = () => {
    if (!AUDIT_URL) {
      return
    }

    track('framework_accessed')
    window.location.href = AUDIT_URL
  }

  return (
    <section className="rounded-3xl border border-zinc-800 bg-[#050505] px-6 py-12 text-center shadow-[0_0_40px_rgba(0,0,0,0.2)]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        <p className="text-xs uppercase tracking-[0.3em] text-green-500 font-semibold">
          Performance Resource
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          The 1.0s Performance Framework
        </h2>
        <p className="font-mono text-sm text-zinc-400 md:text-base">
          Access the internal technical checklist we use to bypass WordPress
          limitations and hit 100/100 Lighthouse scores. Zero bloat. Pure
          engineering.
        </p>
        <ul className="mt-2 space-y-3 text-left text-sm text-zinc-300 md:text-base">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-500"></span>
            <span>The Hydration Tax: Why your current site "freezes" on mobile.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-500"></span>
            <span>DOM Depth: The hidden reason iPhones struggle with your layout.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-500"></span>
            <span>Edge Propagation: Reducing TTFB from 1000ms to &lt;50ms.</span>
          </li>
        </ul>
        <button
          type="button"
          onClick={handleAccess}
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(167,255,84,0.4)] transition hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
        >
          Access the Framework
        </button>
      </div>
    </section>
  )
}
