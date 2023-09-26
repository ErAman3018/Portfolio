import React from 'react'

// import Social data
import { social } from '../data'

// import logo
import Logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                {/* social icons */}
                <div className="flex space-x-6 item-center justify-center">
                    {social.map((item , index)=>{
                        const {href,icon}=item;
                        return <a  className='text-accent text-base' key={index} href={href}>{icon}</a>
                    })}
                </div>

                {/* logo */}
                <div><img className='h-[40px]' src={Logo} alt="" /></div>

                {/* copyright */}
                <p>&copy; 2023 Aman Kumar. All rights reserved</p>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
