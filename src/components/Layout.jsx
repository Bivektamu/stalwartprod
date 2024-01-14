
import React, { useEffect, useState } from 'react'



export const Layout = ({ children }) => {

  const [boxes, setB] = useState([])
  const [loading, setL] = useState(true)

  useEffect(() => {

    if (boxes.length < 1 && document.getElementsByClassName("wow").length > 0) {
      let boxesArray = []
      for (var i = 0; i < document.getElementsByClassName("wow").length; i++) {
        var ele = document.getElementsByClassName("wow")[i];
        let offSet = 0.8;
        if (ele.getAttribute("data-offset"))
          offSet = parseFloat(ele.getAttribute("data-offset")).toFixed(2);

        boxesArray.push({
          ele: ele,
          animated: false,
          offSet: offSet,
        });
      }

      setB(boxesArray)
      setL(false)
    }
    // eslint-disable-next-line 
  }, [])


  useEffect(() => {
    if (!loading)

      window.addEventListener('scroll', onScroll)

    return (() => {
      window.addEventListener('scroll', onScroll)
    })
    // eslint-disable-next-line 
  }, [loading])
// 


  function onScroll() {
    checkSection()
    checkHeader()
    if (boxes.length > 0) checkBoxes();
  }

  function checkBoxes() {
    for (let k = 0; k < boxes.length; k++) {
      var b = boxes[k];
      var ele = b.ele;

      if (totalInViewport(ele, b.offSet) && !b.animated) {
        boxes[k].animated = true;
        ele.classList.add("animated");
        const filtered_box = boxes.filter(ele => ele !== boxes[k])
        setB(filtered_box)
      }

    }

  }

  function totalInViewport(el, s) {
    var rect = el.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return rect.top < windowHeight * s;
  }



  function checkHeader() {
    if (window.scrollY > 100) {
      document.querySelector('header').classList.remove('md:-top-[100px]', '-top-[80px]')
      document.querySelector('header').classList.add('top-0')
    }
    else {
      document.querySelector('header').classList.remove('top-0')
      document.querySelector('header').classList.add('md:-top-[100px]', '-top-[80px]')
    }
  }

  function checkSection() {

    const activeSec = document.querySelector('main > section.active')
    const activeMenuItem = document.querySelector('nav > li.active')
    const secList = document.querySelectorAll('section'),
      menuList = document.querySelectorAll("nav > li");


      const hH = document.querySelector('header').clientHeight

    const isActive = (activeSec.getBoundingClientRect().top <= document.querySelector('header').clientHeight && activeSec.getBoundingClientRect().bottom > hH) ? true : false
    // console.log(activeSec.getBoundingClientRect().bottom)
    if (isActive) {
      return
    }

    for (let i = 0; i < secList.length; i++) {
      const t = secList[i].getBoundingClientRect().top,
        b = secList[i].getBoundingClientRect().bottom;
      if (t <= hH && b > hH) {
        activeSec.classList.remove('active')
        activeMenuItem.classList.remove('active', 'font-medium')

        secList[i].classList.add('active')
        menuList[i].classList.add('active', 'font-medium')
        break;
      }
    }
  }
  return (
    <main >
      {children}
    </main>
  )
}


