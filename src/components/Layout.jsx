
import React from 'react'


export const Layout = ({ children }) => {


  window.onscroll = function () {

    checkSection()
    checkHeader()

  }

  function checkHeader() {
    if(window.scrollY > 100) {
      document.querySelector('header').classList.remove('py-10')
      document.querySelector('header').classList.add('bg-black', 'py-5')
    }
    else {
      document.querySelector('header').classList.remove('bg-black', 'py-5')
      document.querySelector('header').classList.add('py-10')
    }
  }

  function checkSection() {

    const activeSec = document.querySelector('main > section.active')
    const activeMenuItem = document.querySelector('nav > li.active')
    const secList = document.querySelectorAll('section'),
      menuList = document.querySelectorAll("nav > li");

    const isActive = (activeSec.getBoundingClientRect().top <= document.querySelector('header').clientHeight && activeSec.getBoundingClientRect().bottom > 0) ? true : false

    if (isActive) {
      return
    }

    for (let i = 0; i < secList.length; i++) {
      const t = secList[i].getBoundingClientRect().top,
        b = secList[i].getBoundingClientRect().bottom;
      if (t <= document.querySelector('header').clientHeight && b > 0) {
        activeSec.classList.remove('active')
        activeMenuItem.classList.remove('active', 'font-bold')

        secList[i].classList.add('active')
        menuList[i].classList.add('active', 'font-bold')
        break;
      }
    }
  }
  return (
    <main>
      {children}
    </main>
  )
}


