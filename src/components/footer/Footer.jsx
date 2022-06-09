import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lana Ilić</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#bout">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://facebook.com"> <FaFacebook/></a>  
      <a href="https://instagram.com"> <FiInstagram/></a>  
      <a href="https://linkedin.com"> <BsLinkedin/></a>  
      </div>

      <div className="footer__copyright">
      <small>&copy; Lana Ilic. All rights reserved 2022.</small>

      </div>
    </footer>
  )
}

export default Footer
