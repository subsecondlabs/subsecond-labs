import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SubSecond Labs — Sub-Second Web Engineering",
  description:
    "We engineer sub-second websites for high-ticket contractors. 90+ mobile performance score guaranteed or you don't pay.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

const AUDIT_URL = "https://tally.so/r/Pdz6ad";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#050505] text-zinc-50 antialiased`}
      >
        <div className="min-h-screen bg-[#050505] text-zinc-50 selection:bg-green-500/30 selection:text-green-500">
          {/* --- BACKGROUND TEXTURE --- */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]"></div>
          </div>

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
              <a
                href={AUDIT_URL}
                aria-label="Get Audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-green-500/70 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500 transition hover:border-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(167,255,84,0.5)]"
              >
                [ Get Audit ]
              </a>
            </nav>
          </header>

          {children}

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
        </div>
      </body>
    </html>
  );
}
