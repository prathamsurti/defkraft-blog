import React from 'react';

const DetailList = ({ details, accentColorClass, align = 'left' }) => (
  <ul className="space-y-3 md:space-y-4 list-none p-0">
    {details.map((detail, index) => (
      <li 
        key={index} 
        className={`text-sm text-neutral-300 flex items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${accentColorClass} mr-4 ${align === 'right' ? 'md:ml-4 md:mr-0' : ''}`}></span> 
        {detail}
      </li>
    ))}
  </ul>
);



export default DetailList;