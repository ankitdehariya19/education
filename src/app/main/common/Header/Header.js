"use client"
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Head from './Head';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: 'home', label: 'Home' },
  { href: 'courses', label: 'Courses' },
  { href: 'about', label: 'About' },
  { href: 'categories', label: 'Categories' },
  { href: 'contact', label: 'Contact' }
];

const Header = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <Head />
      <header className="shadow-2xl bg-white md:shadow-blue-500/20 md:mr-16 md:ml-16 px-8">
        <div className="md:bg-transparent md:mx-4 md:px-4 flex justify-between items-center relative md:mr-40 md:ml-40">
          <nav className={`hidden md:flex justify-between items-center ${click ? 'hidden' : ''}`}>
            <ul className="md:flex space-x-6 ml-6">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="text-black font-medium transition duration-300 hover:text-teal-800">
                  <ScrollLink
                    to={href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeMobileMenu}
                    onSetActive={closeMobileMenu}
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          <button className={`toggle md:hidden absolute top-0 right-0 mt-4 mr-4 ${click ? 'text-teal-500' : 'text-black'}`} onClick={() => setClick(!click)}>
            {click ? <FaTimes size={30} aria-label="Close Menu" /> : <FaBars size={20} aria-label="Open Menu" />}
          </button>
          {click && (
            <div className="mobile-nav md:hidden fixed inset-0 bg-teal-500 z-40 animate-fadeIn" onClick={() => setClick(false)}>
              <ul className="z-50 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-teal-500 text-white">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className='px-4 cursor-pointer capitalize py-4 text-2xl'
                    onClick={() => setClick(false)} // Close the mobile menu when a link is clicked
                  >
                    <ScrollLink to={link.href} spy={true} smooth={true} offset={-70} duration={500}>
                      {link.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={`start bg-teal-500 p-4 md:p-6 ${click ? 'md:ml-auto' : ''}`}>
            <button className={`button ${click ? 'text-teal-500' : 'text-white'}`} aria-label="Get Certificate">GET CERTIFICATE</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
