import React from 'react'
import './ImgGallery.css'
import milk from '../../assets/images/mobile/image-gallery-milkbottles.jpg'
import cutOrange from '../../assets/images/mobile/image-gallery-orange.jpg' 
import cone from '../../assets/images/mobile/image-gallery-cone.jpg' 
import sugar from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg'

const ImgGallery = (props) => {

  const imgGallery = {
    img1: { 
      "src": milk,
      "alt": "milk bottles image",
    },
    img2: {
      "src": cutOrange,
      "alt": "cut orange image",
    },
    img3: {
      "src": cone,
      "alt": "ice cream cone image",
    },
    img4: {
      "src": sugar,
      "alt": "milk bottles image",
    },
    img5: {
      "src": milk,
      "alt": "milk bottles image",
    },
    img6: {
      "src": sugar,
      "alt": "sugar cubes image",
    },
  }

  return (
    <section id={props.id} className='imgGallery grid'>
      <picture>
        <img src={imgGallery.img1.src} alt={imgGallery.img1.alt} />
      </picture>
      <picture>
        <img src={imgGallery.img2.src} alt={imgGallery.img2.alt} />
      </picture>
      <picture>
        <img src={imgGallery.img3.src} alt={imgGallery.img3.alt} />
      </picture>
      <picture>
        <img src={imgGallery.img4.src} alt={imgGallery.img4.alt} />
      </picture>
    </section>
  )
}

export default ImgGallery