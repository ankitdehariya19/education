import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';

const SocialIcons = () => {
  const socialMediaLinks = [
    { icon: InstagramIcon, label: 'Instagram' },
    { icon: FacebookIcon, label: 'Facebook' },
    { icon: TwitterIcon, label: 'Twitter' },
    { icon: YoutubeIcon, label: 'YouTube' },
  ];

  return (
    <div className='social flex items-center space-x-1 md:space-x-2 lg:space-x-3'>
      {socialMediaLinks.map((social, index) => (
        <a
          key={index}
          href={`#${social.label}`} // Replace with actual social media links
          className='rounded-full hover:bg-teal-500 p-1 md:p-2 lg:p-3 cursor-pointer transform transition-transform duration-300 hover:scale-110'
          aria-label={social.label}
        >
          <social.icon className='text-lg md:text-2xl lg:text-3xl text-white hover:text-white' />
        </a>
      ))}
    </div>
  );
};

const InstagramIcon = BsInstagram;
const FacebookIcon = AiOutlineFacebook;
const TwitterIcon = FiTwitter;
const YoutubeIcon = FiYoutube;

export default SocialIcons;
