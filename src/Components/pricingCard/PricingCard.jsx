import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    return (
        <div tabIndex={0} className='border  bg-amber-600 rounded-2xl p-4 text-white flex flex-col transition-colors hover:bg-pink-700 focus:bg-pink-700 duration-[4000ms] animate-fade-up overflow-hidden'>
            {/* card header */}
            <div >
              <h1 className="text-7xl font-extrabold  header-animate ">{pricing.name}</h1>
              <h2 className="text-3xl font-semibold header-animate">
    {pricing.price}
  </h2>
            </div>

            {/* card body */}
            <div tabIndex={0} className='bg-amber-400 p-4 rounded-xl  mt-10 flex-1 transition-all hover:scale-95 focus:scale-95 hover:bg-green-500 focus:bg-green-500 duration-[5000ms] '>
            <p className=' font-bold'>{pricing.description}</p>
            {

                pricing.features.map((feature,index)=> <PricingFeature feature ={feature}
                kye={index}
                ></PricingFeature>)
            }
            </div>

            <button className="btn w-full  mt-4 transition-all hover:scale-140 focus:scale-150
            
            bg-black   hover:bg-white focus:bg-white hover:text-black focus:text-black duration-[4000ms] text-white border-none ">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;