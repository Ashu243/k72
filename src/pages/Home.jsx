import React from 'react'
import Video from '../components/home/Video'
import MainText from '../components/home/MainText'
import BottomText from '../components/home/BottomText'

const Home = () => {
    return (
        <>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='h-screen w-screen relative flex flex-col justify-between'>
                <MainText />
                <BottomText />
            </div>
        </>

    )
}

export default Home
