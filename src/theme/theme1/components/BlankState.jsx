import React from 'react';
import { FaRegSmileBeam } from 'react-icons/fa';

const BlankState = ({ headline = "Nothing here yet!", message = "This section is waiting for your story.", className = "" }) => (
  <div className={`flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400 ${className}`}>
    <FaRegSmileBeam className="text-5xl mb-4 text-blue-400" />
    <h3 className="text-xl font-semibold mb-2">{headline}</h3>
    <p className="text-base opacity-80">{message}</p>
  </div>
);

export default BlankState;
