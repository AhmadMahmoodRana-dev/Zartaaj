import React from 'react'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Advantages from '../components/Advantages'

const Home = () => {
  return (
    <div className='w-full h-auto'>
      <Header/>
      <AboutUs/>
      <Advantages/>
    </div>
  )
}

export default Home
