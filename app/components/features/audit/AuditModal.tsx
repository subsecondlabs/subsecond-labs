'use client'

import { useEffect, useMemo, useState, useTransition } from 'react'
import { createPortal } from 'react-dom'
import { submitAudit } from '../../../actions/submit-audit'

type AuditModalProps = {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const revenueOptions = ['<$1M', '$1M-$5M', '$5M+']
const goalOptions = ['Fix Speed', 'Get More Leads', 'Full Rebrand']

export default function AuditModal({ isOpen, onClose, onSuccess }: AuditModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [revenueSegment, setRevenueSegment] = useState(revenueOptions[0])
  const [primaryGoal, setPrimaryGoal] = useState(goalOptions[0])
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setWebsiteUrl('')
      setContactEmail('')
      setRevenueSegment(revenueOptions[0])
      setPrimaryGoal(goalOptions[0])
      setError('')
    }
  }, [isOpen])

  const canRender = isMounted && isOpen

  const modal = useMemo(() => {
    if (!canRender) {
      return null
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="relative w-full max-w-xl rounded-3xl border border-zinc-800 bg-[#050505] p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-green-500 font-semibold">
              Audit Access
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get a Sub-Second Audit.
            </h2>
            <p className="text-sm text-zinc-400">
              We only accept 5 audits per week. Enter your site below.
            </p>
          </div>

          <form
            className="mt-6 flex flex-col gap-4"
            onSubmit={(event) => {
              event.preventDefault()
              setError('')

              startTransition(async () => {
                const result = await submitAudit({
                  websiteUrl,
                  contactEmail,
                  revenueSegment,
                  primaryGoal,
                })

                if (result?.success) {
                  onClose()
                  onSuccess()
                } else {
                  setError('Enter a valid website URL.')
                }
              })
            }}
          >
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Website URL
              <input
                type="url"
                value={websiteUrl}
                onChange={(event) => setWebsiteUrl(event.target.value)}
                placeholder="https://yourcompany.com"
                autoFocus
                required
                className="rounded-lg border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-green-500/60 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Email
              <input
                type="email"
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
                placeholder="you@company.com"
                required
                className="rounded-lg border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-green-500/60 focus:outline-none"
              />
            </label>
            <fieldset className="flex flex-col gap-2 text-sm text-zinc-300">
              <legend className="text-sm text-zinc-300">Revenue Segment</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {revenueOptions.map((option) => {
                  const isActive = revenueSegment === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setRevenueSegment(option)}
                      className={`rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${isActive
                        ? 'border-green-500 bg-green-500 text-black shadow-[0_0_16px_rgba(167,255,84,0.35)]'
                        : 'border-zinc-800 bg-black/60 text-zinc-400 hover:border-green-500/60 hover:text-green-300'
                        }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-2 text-sm text-zinc-300">
              <legend className="text-sm text-zinc-300">Primary Goal</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {goalOptions.map((option) => {
                  const isActive = primaryGoal === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setPrimaryGoal(option)}
                      className={`rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${isActive
                        ? 'border-green-500 bg-green-500 text-black shadow-[0_0_16px_rgba(167,255,84,0.35)]'
                        : 'border-zinc-800 bg-black/60 text-zinc-400 hover:border-green-500/60 hover:text-green-300'
                        }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            {error && <p className="text-xs text-red-400">{error}</p>}

            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-200"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="inline-flex w-full items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(167,255,84,0.4)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isPending ? 'Requesting...' : 'Request Free Audit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }, [canRender, contactEmail, error, isPending, onClose, onSuccess, primaryGoal, revenueSegment, websiteUrl])

  if (!modal) {
    return null
  }

  return createPortal(modal, document.body)
}
