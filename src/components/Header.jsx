
import React from 'react'
export const Header = () => {
  
  
  const onClick = e => {

    const item = (e.target)

        const anchor = (item.getAttribute('linkto'))

        const sec = document.getElementById(anchor)
        window.scrollTo({
            top: sec.offsetTop - document.querySelector('header').getBoundingClientRect().height + 100,
            behavior: 'smooth'
        });
  }


  return (
   <header className={`flex justify-center py-10 fixed z-10 top-0 left-0 w-full transition-all duration-300`}>
    <div className="lg:container md:w-full flex px-10 justify-between items-center">
        <li  className='list-none cursor-pointer'>
          <img onClick={(e)=> onClick(e)} linkto='hero' src='/images/logo-black.svg' alt="" width={100} />
        </li>

          <nav className='flex justify-start items-center gap-x-20 md:gap-x-10'>
            <li onClick={(e)=> onClick(e)} linkto='hero' className='uppercase font-medium active cursor-pointer tracking-wider list-none' >Home</li>
            <li onClick={(e)=> onClick(e)} linkto='plan' className='uppercase cursor-pointer tracking-wider list-none'>plan</li>
            <li onClick={(e)=> onClick(e)} linkto='work' className='uppercase cursor-pointer tracking-wider list-none'>work</li>
            <li onClick={(e)=> onClick(e)} linkto='team' className='uppercase cursor-pointer tracking-wider list-none'>team</li>
            <li onClick={(e)=> onClick(e)} linkto='contact' className='uppercase cursor-pointer tracking-wider list-none'>contact</li>
          </nav>


    </div>
   </header>
  )
}


