import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Home from "./component/Home/Home"
import About from "./component/About/About"
import Service from "./component/Service/Service"
import Contact from "./component/Contact/Contact"
import Error from './component/Error/Error'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
