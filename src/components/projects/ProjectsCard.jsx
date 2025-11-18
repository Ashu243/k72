import React from 'react'

const ProjectsCard = ({image1, image2}) => {
  return (
    <>
      <div className='w-full h-[450px] flex lg:flex-nowrap flex-wrap gap-4' >
          <div className='w-full bg-zinc-900 h-full group relative rounded-none hover:rounded-3xl overflow-hidden transition-all ' >
            <div className='bg-black/50 opacity-0 group-hover:opacity-100 transition-all w-full flex items-center justify-center h-full absolute top-0 left-0 ' >
              <h1 className='font-[font1] text-[4vw] uppercase px-4 rounded-4xl ' >voir le projet</h1>
            </div>
            <img className=' h-full w-full object-cover' src={image1} alt="" />
          </div>
          <div className='w-full bg-zinc-900 h-full group relative rounded-none hover:rounded-3xl overflow-hidden transition-all ' >
            <div className='bg-black/50 opacity-0 group-hover:opacity-100 transition-all w-full flex items-center justify-center h-full absolute top-0 left-0 ' >
              <h1 className='font-[font1] text-[4vw] uppercase px-4 rounded-4xl ' >voir le projet</h1>
            </div>
            <img className=' h-full w-full object-cover' src={image2} alt="" />
          </div>
        </div>
    </>
  )
}

export default ProjectsCard
