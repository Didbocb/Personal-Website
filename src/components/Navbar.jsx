import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import '../css/Navbar.css'
import { motion } from "framer-motion";

const loadAnimation = {
    initial: { y: "-100%" },
    animate: { y: 0 },
}

const Navbar = () => {
    return (
        <motion.header
            variants={loadAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 10 }}
        >
            <nav className="navbar">

                <ul className="navbar-links">
                    <li className="navbar-link">Home</li>
                    <li className="navbar-link">Projects</li>
                    <li className="navbar-link">About Me</li>
                    <li className="navbar-link">Resume</li>
                </ul>
            </nav>
        </motion.header>
    )
}

export default Navbar