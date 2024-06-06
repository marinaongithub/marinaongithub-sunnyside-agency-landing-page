import React from 'react'


const ImgCard = (props) => {
  return (
    <picture>
      <img src={props.src} alt={props.alt} />
    </picture>
  )
}

export default ImgCard