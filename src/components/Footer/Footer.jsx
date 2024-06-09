import React from 'react'
import './Footer.css'
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'


const Footer = (props) => {
  return (
    <footer className='flex align-center'>
      <picture>
        <img src={props.logo} alt="logo" width="124" height="24" />
      </picture>
      <ul className="flex nav barlow-semibold">
        <li>
          <a href="#txtCard1">About</a>
        </li>
        <li>
          <a href="#txtImgCard1">Services</a>
        </li>
        <li>
          <a href="#imgGallery">Projects</a>
        </li>
      </ul>
      <ul className="flex contacts">
        <li>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="facebook icon" target="_blank" rel="noopener noreferrer"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram icon" target="_blank" rel="noopener noreferrer" />
          </a>
        </li>
        <li>  
          <a href="https://x.com/?lang=en">
            <img src={twitter} alt="twitter icon" target="_blank" rel="noopener noreferrer"/>
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.co.uk/">
            <img src={pinterest} alt="pinterest icon" target="_blank" rel="noopener noreferrer" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer