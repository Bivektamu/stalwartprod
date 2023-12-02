import React from 'react'
import { AiFillBulb, AiFillCamera } from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'

export const Hero = () => {
  return (
    <section id="hero" className='active'>
      <div id="landing" className='w-full h-screen relative'>
        <img alt="" src='/images/hero.jpg' className='absolute top-0 left-0 w-full h-full object-cover' />

        <div className="absolute top-80 left-0 right-0 text-center ">
          <h1 className="text-black mb-4">We're Creatives</h1>
          <span className="text-black">Experience the power of our real estate video productions that showcase properties in a unique and compelling way.</span>

        </div>
        {/* <h1 className="absolute top-80 left-0 right-0 text-center text-black">Captivating Real Estate<br />Video Productions <br />That stand&nbsp;Out</h1> */}
      </div>

      <div className="w-full px-10 border-b-2">
        <div className="max-w-3xl m-auto py-40 ">
          <h2 className='mb-4 wow fadeInUp text-center'>Revolutionizing Real Estate<br />Video Production</h2>
          <p className='wow fadeInUp text-center mb-4'>
            At Stalwartprod, we take a unique approach to real estate video production. Our team of experts combines creativity and technical expertise to create captivating videos that showcase the true essence of each property. With our innovative techniques, we bring real estate listings to life, helping our clients stand out in a competitive market.
          </p>

          <p className='wow fadeInUp text-center'>
            Capture the attention of potential buyers with high-quality videos that showcase the unique features and beauty of your properties. Our professional video production services will help you stand out from the competition and attract more interested buyers.
          </p>
        </div>
      </div>

      <div className="w-full ">
        <div className="lg:container px-10 py-40 m-auto  pt-10 ">

          <div className="max-w-3xl m-auto">
            <h2 className='mb-4 text-center wow fadeInUp'>Our Services</h2>
            <p className="mb-10 fadeInup wow text-center">
              At Stalwartprod, we specialize in providing high-quality video production services tailored specifically for real estate clients. Our team of experts utilizes innovative techniques to create compelling videos that effectively showcase properties and attract potential buyers.
            </p>
          </div>

          <div className="w-full grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-4 grid gap-x-10">
            <div className='text-center'>
              <AiFillBulb className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 className='wow fadeInUp mb-3'>Customized Video Solutions for Real Estate</h3>
              <p className='wow fadeInUp'>We offer a range of customized video solutions designed to meet the unique needs of real estate&nbsp;professionals.</p>
            </div>

            <div className='text-center'>
              <AiFillCamera data-offset='0.75' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.75' className='wow fadeInUp mb-3'>Professional Video Editing&nbsp;Services</h3>
              <p data-offset='0.75' className='wow fadeInUp'>Our team of skilled editors ensures that your real estate videos are polished and visually&nbsp;appealing.</p>
            </div>

            <div className='text-center'>
              <RiComputerFill data-offset='0.7' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.7' className='wow fadeInUp mb-3'>Drone Videography for Real&nbsp;Estate</h3>
              <p data-offset='0.7' className='wow fadeInUp'>Capture stunning aerial footage of your properties with our professional drone videography&nbsp;services.</p>
            </div>

            <div className='text-center'>
              <AiFillCamera data-offset='0.65' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.65' className='wow fadeInUp mb-3'>Virtual Tours and<br />360°&nbsp;Videos</h3>
              <p data-offset='0.65' className='wow fadeInUp'>Immerse potential buyers in virtual tours and 360° videos to showcase properties like never&nbsp;before.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
