import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">List</NavLink></li>
            <li><NavLink to="/chart">Chart</NavLink></li>
            <li><NavLink to="/add">Add</NavLink></li>
        </ul>
    )
}

export default NavLinks;