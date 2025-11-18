import React from 'react'
import ProjectsCard from '../components/projects/ProjectsCard'
import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height: '50px',
      stagger:{
        amount: .4
      },
      scrollTrigger:{
        trigger:'.main',
        start:"top 100%",
        end: "top -170%",
        scrub: true
      }
    })

    // gsap.from('.honda',{
    //   height: '30px',
    //   stagger:{
    //     amount: .4
    //   },
    //   scrollTrigger:{
    //     trigger:'.main',
    //     start:"top 100%",
    //     end: "top -200%",
    //     scrub: true
    //   }
    // })


    
  })

  const Projects = [
    {
      image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
      image2: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
    },
    {
      image1:"https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
      image2:"https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479"
    },
    {
      image1:"https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
      image2:"https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821"
    },
    {
      image1: "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
      image2: "https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377"
    }
  ]


  return (
    <div>
      <div className='font-[font1] lg:text-[13vw] text-6xl uppercase pt-96 px-6 ' >Projets</div>
      <div className='main flex flex-col gap-4 p-4 w-full lg:-mt-12 mt-0 min-h-screen'>


        {Projects.map((project, index)=>{
          return <div key={index} className='hero' >
            <ProjectsCard image1={project.image1} image2={project.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects
