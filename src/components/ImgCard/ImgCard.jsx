import React from 'react'
import './ImgCard.css'


const ImgCard = (props) => {
  return (
    <picture>
      <img className="imgCard" src={props.src} alt={props.alt} />
    </picture>
  )
}

export default ImgCard