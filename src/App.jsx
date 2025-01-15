import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import AboutPage from './components/About/About'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path="/about" element={<AboutPage/>}/>
        </Routes>
        <WhatsAppButton/>
      </Router>
    </>

  )
}

export default App