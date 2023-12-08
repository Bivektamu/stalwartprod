
import React, { useState } from 'react'

 const Work = () => {
  const [show, setS] = useState(false)
  const [src, setSrc] = useState('')
  const openGallery = e => {
    e.stopPropagation()
    const img = e.currentTarget.querySelector('img.object-cover')
    setSrc(img.src)
    setS(true)
  }
  return (
    <section id="work">
        <div className="lg:container m-auto py-20 md:py-40 px-4 md:px-10 text-center">
          <h2 className='mb-10 text-left wow fadeInUp text-2xl md:text-4xl'>Our Work</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-y-10 lg:gap-8 ">
            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/1.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="lg:absolute top-0 left-0 lg:w-full lg:h-full lg:bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 lg:opacity-0 transition-all ease-in duration-400 lg:scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-black lg:text-secondWhite text-left uppercase text-sm tracking-wider lg:-translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 lg:opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/2.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='lg:row-span-2 relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/3.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/4.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/5.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='lg:col-span-2 lg:row-span-2 relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/6.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/7.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/8.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/9.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='lg:col-span-2 relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/10.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/11.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="lg:absolute top-0 left-0 lg:w-full lg:h-full lg:bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 lg:opacity-0 transition-all ease-in duration-400 lg:scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-black lg:text-secondWhite text-left uppercase text-sm tracking-wider lg:-translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 lg:opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/12.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='lg:row-span-2 relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/13.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/14.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/15.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='lg:col-span-2 lg:row-span-2 relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/16.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/17.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/18.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/19.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='lg:col-span-2 relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/20.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='lg:col-span-2 lg:row-span-2 relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/21.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/22.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div onClick={e=>openGallery(e)} className='relative cursor-pointer popup-gallery wow fadeInUp group overflow-hidden'>
              <img src="/images/23.jpg" alt="" className="w-full lg:h-full lg:object-cover group-hover:scale-110 transition-all ease-in duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-overlay p-10 flex justify-between flex-col group-hover:opacity-100 opacity-0 transition-all ease-in duration-400 scale-y-75 group-hover:scale-y-100 origin-bottom ">
                <h5 className="text-secondWhite text-left uppercase text-sm tracking-wider -translate-x-5 group-hover:translate-x-0 transition-all ease-in duration-400 delay-500 group-hover:opacity-100 opacity-0">Photography + Video</h5>
                <div>
                  <h4 className='text-white text-left mb-2 font-medium transition-all ease-in duration-400 delay-200 group-hover:opacity-100 opacity-0'>Land of God</h4>
                  <p className='text-secondWhite text-left text-sm transition-all ease-in duration-400 delay-300 group-hover:opacity-100 opacity-0'>We bring ideas to live. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
        {show && (
          <div id="popup-library" className='fixed top-0 z-10 left-0 w-full h-full bg-black/[.4] flex items-center justify-center px-10 py-20'>
            <span onClick={()=> setS(false)} className="cursor-pointer absolute top-4 left-0 right-0 m-auto bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-medium close_btn"></span>
            <img src={src} className='max-h-full max-w-full' alt="" />
          </div>
        )}
        

    </section>
  )
}



export default Work