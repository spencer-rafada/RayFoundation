import React, { Suspense, lazy } from 'react'

const HeroHeader = lazy(() => import('./(home)/HeroHeader'))

export default function Home() {
  return (
    <>
      <Suspense fallback={<></>}>
        <HeroHeader />
      </Suspense>
      <div>Ray Foundation</div>
    </>
  )
}
