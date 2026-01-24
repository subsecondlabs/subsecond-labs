'use client'

import { useEffect, useState } from 'react'
import AuditModal from './AuditModal'

type AuditCtaButtonProps = {
  className?: string
  label?: string
}

export default function AuditCtaButton({
  className,
  label = 'Get Your Free Audit',
}: AuditCtaButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (!showToast) {
      return
    }

    const timer = window.setTimeout(() => setShowToast(false), 3000)
    return () => window.clearTimeout(timer)
  }, [showToast])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {label}
      </button>

      <AuditModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={() => setShowToast(true)}
      />

      {showToast && (
        <div className="fixed right-6 top-24 z-50 rounded-xl border border-green-500/40 bg-black/80 px-4 py-3 text-xs font-semibold text-green-400 shadow-[0_0_20px_rgba(167,255,84,0.25)]">
          We are reviewing your site now.
        </div>
      )}
    </>
  )
}
