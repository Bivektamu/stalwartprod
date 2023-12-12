
import React, { useEffect, useState } from 'react'
import Privacy from './Privacy'
import Disclaimer from './Disclaimer'
export const Footer = () => {
  const [show, setS] = useState(false)
  const [clickedBtn, setCB] = useState()

  useEffect(() => {
    console.log(clickedBtn)
    if(clickedBtn) {
      setS(true)
      document.querySelector('body').classList.add('overflow-hidden')
    }
      
  }, [clickedBtn])

  useEffect(()=> {
    if(!show) {
      document.querySelector('body').classList.remove('overflow-hidden')
    }
  }, [show])
  
  return (
    <footer className='bg-grey w-full'>
      <div className="lg:container m-auto flex px-4 md:px-10 py-10 justify-between items-end flex-col md:flex-row">
        <div className='flex justify-start gap-x-4 md:items-end items-center flex-col md:flex-row w-full md:w-auto gap-y-4'>
          <img src='/images/logo-black.svg' width={100} alt="" /><span className="hidden md:inline-flex"> | </span><p className="text-sm pb-4 md:pb-0">2023 @ Stalwart Prod Agency Ltd</p>
        </div>
        <div className='text-center w-full md:w-auto'>
          <p className="text-sm"><span className='cursor-pointer' onClick={() => setCB('privacy')}>Privacy Policy</span> | <span className='cursor-pointer' onClick={() => setCB('disclaimer')}>Disclaimer</span></p>
        </div>
      </div>

      {show && (
        <div id="popup-library" className='fixed top-0 z-10 left-0 w-full h-full bg-white px-10 py-20 overflow-auto'>
          <span onClick={() => {setS(false); setCB(null); }} className="cursor-pointer absolute top-4 left-0 right-0 m-auto bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-medium close_btn"></span>
          {clickedBtn === 'privacy'? <Privacy />:<Disclaimer />} 
          
        </div>
      )}
    </footer>

  )
}


