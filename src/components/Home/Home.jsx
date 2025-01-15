import React from 'react'
import Hero from '../Hero/Hero'
import Service from '../Service/Service'
import Video from '../Videos/Video'
import Contact from "../Contact/Contact"
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <>
       <Hero/>
       <Service/>
       <Video/>
       <Testimonials/>
       <Footer/>
       
    </>
  )
}

export default Home