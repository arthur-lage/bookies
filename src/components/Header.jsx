import React from 'react'

import '../styles/header.scss'

import newBookImage from '../assets/images/plus.svg'
import logoImage from '../assets/images/logo.svg'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link title='Go to homepage' to="/" className="logo">
                <img src={logoImage} alt="Bookies logo" />
            </Link>
            <Link title='Add new book' to="/create" className="new-book">
                <img src={newBookImage} alt="Add a new book" />
            </Link>
        </div>
    )
}

export default Header
