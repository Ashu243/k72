import React, { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { useLocation, useNavigate } from 'react-router-dom'



const Transition = ({children}) => {
    const location = useLocation()
    const parentRef = useRef(null)

 useGSAP(function () {
    const tl = gsap.timeline()

     tl.fromTo(
      ".stairs",
      { y: "-100%" },
      {
        y: "0%",
        duration: .7,
        stagger: 0.1,
        ease: "power4.Out",
      }
    );


    // 2. Animate OUT (reveal page)
    tl.to(".stairs", {
      y: "100%",
      duration: .7,
      stagger: 0.1,
      ease: "power4.Out",
    });

    gsap.from(parentRef.current,{
        opacity: 0,
        delay: 1.5,
        scale: 1.15
    })

  }, [location.pathname])


  return (
    <div>
      <div className='h-screen w-full flex fixed z-10 left-0 pointer-events-none top-0'>
        <div className='stairs w-1/5 bg-zinc-900' ></div>
        <div className='stairs w-1/5 bg-zinc-900' ></div>
        <div className='stairs w-1/5 bg-zinc-900' ></div>
        <div className='stairs w-1/5 bg-zinc-900' ></div>
        <div className='stairs w-1/5 bg-zinc-900' ></div>
      </div>
      <div ref={parentRef} >
        {children}
      </div>
    </div>
  )
}

export default Transition
