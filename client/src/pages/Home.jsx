import React from 'react'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import TemplatesShowcase from '../components/Home/TemplatesShowcase'
import Testimonial from '../components/Home/Testimonial'
import Pricing from '../components/Home/Pricing'
import CallToAction from '../components/Home/CallToAction'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <TemplatesShowcase />
      <Testimonial />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home