import React from 'react'
import { AiFillBulb, AiFillCamera } from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'

export const Services = () => {
  return (
    <section id="services">
      <div className="w-full ">
        <div className="lg:container px-10 pt-20 pb-40 m-auto  pt-10 ">

          <div className="max-w-3xl m-auto">
            <h2 className='mb-4 text-center wow fadeInUp'>Our Services</h2>
            <p className="mb-14 fadeInUp wow text-center">
              At Stalwart Production House, we specialize in providing high-quality media production services tailored specifically for real estate clients. Our team of experts utilizes innovative techniques to create compelling medias that effectively showcase properties and attract potential buyers.
            </p>
          </div>

          <div className="w-full grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-4 grid gap-x-10">
            <div className='text-center'>
              <AiFillBulb className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 className='wow fadeInUp mb-3'>Elegant media Solutions for Real&nbsp;Estate</h3>
              <p className='wow fadeInUp'>We offer a range of customized photography / videography products designed to meet the unique needs of real estate&nbsp;professionals.</p>
            </div>

            <div className='text-center'>
              <AiFillCamera data-offset='0.75' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.75' className='wow fadeInUp mb-3'>Commercial/Corporate headshots and&nbsp;media</h3>
              <p data-offset='0.75' className='wow fadeInUp'>Our team of skilled editors ensures that your real estate medias are polished and visually&nbsp;appealing.</p>
            </div>

            <div className='text-center'>
              <RiComputerFill data-offset='0.7' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.7' className='wow fadeInUp mb-3'>Business and product promotion&nbsp;ads</h3>
              <p data-offset='0.7' className='wow fadeInUp'>We pioneer in supplying the best photography / videography services for your corporate ads which will provde that extra tick for your&nbsp;listings.</p>
            </div>

            <div className='text-center'>
              <AiFillCamera data-offset='0.65' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.65' className='wow fadeInUp mb-3'>Virtual Tours and<br />360°&nbsp;medias</h3>
              <p data-offset='0.65' className='wow fadeInUp'>Immerse potential buyers in virtual tours and 360° medias to showcase properties like never&nbsp;before.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
