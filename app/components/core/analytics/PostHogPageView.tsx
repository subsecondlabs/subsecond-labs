'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'

type IdleHandle = number
type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => IdleHandle
  cancelIdleCallback?: (handle: IdleHandle) => void
}

const scheduleIdle = (callback: () => void) => {
  const win = window as IdleWindow
  if (win.requestIdleCallback) {
    const handle = win.requestIdleCallback(callback, { timeout: 2000 })
    return () => win.cancelIdleCallback?.(handle)
  }

  const handle = window.setTimeout(callback, 1)
  return () => window.clearTimeout(handle)
}

export default function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams?.toString() ?? ''

  useEffect(() => {
    if (!pathname || typeof window === 'undefined') {
      return
    }

    const hasKey = Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY)
    const isReady = Boolean((posthog as { __loaded?: boolean }).__loaded)

    if (!hasKey || !isReady) {
      return
    }

    const cancel = scheduleIdle(() => {
      const url = `${window.location.origin}${pathname}${search ? `?${search}` : ''}`
      posthog.capture('$pageview', { $current_url: url })
    })

    return cancel
  }, [pathname, search])

  return null
}
