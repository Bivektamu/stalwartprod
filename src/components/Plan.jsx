
import React from 'react'

export const Plan = () => {
  return (
    <section id="plan" className="w-full px-10 py-40 bg-grey">
      <div className="lg:container m-auto xl:px-32 md:px-16 text-center">
        <h2 className='mb-10'>A fantastic price</h2>

        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 md:gap-x-12 xl:gap-x-24">

          <div className='bg-white px-6 py-6 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey'>
            <h3 className='mb-8'>Silver</h3>
            <h4 className="mb-4">$ 400</h4>
            <p className='leading-10'>
              <span className="font-medium">Basic support</span><br />
              <span className="font-medium">Basic features</span><br />
              <span className="font-medium">Basic documentation</span><br />
            </p>

            <p className="leading-10 text-secondBlack">10 Iterations</p>
            <p className="leading-10 text-secondBlack delay-100">Basic concept</p>
            <p className="leading-10 text-secondBlack delay-200">10 Websites</p>
            <p className="leading-10 text-secondBlack delay-300">1TB Bandwidth</p>
            <li linkto='/contact' className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block'>Enquire</li>
          </div>

          <div className='bg-white px-6 py-6 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey'>
            <h3 className='mb-8'>Gold</h3>
            <h4 className="mb-4">$ 600</h4>
            <p className='leading-10'>
              <span className="font-medium">Premium support</span><br />
              <span className="font-medium">Premium features</span><br />
              <span className="font-medium">Premium documentation</span><br />
            </p>

            <p className="leading-10 text-secondBlack">25 Iterations</p>
            <p className="leading-10 text-secondBlack delay-100">Premium concept</p>
            <p className="leading-10 text-secondBlack delay-200">25 Websites</p>
            <p className="leading-10 text-secondBlack delay-300">2.5TB Bandwidth</p>
            <li linkto='/contact' className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block'>Enquire</li>
          </div>

          <div className='bg-white px-6 py-6 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey'>
            <h3 className='mb-8'>Diamond</h3>
            <h4 className="mb-4">$ 800</h4>
            <p className='leading-10'>
              <span className="font-medium">Unlimited support</span><br />
              <span className="font-medium">Unlimited features</span><br />
              <span className="font-medium">Unlimited documentation</span><br />
            </p>

            <p className="leading-10 text-secondBlack">Unlimited Iterations</p>
            <p className="leading-10 text-secondBlack delay-100">Unlimited concept</p>
            <p className="leading-10 text-secondBlack delay-200">10 Websites</p>
            <p className="leading-10 text-secondBlack delay-300">Unlimited Bandwidth</p>
            <li linkto='/contact' className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block'>Enquire</li>
          </div>


        </div>

      </div>
  </section>
  )
}


