// src/Navbar.js
import React from 'react';
import './CSS/Navbar.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Landguru</div>
            <ul className="navbar-links">
                <li>Home</li>
                <li>Advertise</li>
                <li>Support</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;
