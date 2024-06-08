import React from 'react'
import './TestimonialCard.css'

const TestimonialCard = (props) => {
  
  return (
    <section className='testimonialCard text-center'>
        <picture>
            <img src={props.photo} alt="Emily's photo" />
        </picture>
        <p className='barlow-semibold'>{props.p}</p>
        <h3 className='fraunces-black'>{props.name}</h3>
        <h4 className='barlow-semibold'>{props.role}</h4>
    </section>

  )
}

export default TestimonialCard