import React, { Suspense, lazy } from 'react'

const HeroHeader = lazy(() => import('./(home)/HeroHeader'))
const CTASection = lazy(() => import('./(home)/CTASection'))
const About = lazy(() => import('./(home)/About'))
const Approach = lazy(() => import('./(home)/Approach'))

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <HeroHeader />
      </Suspense>
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Approach />
      </Suspense>
      <Suspense fallback={null}>
        <CTASection
          heading='Get Involved and Make a Difference'
          subheading="Education is a light, let's keep it shining bright. Support our
          cause through donations."
        />
      </Suspense>
    </>
  )
}
