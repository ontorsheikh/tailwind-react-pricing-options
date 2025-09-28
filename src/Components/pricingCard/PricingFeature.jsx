import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex gap-2 mt-4 text-pink-500 opacity-0 animate-fade-up-feature'><CircleCheckBig className='text-blue-700'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeature;