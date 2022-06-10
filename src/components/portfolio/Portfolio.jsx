import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p1.jpg'
import IMG2 from '../../assets/p2.jpg'
import IMG3 from '../../assets/p3.jpg'
import IMG4 from '../../assets/p5.jpg'
import IMG5 from '../../assets/p6.jpg'
import IMG6 from '../../assets/p7.png'
//import { useState } from 'react'
//import { motion } from 'framer-motion'


// ToDo add motion hover to articles
//Add  exact images and links


const Portfolio = () => {

  const data = [
    {

      id:1,
      image: IMG2,
      title: 'Java Fitness Application',
      desc: 'Client/server desktop application built using Java. Project includes using the latest design patterns, MVC architecure and data communication between sockets.',
      github: 'https://github.com',
     

    },
    {

      id:2,
      image: IMG2,
      title: 'Ecommerce Website',
      desc: 'Ecommerce website built using Wix website builder and Ecwid ecommerce platform. ',
      github: 'https://github.com',
      
      
    },
    {

      id:3,
      image: IMG6,
      title: 'React Weather App',
      desc: 'University project built using React.js that uses location as input and displays weather conditions by getting data from a public API.',
      github: 'https://github.com',
   
      
    },
    {

      id:4,
      image: IMG1,
      title: 'React Portfolio Website',
      desc: 'Personal portfolio website built using React.js to accentuate skills gained though university and self commitment. Work in progress. ',
      github: 'https://github.com',
    
      
    },
    {

      id:5,
      image: IMG3,
      title: 'HTML, CSS & Javascript Website',
      desc: 'Ecommerce website built using HTML, CSS and JavaScript. This was a team third year university project with shared tasks. ',
      github: 'https://github.com',
    
      
    },
    {

      id:6,
      image: IMG3,
      title: 'Fullstack React & Spring Boot Application',
      desc: 'Fullstack employee management application built using React.js on frontend side and Spring Boot for backend. Work in progress.',
      github: 'https://github.com',
     
      
    },



  ]


  return (

    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Porfolio</h2>

    <div className="container portfolio__container">
    {
      data.map(({id, image, title, desc,github,demo}) => {
        return (
        
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="portfolio__item-cta">
          <a href={github} className='btn btn-primary'target='_blank'>Github</a>
          
          </div>
          </article>
         

        )
    }
    
    )
  }

    </div>

    </section>

  )
}

export default Portfolio
