import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import '../css/Navbar.css';

// Animation for the header
const loadAnimation = {
    initial: { y: "-200%" },
    animate: { y: 0 },
};

const Navbar = () => {
    return (
        <motion.header
            variants={loadAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10 }}
        >
            <nav className="navbar">
                {/* Link to the home page */}
                <NavLink to={'/'}>
                    <div className="navbar-logo">
                        <h2 className='h1'>Lado Natsvlishvili</h2>
                    </div>
                </NavLink>
                {/* List of navigation links */}
                <ul className="navbar-links">
                    <li><NavLink to="/" className="navbar-text-link">Home</NavLink></li>
                    <li><NavLink to="/about" className="navbar-text-link">About Me</NavLink></li>
                    <li><NavLink to="/projects" className="navbar-text-link">Projects</NavLink></li>
                    <li><a href="data/Lado_Natsvlishvili_Resume.pdf" className="navbar-text-link resume" target="_blank">Resume</a></li>
                </ul>
            </nav>
        </motion.header>
    );
}

export default Navbar;