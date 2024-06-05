import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Service from './Component/Service/Service'
import Contact from './Component/Contact/Contact'
import Error from './Component/Error/Error'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme])

  return (
    <div>
      <Router>
        <div className={`container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
