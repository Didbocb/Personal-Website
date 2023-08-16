import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <AiOutlineMenu />
            </div>
            <ul className="navbar-links">
                <li className="navbar-link">Home</li>
                <li className="navbar-link">Projects</li>
                <li className="navbar-link">Work Experience</li>
                <li className="navbar-link">Resume</li>
            </ul>
        </nav>
    )
}

export default Navbar