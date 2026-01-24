'use client'

import posthog from 'posthog-js'

type TrackEvent = (eventName: string, properties?: Record<string, unknown>) => void

export function useAnalytics(): { track: TrackEvent } {
  const track: TrackEvent = (eventName, properties) => {
    const hasKey = Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY)
    const isReady = Boolean((posthog as { __loaded?: boolean }).__loaded)

    if (!hasKey || !isReady) {
      return
    }

    posthog.capture(eventName, properties)
  }

  return { track }
}
