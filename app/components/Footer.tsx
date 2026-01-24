import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#020202] py-12 text-xs text-zinc-600">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="SubSecond Labs"
              width={24}
              height={24}
              className="h-6 w-6 opacity-70 grayscale"
            />
            <span className="text-base font-semibold tracking-tight text-zinc-400">
              SubSecond Labs
            </span>
          </Link>
          <span className="text-xs text-zinc-500">
            © 2026 SubSecond Labs. All rights reserved.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a href="/privacy" className="hover:text-zinc-400">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-zinc-400">
            Terms of Service
          </a>
          <a href="mailto:hello@subsecondlabs.com" className="hover:text-zinc-400">
            hello@subsecondlabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}
