
import React from 'react'
export const Footer = () => {
  
  
  const onClick = e => {
    console.log(e.target)
  }

  return (
   <footer className='bg-grey w-full'>
    <div className="lg:container m-auto flex p-10 justify-between items-end">
      <div className='flex justify-start gap-x-4 items-end'>
        <img src='/images/logo-black.svg' width={100} alt="" /> | <p className="text-sm">2023 @ Stalwart Prod Agency Ltd</p>
      </div>
      <div>
        <p className="text-sm">Privacy Policy | Disclaimer</p>
      </div>

    </div>
   </footer>
  )
}


