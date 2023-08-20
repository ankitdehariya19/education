import React from 'react';
import SocialIcons from '../Socialicons/SocialIcons';

const Head = () => {
  return (
    <section className='py-4 md:py-6 lg:py-8'>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='flex justify-between items-center'>
          <div className='logo'>
            <h2 className='text-lg md:text-2xl lg:text-4xl font-semibold text-black' aria-label="Gyanohm - Online Education & Learning">
              Gyanohm
            </h2>
            <span className='hidden md:inline-block text-white text-xs md:text-sm lg:text-base mt-1'>Online Education & Learning</span>
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
