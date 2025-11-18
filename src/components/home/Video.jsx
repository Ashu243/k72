import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full ' >
      <video className='w-full h-full object-cover' autoPlay loop muted src="../../public/video/main.mp4" />
    </div>
  )
}

export default Video
