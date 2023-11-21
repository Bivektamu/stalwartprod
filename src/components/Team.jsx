import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
const Team = () => {
  return (
    <section id="team" className="w-full px-10 bg-grey">
      <div className="max-w-3xl m-auto py-40 ">
        <h2 className='mb-4'>Our Team</h2>
        <p className='mb-8 w-3/4'>
          We love design, so much we breathe it. We make things for the better. Our team is specialized in both visual design and webdevelopment.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-14">
          <div>
            <img src="/images/07.jpg" alt="" className="w-full mb-2" />
            <h4 className="mb-6">Caroline Johnson</h4>
            <p className="text-sm mb-2 font-thin ">Photographer</p>
            <p className="flex gap-x-2 text-xl">
              <FaFacebook />
              <AiFillInstagram />
              <AiFillTwitterCircle />
            </p>
          </div>
          <div>
            <img src="/images/07.jpg" alt="" className="w-full mb-2" />
            <h4 className="mb-6">Caroline Johnson</h4>
            <p className="text-sm mb-2 font-thin ">Photographer</p>
            <p className="flex gap-x-2 text-xl">
              <FaFacebook />
              <AiFillInstagram />
              <AiFillTwitterCircle />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Team