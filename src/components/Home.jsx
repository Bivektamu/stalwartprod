
import React, { Suspense } from 'react'
import { Hero } from './Hero'
import { Plan } from './Plan'
import Loader from './Loader'
import Work from './Work'
import Team from './Team'
import { Contact } from './Contact'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>


      <Suspense fallback={<Loader />}>
        <Plan />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Work />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Team />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>


    </>
  )
}


