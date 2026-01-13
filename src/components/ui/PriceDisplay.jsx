import React from 'react';

const PriceDisplay = ({ price, tagline }) => (
  <div className="flex flex-col justify-center">
    <div className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-sans">
      {price}
    </div>
    <div className="text-neutral-500 text-xs mt-2 font-medium uppercase tracking-widest">
      {tagline}
    </div>
  </div>
);



export default PriceDisplay;