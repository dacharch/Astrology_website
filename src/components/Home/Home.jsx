import React from 'react'
import Hero from '../Hero/Hero'
import Service from '../Service/Service'
import Video from '../Videos/Video'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import PodcastHome from '../PodcastHome/PodcastHome'



const Home = () => {
  return (
    <>
       <Header />
       <Hero/>
       <Service/>
       <Video/>
       <PodcastHome/>
       <Testimonials/>
       <Footer/>
       
    </>
  )
}

export default Home