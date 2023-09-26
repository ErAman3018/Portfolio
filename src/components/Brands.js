import React from 'react';

// import brands data
import { brands } from '../data';
import { Link } from 'react-scroll';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flelx items-center'>
        <div className="container mx-auto flex md:justify-center  items-center flex-wrap justify-evenly">
            {brands.map((brand,index)=>{
                return(
                    <div key={index} className='mx-20 my-10'>
                        <Link to={brand.href} ><img className='h-[80px] ' src={brand.img} alt="" /></Link>
                    </div>
                )
            })}
        </div>
      
    </section>
  );
}

export default Brands;
