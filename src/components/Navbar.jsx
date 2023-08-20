import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { motion } from "framer-motion";
import '../css/Navbar.css';

// Animation variant for the header
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
                <Link to={'/'}>
                    <div className="navbar-logo">
                        <h2 className='h1'>Lado Natsvlishvili</h2>
                    </div>
                </Link>
                {/* List of navigation links */}
                <ul className="navbar-links">
                    <li><Link to="/" className="navbar-text-link">Home</Link></li>
                    <li><Link to="/about" className="navbar-text-link">About Me</Link></li>
                    <li><Link to="/projects" className="navbar-text-link">Projects</Link></li>
                    <li><Link to="/resume" className="navbar-text-link">Resume</Link></li>
                </ul>
            </nav>
        </motion.header>
    );
}

export default Navbar;