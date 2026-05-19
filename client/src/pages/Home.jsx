import React from 'react'
import Hero from '../components/Home/Hero'
import TemplatesShowcase from '../components/Home/TemplatesShowcase'
import Pricing from '../components/Home/Pricing'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <TemplatesShowcase />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home