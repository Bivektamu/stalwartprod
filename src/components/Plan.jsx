
import React from 'react'

export const Plan = () => {
  return (
    <section id="plan" className="w-full  bg-grey">
      <div className="lg:container m-auto px-4 md:px-10 py-20 md:py-40 text-center">
        <h2 className='mb-10 wow fadeInUp text-2xl md:text-4xl'>A fantastic price</h2>
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-12 md:grid-cols-2 xl:grid-cols-4 md:gap-x-12">
          <div className='bg-white px-6 relative pt-6 pb-24 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey wow fadeInUp'>
            <h3 className='text-base md:text-xl wow fadeInUp mb-4 md:mb-8'>Bronze</h3>
            <h4 className="text-base md:text-xl mb-4 wow fadeInUp">Rental Package<br />
              $ 185</h4>
            <p className='leading-10 mb-6'>
              <span className="font-medium wow fadeInUp">6-8 Professional photos</span><br />
            </p>
            <p className="leading-6 text-secondBlack text-xs wow fadeInUp delay-300">
              Virtual Staging, Furniture removal, Floorplans 2d, can be requested with extra&nbsp;charges
            </p>
            <a href='/pdf/Rate_card.pdf' target="_blank" className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block wow fadeInUp absolute bottom-6 w-40 m-auto left-0 right-0'>Learn More</a>
          </div>

          <div className='bg-white px-6 relative pt-6 pb-24 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey wow fadeInUp'>
            <h3 className='text-base md:text-xl wow fadeInUp mb-4 md:mb-8'>Silver</h3>
            <h4 className="text-base md:text-xl mb-4 wow fadeInUp">Photography Package<br />$ 470</h4>
            <p className='leading-10 mb-6'>
              <span className="font-medium wow fadeInUp">8 Professional photos</span><br />
              <span className="font-medium wow fadeInUp">2 drone shots with pin</span><br />
              <span className="font-medium wow fadeInUp">2 virtual staging</span><br />
              <span className="font-medium wow fadeInUp">2D floorplan(1-2 beds)</span>
            </p>

            <p className="leading-6 text-secondBlack text-xs wow fadeInUp">No. of photos can be managed according to variable&nbsp;prices</p>
            <a href='/pdf/Rate_card.pdf' target="_blank" className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block wow fadeInUp absolute bottom-6 w-40 m-auto left-0 right-0'>Learn More</a>
          </div>

          <div className='bg-white px-6 relative pt-6 pb-24 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey wow fadeInUp'>
            <h3 className='text-base md:text-xl wow fadeInUp mb-4 md:mb-8'>Gold</h3>
            <h4 className="text-base md:text-xl mb-4 wow fadeInUp">Photo/Video Package<br />$ 600</h4>
            <p className='leading-10 mb-6'>
              <span className="font-medium wow fadeInUp">12 Professional photos</span><br />
              <span className="font-medium wow fadeInUp">2D floorplan(1-2 beds)</span><br />
              <span className="font-medium wow fadeInUp">Showcase video</span>
            </p>

            <p className="leading-6 text-secondBlack text-xs wow fadeInUp">No. of photos, 3D floor plan, cinematic video, agent intro and 3D virtual tour can be done on extra cost. Pleae check our rate card for various&nbsp;packages.</p>
            <a href='/pdf/Rate_card.pdf' target="_blank" className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block wow fadeInUp absolute bottom-6 w-40 m-auto left-0 right-0'>Learn More</a>
          </div>

          <div className='bg-white px-6 relative pt-6 pb-24 hover:bg-aeroBlue hover:shadow-black hover:shadow-2xl transition-all ease-in duration-200 group border-b-8 hover:border-black border-grey wow fadeInUp'>
            <h3 className='text-base md:text-xl wow fadeInUp mb-4 md:mb-8'>Platinum</h3>
            <h4 className="text-base md:text-xl mb-4 wow fadeInUp">Photo/Video Package<br />$ 1185</h4>
            <p className='leading-10 mb-6'>
              <span className="font-medium wow fadeInUp">12 Professional photos</span><br />
              <span className="font-medium wow fadeInUp">2D floorplan(1-2 beds)</span><br />
              <span className="font-medium wow fadeInUp">Cinematic video</span><br />
              <span className="font-medium wow fadeInUp">Agent intro</span><br />
              <span className="font-medium wow fadeInUp">3D virtual tour</span>
            </p>

            <p className="leading-6 text-secondBlack text-xs wow fadeInUp">Extras can be added which incur&nbsp;charges</p>
            <a href='/pdf/Rate_card.pdf' target="_blank" className='cursor-pointer list-none btn bg-black text-white py-2 px-6 font-bold uppercase mt-4 inline-block wow fadeInUp absolute bottom-6 w-40 m-auto left-0 right-0'>Learn More</a>
          </div>
        </div>

      </div>
    </section>
  )
}


