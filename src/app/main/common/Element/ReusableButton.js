import React from 'react';

const ReusableButton = ({ children }) => {
  return (
    <button className="py-2 mt-5 px-4 md:py-3 md:px-5 lg:px-6 mr-2 md:mr-3 border border-white hover:bg-teal-500 hover:border-teal-500 text-white font-semibold rounded-md transition duration-300 ease-in-out">
      {children}
    </button>
  );
};

export default ReusableButton;
