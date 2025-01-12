import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>

  )
}

export default App