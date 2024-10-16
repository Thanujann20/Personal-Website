import React from 'react'
import Logo from '../assets/logo.png'
import {Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
          <img src={Logo}/>
        </div>
        <div className='right'>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/Projects"> Projects </Link>
        </div>
    </div>
  )
}

export default Navbar