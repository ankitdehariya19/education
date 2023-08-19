import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';

const SocialIcons = () => {
  return (
    <div className='social flex items-center space-x-2 md:space-x-3 lg:space-x-4'>
      {[
        { icon: BsInstagram, label: 'Instagram' },
        { icon: AiOutlineFacebook, label: 'Facebook' },
        { icon: FiTwitter, label: 'Twitter' },
        { icon: FiYoutube, label: 'YouTube' },
      ].map((social, index) => (
        <a
          key={index}
          href={`#${social.label}`} // Replace with actual social media links
          className='bg-gray-400 rounded-full hover:bg-teal-500 p-2 cursor-pointer transform transition-transform hover:scale-110'
          aria-label={social.label}
        >
          <social.icon className='text-xl md:text-2xl lg:text-3xl text-black hover:text-white' />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
