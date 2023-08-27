'use client';
import React from 'react';
import Home from './main/Home/Home';``
import Footer from './main/common/Footer/Footer';
import Contact from './main/common/Contact/Contact';
import FAQPage from './main/common/FAQPage/FAQPage';
import Categories from './main/common/categories/categories';
import CoursesPage from './main/common/course/course';
import About from './main/About/About';

const page = () => {
  return (
    <div>
      <Home />

      <About />
      <CoursesPage />
      <Categories />
      <FAQPage />
      <Contact />
      <Footer />

    </div>
  )
}

export default page