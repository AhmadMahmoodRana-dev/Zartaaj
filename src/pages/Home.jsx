import React from 'react'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Advantages from '../components/Advantages'
import VideoBackground from '../components/VideoBackground'
import ReviewSection from "../components/ReviewSlider"

const Home = () => {
  return (
    <div className='w-full h-auto'>
      <Header/>
      <AboutUs/>
      <Advantages/>
      <VideoBackground/>
      <ReviewSection/>
    </div>
  )
}

export default Home
