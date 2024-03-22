import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5"
import { Link } from 'react-router-dom'
import { FiLogIn, FiShoppingCart } from "react-icons/fi"

import { motion } from "framer-motion"

function Header({ isAuthenticated = false }) {
    return (
        <nav>
            <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
                <IoFastFoodOutline />
            </motion.div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/cart"><FiShoppingCart /></Link>

                <Link to={isAuthenticated ? "/me" : "/login"}>
                    {isAuthenticated ? <FaUser /> : <FiLogIn />}
                </Link>
            </div>
        </nav>
    )
}

export default Header
