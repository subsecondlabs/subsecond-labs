'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAnalytics } from "./core/analytics/useAnalytics";
import AuditModal from "./features/audit/AuditModal";

const navLinks = [
  { label: "The Standard", href: "#standard" },
  { label: "Services", href: "#services" },
  { label: "Audit", href: "#audit" },
];

export default function Header() {
  const { track } = useAnalytics();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) {
      return
    }

    const timer = window.setTimeout(() => setShowToast(false), 3000)
    return () => window.clearTimeout(timer)
  }, [showToast])

  const openAudit = () => {
    setIsAuditOpen(true)
    setIsOpen(false)
    track("audit_modal_opened")
  }

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#050505]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="SubSecond Labs"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-white">
            SubSecond<span className="text-green-500">Labs</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-green-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <button
            type="button"
            onClick={openAudit}
            className="inline-flex items-center gap-2 rounded-md border border-green-500/70 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500 transition hover:border-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(167,255,84,0.5)]"
          >
            Get Free Audit
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md border border-zinc-800/80 bg-zinc-900/60 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-green-500/60 hover:text-green-500 md:hidden"
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-zinc-800/80 bg-[#050505]/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-zinc-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-green-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-green-500/70 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500 transition hover:border-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(167,255,84,0.5)]"
              onClick={openAudit}
            >
              Get Free Audit
            </button>
          </div>
        </div>
      )}

      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        onSuccess={() => setShowToast(true)}
      />

      {showToast && (
        <div className="fixed right-6 top-24 z-50 rounded-xl border border-green-500/40 bg-black/80 px-4 py-3 text-xs font-semibold text-green-400 shadow-[0_0_20px_rgba(167,255,84,0.25)]">
          We are reviewing your site now.
        </div>
      )}
    </header>
  );
}
