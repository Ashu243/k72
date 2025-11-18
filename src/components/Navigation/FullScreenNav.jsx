import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React from 'react'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {


    useGSAP(function () {
        const tl = gsap.timeline()
        tl.from(".nav", {
            y: -20,
            opacity: 0,
            delay: 1.6,
            duration: .2,
        })
        tl.from('.link', {
            y: 10,
            opacity: 0,
            duration: .3,
            stagger: .1,
            //   scale:1.1
        })




    })



    return (
        <div className='absolute bg-black h-screen w-full  overflow-x-hidden' >
            <div className='z-22 nav flex p-2 fixed top-0 w-full items-center  justify-between' >
                <div className='px-4' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                    <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                </svg>
                </div>
                <Link to='/'>
                    <img className='h-20 hover:cursor-pointer w-20' src="/cross.png" alt="" />
                </Link>

            </div>
            <div className='all links flex flex-col font-[font1] uppercase ' >
                <Link to='/projects' className='link mt-40 border-y relative' >
                    <h1 className='lg:text-[7vw] text-5xl text-center lg:mt-0 mt-3 lg:leading-tight lg:-mb-4' >Projects</h1>
                    <div className='hidden lg:flex absolute bg-[#D3FD50] movelink top-0 '>
                        <div className='moveX text-black flex text-[7vw]  text-center leading-tight -mb-4 gap-36 items-center whitespace-nowrap overflow-auto ' >
                            <h2>Pour toit vour</h2>
                            <h2>Pour toit vour</h2>
                        </div>
                        <div className='moveX text-black flex text-[7vw]  text-center leading-tight -mb-4 gap-36 items-center whitespace-nowrap overflow-auto ' >
                            <h2>Pour toit vour</h2>
                            <h2>Pour toit vour</h2>
                        </div>

                    </div>

                </Link>
                <Link to='/agence' className='link border-b relative' >
                    <h1 className='lg:text-[7vw] text-5xl text-center lg:mt-0 mt-3 lg:leading-tight lg:-mb-4' >Agence</h1>
                    <div className='hidden lg:flex absolute bg-[#D3FD50] movelink top-0'>
                        <div className='moveX text-black flex text-[7vw]  text-center leading-tight -mb-4 gap-36 items-center whitespace-nowrap overflow-auto ' >
                            <h2>Pour toit vour</h2>
                            <h2>Pour toit vour</h2>
                        </div>
                        <div className='moveX text-black flex text-[7vw]  text-center leading-tight -mb-4 gap-36 items-center whitespace-nowrap overflow-auto ' >
                            <h2>Pour toit vour</h2>
                            <h2>Pour toit vour</h2>
                        </div>

                    </div>

                </Link>
                <div className='link border-b relative' >
                    <h1 className='lg:text-[7vw] text-5xl text-center lg:mt-0 mt-3 lg:leading-tight lg:-mb-4'>contact</h1>
                    <div className='hidden lg:flex absolute h-full w-full bg-[#D3FD50] movelink top-0'>
                        <div className='moveX text-black flex text-[7vw]  text-center leading-tight -mb-4 gap-36 items-center whitespace-nowrap overflow-auto ' >
                            <h2>Pour toit vour</h2>
                            <h2>Pour toit vour</h2>
                        </div>
                        <div className='moveX text-black flex text-[7vw]  text-center leading-tight -mb-4 gap-36 items-center whitespace-nowrap overflow-auto ' >
                            <h2>Pour toit vour</h2>
                            <h2>Pour toit vour</h2>
                        </div>

                    </div>

                </div>
                <div className='link border-b relative' >
                    <h1 className='lg:text-[7vw] text-5xl text-center lg:mt-0 mt-3 lg:leading-tight lg:-mb-4' >blogue</h1>
                    <div className='absolute bg-[#D3FD50] movelink top-0 hidden lg:flex'>
                        <div className='moveX text-black flex text-[7vw]  text-center leading-tight -mb-4 gap-36 items-center whitespace-nowrap overflow-auto ' >
                            <h2>Pour toit vour</h2>
                            <h2>Pour toit vour</h2>
                        </div>
                        <div className='moveX text-black flex text-[7vw]  text-center leading-tight -mb-4 gap-36 items-center whitespace-nowrap overflow-auto ' >
                            <h2>Pour toit vour</h2>
                            <h2>Pour toit vour</h2>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FullScreenNav


