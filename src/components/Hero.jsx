import React, { useEffect, useRef } from 'react'

export const Hero = () => {
  const parallaxRef = useRef(null)
  const heroRefs = useRef([])

  useEffect(() => {
      parallaxRef.current.style.transform = `scale(1)`

  
    if(window.scrollY === 0) {

    }
    setTimeout(() => {
      heroRefs.current[0].classList.add('animated')
    }, 500);

    setTimeout(() => {
      heroRefs.current[1].classList.add('animated')
      parallaxRef.current.classList.remove('transition-transform', 'duration-1000')
    }, 1000);

    window.addEventListener('scroll', parallax)
    return (() => {
      window.removeEventListener('scroll', parallax)
    })


  }, [])

  function parallax() {
    const s = window.scrollY,
      h = window.innerHeight
    if (s <= window.innerHeight) {
      const m = 200 / h
      const  y = (m * s)
      parallaxRef.current.style.transform = `translateY(${y}px)`
    }
  }
  return (
    <>
      <div id="landing" className='w-full h-screen relative overflow-hidden after:content-[""] after:w-full after:h-full after:absolute after:bg-black/50'>
        <img alt="" style={{transform: `scale(1.1)`}} ref={parallaxRef} src='/images/3.jpg' className='transition-transform duration-1000  absolute top-0 left-0 w-full h-full object-cover object-bottom' />

        <div className="absolute top-80 left-0 right-0 text-center px-4 z-10">
          <h1 className=" text-4xl md:text-6xl mb-8 wow fadeInUp" ref={e=>heroRefs.current[0] = e}>Concept to Completion</h1>
          <span className="text-white text-sm md:text-base wow block fadeInUp" ref={e=>heroRefs.current[1] = e}>Experience the power of our real estate media productions that showcase properties in a unique and compelling way.</span>

        </div>
        {/* <h1 className="absolute top-80 left-0 right-0 text-center text-black">Captivating Real Estate<br />media Productions <br />That stand&nbsp;Out</h1> */}
      </div>

      <section id="hero" className='active'>
        <div className="w-full px-4 md:px-10">
          <div className="max-w-3xl m-auto pt-20 md:pt-40 pb-10 md:pb-20">
            <h2 className='mb-4 wow fadeInUp text-center text-2xl md:text-4xl'>Revolutionizing Real Estate<br />Media Production</h2>
            <p className='wow fadeInUp text-center mb-4'>
              At Stalwart Production House, we take a unique approach to real estate media production. Our team of experts combines creativity and technical expertise to create captivating medias that showcase the true essence of each property. With our innovative techniques, we bring real estate listings to life, helping our clients stand out in a competitive&nbsp;market.
            </p>

            <p className='wow fadeInUp text-center'>
              Capture the attention of potential buyers with high-quality medias that showcase the unique features and beauty of your properties. Our professional photography/videography services will help you stand out from the competition and attract more interested&nbsp;buyers.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
