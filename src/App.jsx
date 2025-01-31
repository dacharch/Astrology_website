import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import AboutPage from './components/About/About'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import BirthJournal from './components/Service/ServiceParts/BirthJournal'
import Vastu from "./components/Service/ServiceParts/Vastu"

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path="/about" element={<AboutPage/>}/>
           <Route path="services/journal" element={<BirthJournal/>} />
           <Route path="services/vastu" element={<Vastu/>} />
        </Routes>
        <WhatsAppButton/>
      </Router>
    </>

  )
}

export default App