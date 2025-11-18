import React from 'react'
import Video from './Video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const MainText = () => {

  useGSAP(function(){
    gsap.from('.heading',{
      y: 10,
      delay: 1.6,
      opacity:0,
      duration: .3,
      stagger: .1,
      scale:1.1
    })
  })


  return (
  <div className="lg:mt-10 mt-76">
      <div className='lg:text-[9.5vw] text-5xl font-[font2] uppercase text-center lg:leading-[8vw] '>
      <div className='heading' >L'étincelle</div>
      <div className='flex heading justify-center' >qui 
        <div className='lg:w-40 w-16 h-full rounded-full overflow-hidden' ><Video/></div>
         génère</div>
      <div className='heading' >la créativité</div>
    </div>
  </div>
  )
}

export default MainText
