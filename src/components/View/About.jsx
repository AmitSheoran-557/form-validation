import React from 'react'
import Cards from '../About/Cards'
import SlickSlider from '../About/Swiper'
import Hero from '../common/Hero'
import Footer from '../common/Footer'
import Counter from '../About/Counter'

const About = () => {
  return (
    <div>
      <Hero />
      <SlickSlider />
      <Cards />
      <Counter/>
      <Footer/>
    </div>
  )
}

export default About