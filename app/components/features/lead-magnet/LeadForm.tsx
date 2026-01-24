'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { captureLead } from '../../../actions/capture-lead'
import { leadSchema, type LeadInput } from '../../../lib/leadSchema'

type LeadFormProps = {
  source?: string
}

type FormStatus = 'idle' | 'success' | 'error'

export default function LeadForm({ source = 'lead-magnet' }: LeadFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadInput>({
    defaultValues: {
      email: '',
      firstName: '',
      source,
    },
  })

  const onSubmit = (values: LeadInput) => {
    const parsed = leadSchema.safeParse(values)
    if (!parsed.success) {
      setStatus('error')
      return
    }

    setStatus('idle')
    startTransition(async () => {
      const result = await captureLead(parsed.data)
      if (result?.success) {
        setStatus('success')
        reset({ email: '', firstName: '', source })
      } else {
        setStatus('error')
      }
    })
  }

  return (
    <section className="rounded-3xl border border-zinc-800 bg-[#050505] px-6 py-12 text-center shadow-[0_0_40px_rgba(0,0,0,0.2)]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-green-500 font-semibold">
            Lead Magnet
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Get the 1.0s Performance Framework
          </h2>
          <p className="text-sm text-zinc-400 md:text-base">
            Enter your email and we will send the internal checklist we use to
            hit perfect Lighthouse scores.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-3 sm:flex-row"
        >
          <input type="hidden" {...register('source')} defaultValue={source} />
          <label className="flex-1">
            <span className="sr-only">First name</span>
            <input
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className="w-full rounded-lg border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-green-500/60 focus:outline-none"
              {...register('firstName')}
            />
          </label>
          <label className="flex-1">
            <span className="sr-only">Email</span>
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              className="w-full rounded-lg border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-green-500/60 focus:outline-none"
              {...register('email', { required: true })}
            />
          </label>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(167,255,84,0.4)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? 'Sending...' : 'Send the Framework'}
          </button>
        </form>

        {errors.email && (
          <p className="text-xs text-red-400">Enter a valid email.</p>
        )}
        {status === 'success' && (
          <p className="text-xs text-green-400">
            Sent. Check your inbox in a moment.
          </p>
        )}
        {status === 'error' && (
          <p className="text-xs text-red-400">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  )
}
