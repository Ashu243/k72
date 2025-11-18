import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/projects'
import Agence from './pages/agence'
import './index.css'
import Transition from './components/common/Transition'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

const App = () => {

  const location = useLocation()
 

  return (
    <div className='text-white'>

      <Navbar />
      

      <Routes location={location} key={location.pathname} >
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/navbar' element={<FullScreenNav  />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>

    </div>
  )
}

export default App
