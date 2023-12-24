
import React, {useState} from 'react'
export const Header = () => {
  const [nav, setNav] = useState(false)


  const onClick = e => {

    const item = (e.target)

    const anchor = (item.getAttribute('linkto'))

    const sec = document.getElementById(anchor)
    window.scrollTo({
      top: sec.offsetTop - document.querySelector('header').getBoundingClientRect().height + 1,
      behavior: 'smooth'
    });

  setNav(false)

  }

  const onClickHandlerForNav = e => {
    e.preventDefault()
  setNav(!nav)

  }


  return (
    <header className={`md:flex justify-center py-10 fixed z-10 top-0 left-0 w-full transition-all duration-300`}>
      <div className="lg:container md:w-full flex md:px-10 px-4 justify-between items-center">
        <div className='list-none cursor-pointer'>
          <img onClick={(e) => onClick(e)} linkto='hero' src='/images/logo.svg' alt="" className='w-40 md:w-48' />
        </div>

        <nav className={`flex md:justify-start items-center gap-x-20 md:gap-x-10 fixed md:static md:w-auto w-full left-0 top-0 md:h-auto h-full md:bg-transparent bg-white flex-col md:flex-row justify-center gap-y-10 ${!nav && '-translate-x-full'} md:translate-x-0 transition duration-600 ease-in-out`}>
          <li onClick={(e) => onClick(e)} linkto='hero' className='uppercase font-medium active cursor-pointer tracking-wider text-xl md:text-base list-none' >Intro</li>
          <li onClick={(e) => onClick(e)} linkto='services' className='uppercase cursor-pointer tracking-wider text-xl md:text-base list-none' >Services</li>
          <li onClick={(e) => onClick(e)} linkto='plan' className='uppercase cursor-pointer tracking-wider text-xl md:text-base list-none'>plan</li>
          <li onClick={(e) => onClick(e)} linkto='work' className='uppercase cursor-pointer tracking-wider text-xl md:text-base list-none'>work</li>
          {/* <li onClick={(e) => onClick(e)} linkto='team' className='uppercase cursor-pointer tracking-wider text-xl md:text-base list-none'>team</li> */}
          <li onClick={(e) => onClick(e)} linkto='contact' className='uppercase cursor-pointer tracking-wider text-xl md:text-base list-none'>contact</li>
        </nav>

        <a href="/" className='block md:hidden w-6 h-4 relative ' onClick={(e)=> onClickHandlerForNav(e)}>
          <span className={`origin-left absolute top-0 left-0  block w-full h-[2px] bg-black transition duration-600 ease-in-out ${nav? 'rotate-[35deg]':'rotate-0'}`}></span>
          <span className={`absolute top-0 bottom-0 m-auto l-0 w-full h-[2px] bg-black transition duration-600 ease-in-out ${nav? 'opacity-0':'opacity-1'}`}></span>
          <span className={`origin-left absolute bottom-0 left-0 w-full h-[2px] bg-black transition duration-600 ease-in-out ${nav? '-rotate-[35deg]':'rotate-0'}`}></span>
        </a>


      </div>
    </header>
  )
}


