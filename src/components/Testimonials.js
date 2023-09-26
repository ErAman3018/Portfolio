import React from 'react'

// import components
import TestimonialSlider from '../components/TestimonialSlider'

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
            <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
                What other People say ...
            </h2>
            <p className='subtitle'> Clients consistently express satisfaction with the level of dedication and attention to detail I bring to each project. They appreciate my ability to translate their vision into a functional and visually appealing website. </p>
        </div>
        <TestimonialSlider/>
      </div>
    </section>
  )
}

export default Testimonials
