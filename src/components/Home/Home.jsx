import React from 'react'
import Hero from '../Hero/Hero'
import Service from '../Service/Service'
import Video from '../Videos/Video'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Contact from "../Contact/Contact"
import HeaderWithSidebar from '../HeaderWithSidebar/HeaderWithSiderbar'
const Home = () => {
  return (
    <>
       <HeaderWithSidebar/>
       <Header />
       <Hero/>
       <Service/>
       <Video/>
       <Testimonials/>
       <Contact/>
       <Footer/>
       
    </>
  )
}

export default Home