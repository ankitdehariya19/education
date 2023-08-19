import React from 'react';
import SocialIcons from "../Socialicons/SocialIcons"


const Head = () => {
  return (
    <section className=' py-4 md:py-6 lg:py-8'>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='flex justify-between items-center'>
          <div className='logo'>
            <h1 className='text-lg md:text-lg lg:text-4xl font-semibold text-black'>
            Gyanohm
            </h1>
            
            <span className='text-white text-xs md:text-sm lg:text-base'>Online Education & Learning</span>
          </div>
          <div className='social-icons'>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
