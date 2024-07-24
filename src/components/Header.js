import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">OpusEmbedded Ltd</div>
            <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
                <HashLink smooth to="/#home" className="nav-link">Home</HashLink>
                <HashLink smooth to="/#products" className="nav-link">Products</HashLink>
                <HashLink smooth to="/#about" className="nav-link">About</HashLink>
                <HashLink smooth to="/#contact" className="nav-link">Contact</HashLink>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
};

export default Header;
