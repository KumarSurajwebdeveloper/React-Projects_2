import './Navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import close_icon from '../../assets/close.png'
import hamburger_icon from '../../assets/hamburger.png'
import hamblack from '../../assets/hamblack.png'
import closeblack from '../../assets/close_black.png'


const Navbar = ({ theme, setTheme }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const toggleSearchBox = () => {
        setShowSearchBox(!showSearchBox);
    };

    return (
        <div className={`navbar ${theme}`}>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="" className="logo" />
            <img src={theme === 'light' ? hamburger_icon : hamblack} alt="Menu" className="toggle-icon" onClick={toggleMobileMenu} />
            <ul className={showMobileMenu ? 'active' : ''}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={`search-box ${showSearchBox ? 'active' : ''}`}>
                <input type="text" placeholder="Search" />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="Search" onClick={toggleSearchBox} />
            </div>
            <img onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} src={theme === 'light' ? toogle_light : toogle_dark} alt="Toggle" className="toggle-icon" />
            {showMobileMenu && <img src={theme === 'light' ? close_icon : closeblack} alt="Close" className="close-icon" onClick={toggleMobileMenu} />}
        </div>
    );
};

export default Navbar;