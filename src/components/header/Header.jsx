import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/meimg.jpg'
import HeaderSocial from './HeaderSocials'
import {motion} from 'framer-motion'

// ToDo add animations and change header image
// Change colours and button styles

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lana Ilic</h1>
        <h5 style={{color: "#1f1f38"}}>Student aspiring to become a Fullstack Developer!</h5>
      <CTA/>
      <HeaderSocial/>

    {/* ToDo Header bubbles section  */}

      <div className='me'>
      <img src={ME} alt="me" />
      {/* <motion.div
        whileInView={{x: [-100,0], opacity:[0,1]}}
        transition= {{duration:0.5}}
      >
        
        </motion.div> */}
        
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
