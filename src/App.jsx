import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import AboutPage from './components/About/About'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import BirthJournal from './components/Service/ServiceParts/BirthJournal'
import Vastu from "./components/Service/ServiceParts/Vastu"
import Reading from './components/Service/ServiceParts/Reading'
import LifeCoach from './components/Service/ServiceParts/LifeCoach'
import Palmistry from "./components/Service/ServiceParts/Palmistry"
import Tarrot from './components/Service/ServiceParts/Tarrot'
import CompleteKundli from './components/Service/ServiceParts/CompleteKundli'
import VarshikRashiFal from './components/Service/ServiceParts/VarshikRashiFal'
import SingleQuestion from './components/Service/ServiceParts/SingleQuestion'
import VastuSixteen from './components/Service/ServiceParts/VastuSixteen'

const App = () => {
  return (
    <>
      
      <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path="/about" element={<AboutPage/>}/>
           <Route path="services/journal" element={<BirthJournal/>} />
           <Route path="services/vastu" element={<Vastu/>} />
           <Route path="services/reading" element={<Reading/>} />
           <Route path="services/tarrot" element={<Tarrot/>} />
           <Route path="services/coach" element={<LifeCoach/>} />
           <Route path="services/palmistry" element={<Palmistry/>} />
           <Route path="services/completekundli" element={<CompleteKundli/>} />
           <Route path="services/varshik" element={<VarshikRashiFal/>} />
           <Route path="services/singlequestion" element={<SingleQuestion/>} />
           <Route path="services/vastu16" element={<VastuSixteen/>} />
           
        </Routes>
        <WhatsAppButton/>
      </Router>
    </>

  )
}

export default App