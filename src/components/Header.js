import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">OpusEmbedded Ltd</div>
            <nav className="nav">
                <HashLink smooth to="/#">Home</HashLink>
                <HashLink smooth to="/#products">Products</HashLink>
                <HashLink smooth to="/#about">About</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
            </nav>
        </header>
    );
};

export default Header;
