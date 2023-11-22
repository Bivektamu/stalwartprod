
import React from 'react'

export const Plan = () => {
  return (
    <section id="plan" className="w-full px-10 py-40 bg-grey">
      <div className="lg:container m-auto xl:px-32 md:px-16 text-center">
        <h2 className='mb-10 wow fadeInUp'>A fantastic price</h2>

        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 md:gap-x-12 xl:gap-x-24">

          <div className='bg-white px-6 py-6 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey wow fadeInUp'>
            <h3 className='wow fadeInUp mb-8'>Silver</h3>
            <h4 className="mb-4 wow fadeInUp">$ 400</h4>
            <p className='leading-10'>
              <span className="font-medium wow fadeInUp">Basic support</span><br />
              <span className="font-medium wow fadeInUp">Basic features</span><br />
              <span className="font-medium wow fadeInUp">Basic documentation</span><br />
            </p>

            <p className="leading-10 text-secondBlack wow fadeInUp">10 Iterations</p>
            <p className="leading-10 text-secondBlack wow fadeInUp">Basic concept</p>
            <p className="leading-10 text-secondBlack wow fadeInUp">10 Websites</p>
            <p className="leading-10 text-secondBlack wow fadeInUp">1TB Bandwidth</p>
            <li linkto='/contact' className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block wow fadeInUp'>Enquire</li>
          </div>

          <div className='bg-white px-6 py-6 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey wow fadeInUp'>
            <h3 className='wow fadeInUp mb-8'>Gold</h3>
            <h4 className="mb-4 wow fadeInUp">$ 600</h4>
            <p className='leading-10'>
              <span className="font-medium wow fadeInUp">Premium support</span><br />
              <span className="font-medium wow fadeInUp">Premium features</span><br />
              <span className="font-medium wow fadeInUp">Premium documentation</span><br />
            </p>

            <p className="leading-10 text-secondBlack wow fadeInUp">25 Iterations</p>
            <p className="leading-10 text-secondBlack wow fadeInUp delay-100">Premium concept</p>
            <p className="leading-10 text-secondBlack wow fadeInUp delay-200">25 Websites</p>
            <p className="leading-10 text-secondBlack wow fadeInUp delay-300">2.5TB Bandwidth</p>
            <li linkto='/contact' className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block wow fadeInUp'>Enquire</li>
          </div>

          <div className='bg-white px-6 py-6 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey wow fadeInUp'>
            <h3 className='wow fadeInUp mb-8'>Diamond</h3>
            <h4 className="mb-4 wow fadeInUp">$ 800</h4>
            <p className='leading-10'>
              <span className="font-medium wow fadeInUp">Unlimited support</span><br />
              <span className="font-medium wow fadeInUp">Unlimited features</span><br />
              <span className="font-medium wow fadeInUp">Unlimited documentation</span><br />
            </p>

            <p className="leading-10 text-secondBlack wow fadeInUp">Unlimited Iterations</p>
            <p className="leading-10 text-secondBlack wow fadeInUp delay-100">Unlimited concept</p>
            <p className="leading-10 text-secondBlack wow fadeInUp delay-200">10 Websites</p>
            <p className="leading-10 text-secondBlack wow fadeInUp delay-300">Unlimited Bandwidth</p>
            <li linkto='/contact' className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block wow fadeInUp'>Enquire</li>
          </div>
        </div>

      </div>
  </section>
  )
}


