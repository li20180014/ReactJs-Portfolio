import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p1.jpg'
import IMG2 from '../../assets/p2.jpg'
import IMG3 from '../../assets/p3.jpg'
import IMG4 from '../../assets/p4.png'
import IMG5 from '../../assets/p5.jpg'
import IMG6 from '../../assets/p6.jpg'

const Portfolio = () => {

  const data = [
    {

      id:1,
      image: IMG1,
      title: 'Wix Ecommerce Website',
      desc: 'This is a description',
      github: 'https://github.com',
      demo: 'www.kalyanamay.com'

    },
    {

      id:2,
      image: IMG2,
      title: 'Wix Ecommerce Website',
      desc: 'This is a description',
      github: 'https://github.com',
      demo: 'www.kalyanamay.com'
      
    },
    {

      id:3,
      image: IMG3,
      title: 'Wix Ecommerce Website',
      desc: 'This is a description',
      github: 'https://github.com',
      demo: 'www.kalyanamay.com'
      
    },
    {

      id:4,
      image: IMG1,
      title: 'Wix Ecommerce Website',
      desc: 'This is a description',
      github: 'https://github.com',
      demo: 'www.kalyanamay.com'
      
    },
    {

      id:5,
      image: IMG2,
      title: 'Wix Ecommerce Website',
      desc: 'This is a description',
      github: 'https://github.com',
      demo: 'www.kalyanamay.com'
      
    },
    {

      id:6,
      image: IMG3,
      title: 'Wix Ecommerce Website',
      desc: 'This is a description',
      github: 'https://github.com',
      demo: 'www.kalyanamay.com'
      
    },



  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
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
          <a href={github} className='btn'target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
        )
    })
  }
    </div>

    </section>

  )
}

export default Portfolio
