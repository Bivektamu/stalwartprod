
import React from 'react'
export const Footer = () => {
  return (
   <footer className='bg-grey w-full'>
    <div className="lg:container m-auto flex px-4 md:px-10 py-10 justify-between items-end flex-col md:flex-row">
      <div className='flex justify-start gap-x-4 md:items-end items-center flex-col md:flex-row w-full md:w-auto gap-y-4'>
        <img src='/images/logo-black.svg' width={100} alt="" /><span className="hidden md:inline-flex"> | </span><p className="text-sm pb-4 md:pb-0">2023 @ Stalwart Prod Agency Ltd</p>
      </div>
      <div className='text-center w-full md:w-auto'>
        <p className="text-sm">Privacy Policy | Disclaimer</p>
      </div>

    </div>
   </footer>
  )
}


