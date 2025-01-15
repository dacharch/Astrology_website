import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>

  )
}

export default App