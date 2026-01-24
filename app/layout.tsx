import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

// --- POSTHOG INTEGRATION ---
import PostHogPageViewLoader from "./components/core/analytics/PostHogPageViewLoader";
import PostHogProvider from "./components/core/analytics/PostHogProvider";

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
        <PostHogProvider>
          {/* Tracker runs silently in the background */}
          <PostHogPageViewLoader />

          <div className="min-h-screen bg-[#050505] text-zinc-50 selection:bg-green-500/30 selection:text-green-500">
            {/* --- BACKGROUND TEXTURE --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]"></div>
            </div>

            <Header />
            {children}
            <Footer />
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}