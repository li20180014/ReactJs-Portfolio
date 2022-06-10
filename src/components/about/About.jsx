import React from 'react'
import './about.css'
import ME from '../../assets/meimg.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
          </div>

          <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Bachelor Degree</h5>
              <small>Faculty of Organizational Sciences</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>Junior Developer & Digital Marketing</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Skills</h5>
              <small>Theoretical and
        practical knowledge </small>
            </article>

          </div>

          <p>Young professional with an industry experience building websites and web applications. Specializes in Java language, and has experience working with React.js, HTML5, CSS. Simultaneously finishing studies with a major in Information Systems and Technology at Faculty of Organizational Sciences, where also honored with a scholarship for extremely gifted students. Constantly working on improving knowledge, skills and experience in various areas of the IT industry, such as web design, object-oriented programming and databases. 
Open for new challenges, opportunities and achievements. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>

    </section>
  )
}

export default About
