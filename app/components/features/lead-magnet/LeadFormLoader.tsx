'use client'

import dynamic from 'next/dynamic'

const LeadForm = dynamic(() => import('./LeadForm'), {
  ssr: false,
  loading: () => (
    <section className="min-h-[320px] rounded-3xl border border-zinc-800 bg-[#050505] px-6 py-12 text-center shadow-[0_0_40px_rgba(0,0,0,0.2)]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <div className="h-4 w-32 rounded-full bg-zinc-800/70"></div>
        <div className="h-8 w-72 rounded-full bg-zinc-800/70"></div>
        <div className="h-4 w-full max-w-xl rounded-full bg-zinc-800/70"></div>
        <div className="h-12 w-full rounded-xl bg-zinc-800/70"></div>
      </div>
    </section>
  ),
})

type LeadFormLoaderProps = {
  source?: string
}

export default function LeadFormLoader({ source }: LeadFormLoaderProps) {
  return <LeadForm source={source} />
}
