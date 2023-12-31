
import React, { useEffect, useState } from 'react'



export const Layout = ({ children }) => {

  const [boxes, setB] = useState([])

  useEffect(()=> {
    document.addEventListener('load', lazyLoad)

    function lazyLoad() {
      
    }
    return(()=> {

    }) 
  })


  window.onload = function () {

    //////////////////////////////////////////////////
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
    //////////////////////////////////////////////////
  }

  window.onscroll = function () {

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
      document.querySelector('header').classList.remove('py-10')
      document.querySelector('header').classList.add('bg-white', 'py-5')
    }
    else {
      document.querySelector('header').classList.remove('bg-white', 'py-5')
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
        activeMenuItem.classList.remove('active', 'font-medium')

        secList[i].classList.add('active')
        menuList[i].classList.add('active', 'font-medium')
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


