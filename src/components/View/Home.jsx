import React from 'react'
import Creator from '../Home/Creator'
import Swiper from '../Home/Slider'
import Hero from '../common/Hero'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Swiper />
      <Creator />
      <Footer/>
    </div>
  )
}

export default Home