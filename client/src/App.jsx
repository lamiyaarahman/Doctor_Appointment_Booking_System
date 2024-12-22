import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Doctors from './pages/Doctors.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import Appointment from './pages/Appointment.jsx'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/doctors/:speciality" element={<Doctors/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/my-profile" element={<MyProfile/>}/>
          <Route path="/my-appointments" element={<MyAppointments />}/>
          <Route path="/appointment/:docId" element={<Appointment />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App