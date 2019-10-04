import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-2">
            <div className="container">
                <Link to="/" className="brand-logo">react-echarts sample</Link>
                <NavLinks />
            </div>
        </nav>
    )
}

export default Navbar;

