import React from 'react'
import './Testimonials.css'
import TestimonialCard from '../TestimonialCard/TestimonialCard.jsx'
import emily from '../../assets/images/image-emily.jpg'
import thomas from '../../assets/images/image-thomas.jpg'
import jennie from '../../assets/images/image-jennie.jpg'


const Testimonials = () => {

    const testimonials = {
        card1: { 
            "photo": emily,
            "alt": "Emily's photo",
            "p": "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
            "name": "Emily R.",
            "role": "Marketing Director",
        },
        card2: {
            "photo": thomas,
            "alt": "Thomas's photo",
            "p": "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
            "name": "Thomas S.",
            "role": "Chief Operating Officer",
        },
        card3: {
            "photo": jennie,
            "alt": "Jennie's photo",
            "p": "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            "name": "Jennie F.",
            "role": "Business Owner",
        }
    }

    return (
        <article className='testimonials flex'>
            <h2 className='fraunces-black text-center upper'>Client Testimonials</h2>
            <TestimonialCard 
                photo={testimonials.card1.photo} 
                p={testimonials.card1.p}  
                name={testimonials.card1.name} 
                role={testimonials.card1.role}>
            </TestimonialCard>
            <TestimonialCard 
                photo={testimonials.card2.photo} 
                p={testimonials.card2.p} 
                name={testimonials.card2.name}
                role={testimonials.card2.role}>
            </TestimonialCard>
            <TestimonialCard 
                photo={testimonials.card3.photo} 
                p={testimonials.card3.p} 
                name={testimonials.card3.name}
                role={testimonials.card2.role}>
            </TestimonialCard>
        </article>
  )
}

export default Testimonials