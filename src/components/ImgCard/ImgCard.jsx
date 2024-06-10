import React from 'react'
import './ImgCard.css'


const ImgCard = (props) => {
  return (
    <picture id={props.id}>
      <source media="(min-width:768px)" srcset={props.srcset} />
      <img className="imgCard" src={props.src} alt={props.alt} />
    </picture>
  )
}

export default ImgCard