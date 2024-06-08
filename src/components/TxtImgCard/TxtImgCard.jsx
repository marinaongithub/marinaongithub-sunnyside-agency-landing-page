import React from 'react'
import './TxtImgCard.css'

const TxtImgCard = (props) => {
  return (
    <section className={`txtImgCard flex text-center ${props.color}`}>
      <h2 className='fraunces-bold'>{props.h2}</h2>
      <p className='barlow-semibold'>{props.p}</p>
    </section>
  )
}

export default TxtImgCard