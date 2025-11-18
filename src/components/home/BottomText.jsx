import React from 'react'
import { Link } from 'react-router-dom'

const BottomText = () => {
    return (
        <div className='text-[5.5vw] mb-5 font-[font1] flex items-center justify-center uppercase flex-row gap-2 text-center' >
            <div className='border-2 border-amber-50 hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-3 pt-2'>
                <Link to='/projects' >Projects</Link>
            </div>
            <div className='border-2 border-amber-50 hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-3 pt-2'>
                <Link to='/agence' >agence</Link>
            </div>
        </div>
    )
}

export default BottomText
