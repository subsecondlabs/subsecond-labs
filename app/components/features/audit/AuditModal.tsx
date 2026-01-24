'use client'

import { useEffect, useMemo, useState, useTransition } from 'react'
import { createPortal } from 'react-dom'
import { submitAudit } from '../../../actions/submit-audit'

type AuditModalProps = {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const revenueOptions = [
  '$0-1M',
  '$1M-5M',
  '$5M-10M',
  '$10M+',
]

export default function AuditModal({ isOpen, onClose, onSuccess }: AuditModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [contactInfo, setContactInfo] = useState('')
  const [revenueSegment, setRevenueSegment] = useState(revenueOptions[0])
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setWebsiteUrl('')
      setContactInfo('')
      setRevenueSegment(revenueOptions[0])
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
                  contactInfo,
                  revenueSegment,
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
                value={contactInfo}
                onChange={(event) => setContactInfo(event.target.value)}
                placeholder="you@company.com"
                required
                className="rounded-lg border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-green-500/60 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Revenue Segment
              <select
                value={revenueSegment}
                onChange={(event) => setRevenueSegment(event.target.value)}
                className="rounded-lg border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white focus:border-green-500/60 focus:outline-none"
              >
                {revenueOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

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
                className="inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(167,255,84,0.4)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPending ? 'Requesting...' : 'Request Audit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }, [canRender, contactInfo, error, isPending, onClose, onSuccess, revenueSegment, websiteUrl])

  if (!modal) {
    return null
  }

  return createPortal(modal, document.body)
}
