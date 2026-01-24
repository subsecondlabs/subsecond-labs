'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export default function PostHogPageViewLoader() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}
