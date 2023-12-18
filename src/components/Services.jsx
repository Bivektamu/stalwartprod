import React from 'react'
import { AiFillBulb, AiFillCamera } from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'

export const Services = () => {
  return (
    <section id="services">
      <div className="w-full ">
        <div className="lg:container px-4 md:px-10 pt-10 md:pt-20 pb-20 md:pb-40 m-auto">

          <div className="max-w-3xl m-auto">
            <h2 className='mb-4 text-center wow fadeInUp text-2xl md:text-4xl'>Our Services</h2>
            <p className="mb-14 fadeInUp wow text-center">
              At Stalwart Production House, we specialize in providing high-quality media production services tailored specifically for real estate clients. Our team of experts utilizes innovative techniques to create compelling medias that effectively showcase properties and attract potential buyers.
            </p>
          </div>

          <div className="w-full grid-cols-1 gap-y-14 md:grid-cols-2 xl:grid-cols-4 grid gap-x-10">
            <div className='text-center'>
              <AiFillBulb className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 className='wow fadeInUp mb-3 text-base md:text-xl'>Elegant media Solutions for Real&nbsp;Estate</h3>
              <p className='wow fadeInUp'>We offer a range of customized photography / videography products designed to meet the unique needs of real estate&nbsp;professionals.</p>
            </div>

            <div className='text-center'>
              <AiFillCamera data-offset='0.75' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.75' className='wow fadeInUp mb-3 text-base md:text-xl'>Commercial/Corporate headshots and&nbsp;media</h3>
              <p data-offset='0.75' className='wow fadeInUp'>Our team of skilled editors ensures that your real estate medias are polished and visually&nbsp;appealing.</p>
            </div>

            <div className='text-center'>
              <RiComputerFill data-offset='0.7' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.7' className='wow fadeInUp mb-3 text-base md:text-xl'>Business and product promotion&nbsp;ads</h3>
              <p data-offset='0.7' className='wow fadeInUp'>We pioneer in supplying the best photography / videography services for your corporate ads which will provide that extra tick for your&nbsp;listings.</p>
            </div>

            <div className='text-center'>
              <AiFillCamera data-offset='0.65' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.65' className='wow fadeInUp mb-3 text-base md:text-xl'>Events and weddings</h3>
              <p data-offset='0.65' className='wow fadeInUp'>Transforming moments into memories –  We specialize in capturing the essence of weddings and events with creative excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
