
import React, { Suspense } from 'react'
import { Hero } from './Hero'
import { Plan } from './Plan'
import Loading from './Loading'
import Work from './Work'
import Team from './Team'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>


      <Suspense fallback={<Loading />}>
        <Plan />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Work />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Team />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>


    </>
  )
}


