import React from 'react'
import './TxtCard.css'

const TxtCard = (props) => {
  return (
    <section id={props.id} className='txtCard'>
      <h2 className='fraunces-black'>{props.h2}</h2>
      <p className='barlow-semibold'>{props.p}</p>
      <button className={`fraunces-black learnMore ${props.color}`}>Learn more</button>
    </section>
  )
}

export default TxtCard