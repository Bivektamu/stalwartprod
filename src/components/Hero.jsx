import React from 'react'

export const Hero = () => {
  return (
    <section id="hero" className='active'>
      <div id="landing" className='w-full h-screen relative'>
        <img alt="" src='/images/hero.jpg' className='absolute top-0 left-0 w-full h-full object-cover' />

        <div className="absolute top-80 left-0 right-0 text-center ">
          <h1 className="text-black text-6xl mb-8">Concept to Completion</h1>
          <span className="text-black">Experience the power of our real estate media productions that showcase properties in a unique and compelling way.</span>

        </div>
        {/* <h1 className="absolute top-80 left-0 right-0 text-center text-black">Captivating Real Estate<br />media Productions <br />That stand&nbsp;Out</h1> */}
      </div>

      <div className="w-full px-10">
        <div className="max-w-3xl m-auto pt-40 pb-20 ">
          <h2 className='mb-4 wow fadeInUp text-center'>Revolutionizing Real Estate<br />media Production</h2>
          <p className='wow fadeInUp text-center mb-4'>
            At Stalwart Production House, we take a unique approach to real estate media production. Our team of experts combines creativity and technical expertise to create captivating medias that showcase the true essence of each property. With our innovative techniques, we bring real estate listings to life, helping our clients stand out in a competitive market.
          </p>

          <p className='wow fadeInUp text-center'>
            Capture the attention of potential buyers with high-quality medias that showcase the unique features and beauty of your properties. Our professional photography/videography services will help you stand out from the competition and attract more interested buyers.
          </p>
        </div>
      </div>

      
    </section>
  )
}
