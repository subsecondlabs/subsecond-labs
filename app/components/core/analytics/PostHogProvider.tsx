'use client'

import { useEffect, type ReactNode } from 'react'
import posthog from 'posthog-js'

type PostHogProviderProps = {
  children: ReactNode
}

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

export default function PostHogProvider({ children }: PostHogProviderProps) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (!key || !host) {
      return
    }

    const isReady = Boolean((posthog as { __loaded?: boolean }).__loaded)
    if (isReady) {
      return
    }

    const cancel = scheduleIdle(() => {
      posthog.init(key, {
        api_host: host,
        ui_host: host,
        capture_pageview: false,
      })
    })

    return cancel
  }, [])

  return <>{children}</>
}
