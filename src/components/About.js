import React from 'react'

// Import Image
import Image from '../assets/img/img2.jpg'
import { Link } from 'react-scroll';
const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                {/* adding image here */}
                <img src={Image} alt="" className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl" />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                            Aman Kumar
                        </h2>
                        <p className='mb-4 text-accent'>
                            Web Developer 
                        </p>
                        <hr className='mb-8 opacity-5' />
                        <p className="mb-8">
                        We love what we do and we do <br/>
                        what our clients love & work with great clients
                            <br/>
                             all over the world to create thoughtful
                             <br/> and purposeful websites.
                        </p>
                    </div>
                     {/* eslint-disable-next-line */}
                    <Link to='/contact' className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact me</Link>
                </div>
            </div>
        </div>
    </section>
  )
};

export default About
