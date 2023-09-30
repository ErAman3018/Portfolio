import React from 'react'

// import image 
import Img from'../assets/img/img.jpg';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <section id='home'
     className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 md:py- lg:py-0 overflow-hidden'>
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full pt-8">
            {/* left side */}
            <div className="flex-1 flex flex-col items-center lg:items-start  ">
              <p className='text-lg text-accent mt-[7rem] md:mt-[.5rem]'>Hey, I'm Aman Kumar 👋 </p>
              <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.3] font-bold md:tracking-[-2px]'>I Build & Design <br /> Web Interfaces.</h1>
              <p className='pt-3 pb-6 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left ' 
              ><h3>A successful website does three things:</h3>
              <li>It attracts the right kinds of visitors.</li>
              <li>Guides them to the main services or product you offer.</li>
              <li>Collect Contact details for future ongoing relation.</li></p>
              <div className='flex'>
              <Link to='contact' className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all mx-5"> Hire me</Link>
              <a  href='https://drive.google.com/file/d/1QEKmzv3a4vbXhkuixL2V8BnUwEvlzKhu/view?usp=sharing' className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all"> Resume</a>
              </div>
            </div>
            {/* right side */}
            <div className=" h-[25rem] mt-[13rem] hidden lg:flex flex-1  items-end ">
              <img className='h-full' src={Img} alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero
