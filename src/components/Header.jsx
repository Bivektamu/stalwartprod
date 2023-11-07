
import React from 'react'
export const Header = () => {
  
  
  const onClick = e => {
    console.log(e.target)
  }




  return (
   <header className={`flex justify-center fixed z-10 top-0 left-0 w-full`}>
    <div className="lg:container flex p-10 justify-between items-center">
        <li onClick={(e)=> onClick(e)} linkto='#hero' className='list-none cursor-pointer'>
          <img src='/images/logo.svg' alt="" width={100} />
        </li>

          <nav className='flex justify-start items-center gap-x-20'>
            <li onClick={(e)=> onClick(e)} linkto='#hero' className='uppercase cursor-pointer tracking-wider text-white list-none' >Home</li>
            <li onClick={(e)=> onClick(e)} linkto='#plan' className='uppercase cursor-pointer tracking-wider text-white list-none'>plan</li>
            <li onClick={(e)=> onClick(e)} linkto='#work' className='uppercase cursor-pointer tracking-wider text-white list-none'>work</li>
            <li onClick={(e)=> onClick(e)} linkto='#contact' className='uppercase cursor-pointer tracking-wider text-white list-none'>contact</li>
          </nav>


    </div>
   </header>
  )
}


