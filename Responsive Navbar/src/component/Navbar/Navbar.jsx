import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Image from './hamburger.png'
import Close from './close.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-text">My Website</Link>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span><img src={Close} /></span>
        ) : (
          <span><img src={Image} /></span>)}
      </div>
      {/* <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div> */}
    </nav>
  );
};

export default Navbar;
