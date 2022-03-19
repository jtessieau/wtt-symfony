import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroBanner = () => {
  return (
    <div className='homepage'>
      <div className="hero-banner">
        <div className="hero-left">
          <div className='hero-text'>
            <h1>Working Time Tracker</h1>
            <h2 className="subtitle">One place to store all your working time!</h2>
            <p>
              Store your check-in/check-out, breack time, pay rate ... And never
              forget how many hours you worked last weak or last month!
            </p>
          </div>
          <div className="hero-cta">
            <NavLink to="/register" className="cta-register">Create an account</NavLink>
            <p className='cta-login'>Already a wtt user ? <NavLink to="/login">Login</NavLink></p>
          </div>
        </div>
        <div className="hero-right">
          <img src="./img/hero-image.svg" alt="Hero Image" />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
