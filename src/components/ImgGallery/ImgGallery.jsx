import React from 'react'
import './ImgGallery.css'
import milk from '../../assets/images/mobile/image-gallery-milkbottles.jpg'
import milkDesktop from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import cutOrange from '../../assets/images/mobile/image-gallery-orange.jpg' 
import cutOrangeDesktop from '../../assets/images/desktop/image-gallery-orange.jpg' 
import cone from '../../assets/images/mobile/image-gallery-cone.jpg' 
import coneDesktop from '../../assets/images/desktop/image-gallery-cone.jpg'
import sugar from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg'
import sugarDesktop from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'


const ImgGallery = (props) => {

  const imgGallery = {
    img1: { 
      "src": milk,
      "srcset": milkDesktop,
      "alt": "milk bottles image",
    },
    img2: {
      "src": cutOrange,
      "srcset": cutOrangeDesktop,
      "alt": "cut orange image",
    },
    img3: {
      "src": cone,
      "srcset": coneDesktop,
      "alt": "ice cream cone image",
    },
    img4: {
      "src": sugar,
      "srcset": sugarDesktop,
      "alt": "milk bottles image",
    },
  }

  return (
    <section id={props.id} className='imgGallery grid'>
      <picture>
        <source media="(min-width=768px)" srcset={milkDesktop} />
        <img src={imgGallery.img1.src} alt={imgGallery.img1.alt} />
      </picture>
      <picture>
        <source media="(min-width=768px)" srcset={cutOrangeDesktop}/>
        <img src={imgGallery.img2.src} alt={imgGallery.img2.alt} />
      </picture>
      <picture>
        <source media="(min-width=768px)" srcset={coneDesktop} />
        <img src={imgGallery.img3.src} alt={imgGallery.img3.alt} />
      </picture>
      <picture>
        <source media="(min-width=768px)" srcset={sugarDesktop} />
        <img src={imgGallery.img4.src} alt={imgGallery.img4.alt} />
      </picture>
    </section>
  )
}

export default ImgGallery