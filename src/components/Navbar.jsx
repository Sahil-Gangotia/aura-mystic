import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img 
                    src="https://tse3.mm.bing.net/th/id/OIP.LR66Mcnyx0QrPWVKAhf51gHaHa?pid=Api&P=0&h=180" 
                    alt="logo" 
                    className="logo-img" 
                />
            </div>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="nav-btns">
                <Link to="/signin">
                    <button className="Sign_in">Sign In</button>
                </Link>
                <Link to="/signup">
                    <button className="Sign_up">Sign Up</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;