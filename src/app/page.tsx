import React, { Suspense, lazy } from 'react'

const HeroHeader = lazy(() => import('./(home)/HeroHeader'))
const CTASection = lazy(() => import('./(home)/CTASection'))

export default function Home() {
  return (
    <>
      <Suspense fallback={<></>}>
        <HeroHeader />
      </Suspense>
      <Suspense fallback={<></>}>
        <CTASection />
      </Suspense>
      <div>Ray Foundation</div>
    </>
  )
}
