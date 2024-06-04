import React from 'react'
import logo from '../../assets/images/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
        <nav className='flex'>
            <img src={logo} alt="sunnyside agency logo" />
            <ul className='barlow-semibold flex justify-center text-center'>
                <li>About</li>
                <li>Services</li>
                <li>Project</li>
                <li>
                  <button className='fraunces-bold'>Contact</button>
                  </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header