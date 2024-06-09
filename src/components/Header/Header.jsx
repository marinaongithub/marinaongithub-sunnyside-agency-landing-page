import React from 'react'
import { useState } from 'react'
import arrow from '../../assets/images/icon-arrow-down.svg'
import './Header.css'


const Header = (props) => {

  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleMenu = () => {
    setIsNavVisible(!isNavVisible)
  }

  
  return (
    <header>
        <nav className='flex'>
          <picture>
            <img src={props.logo} className="logo" alt="sunnyside agency logo" width="124" height="24"/>
          </picture>
          <button className="mobile-nav-toggle" onClick={toggleMenu} aria-controls="nav-list">
            <span className="sr-only" aria-expanded={isNavVisible}>
            </span>
          </button>  
            <ul className={`barlow-semibold flex justify-center text-center ${isNavVisible ? 'visible' : ''}`}>
                <li>About</li>
                <li>Services</li>
                <li>Project</li>
                <li>
                 <button className='fraunces-bold'>Contact</button>
                </li>
            </ul>  
        </nav>
        <h1 className='fraunces-black upper text-center '>We are creatives</h1>
        <picture>
          <img className='arrow' src={arrow} alt="scroll down arrow" />
        </picture>
    </header>
  )
}

export default Header