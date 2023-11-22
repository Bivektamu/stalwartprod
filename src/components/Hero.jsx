import React from 'react'
import { AiFillBulb, AiFillCamera } from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'

export const Hero = () => {
  return (
    <section id="hero" className='active'>
        <div id="landing" className='w-full h-screen relative'>
          <img alt="" src='/images/hero.jpg' className='absolute top-0 left-0 w-full h-full object-cover' />
          <h1 className="absolute top-80 left-0 right-0 text-center text-black">We're creatives</h1>
        </div>

        <div className="w-full px-10 border-b-2">
          <div className="max-w-3xl m-auto py-40 ">
            <h2 className='mb-4 wow fadeInUp'>From Zero to Hero</h2>
            <h3 className='mb-10 wow fadeInUp'>BONE EXPANDS YOUR POSSIBILITIES</h3>
            <p className='wow fadeInUp'>
              Sed lacus augue, congue vel dapibus at, convallis semper lorem. Etiam volutpat, est eget feugiat tristique, erat leo ullamcorper turpis, vel auctor nunc diam vitae urna. Aliquam quis lacus et augue bibendum tincidunt. Duis id cursus ex. Sed cursus tortor id vehicula finibus. Nulla in pharetra lacus. Nulla nec elit nec sem feugiat eleifend sed sed neque. Mauris consequat in purus id cursus. Nunc suscipit lacinia ante, sit amet pulvinar orci venenatis a.
            </p>
          </div>
        </div>

        <div className="w-full ">
          <div className="lg:container px-10 py-40 m-auto grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-4 pt-10 grid gap-x-10">
            <div className='text-center'>
              <AiFillBulb className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 className='wow fadeInUp mb-3'>Concept</h3>
              <p className='wow fadeInUp'>We bring ideas to live. Lorem ipsum dolor sit amet</p>
            </div>

            <div className='text-center'>
              <AiFillCamera data-offset='0.75' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.75' className='wow fadeInUp mb-3'>Photography</h3>
              <p data-offset='0.75' className='wow fadeInUp'>We bring ideas to live. Lorem ipsum dolor sit amet</p>
            </div>

            <div className='text-center'>
              <RiComputerFill data-offset='0.7' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.7' className='wow fadeInUp mb-3'>Design</h3>
              <p data-offset='0.7' className='wow fadeInUp'>We bring ideas to live. Lorem ipsum dolor sit amet</p>
            </div>

            <div className='text-center'>
              <AiFillCamera data-offset='0.65' className='m-auto mb-6 text-2xl wow fadeInUp' />
              <h3 data-offset='0.65' className='wow fadeInUp mb-3'>Great Food</h3>
              <p data-offset='0.65' className='wow fadeInUp'>We bring ideas to live. Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>
  )
}
