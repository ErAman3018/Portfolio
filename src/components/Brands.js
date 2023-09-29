import React from 'react';

// import brands data
import { brands } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flelx items-center'>
        <div className="container mx-auto flex md:justify-center  items-center flex-wrap justify-evenly">
            {brands.map((brand,index)=>{
                return(
                    <div key={index} className='mx-20 my-10'>
                        <a href={brand.href} ><img className='h-[80px] ' src={brand.img} alt="" /></a>
                    </div>
                )
            })}
        </div>
      
    </section>
  );
}

export default Brands;
