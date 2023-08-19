"use client"
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import Footer from './common/Footer/Footer';
import Contact from './common/Contact/Contact';
import FAQPage from './common/FAQPage/FAQPage';
import Categories from './common/categories/categories';
import CoursesPage from './common/course/course';
import About from './About/About';




const Page = () => {
    return (
        <>
          
        
            <Home/>
           
            <About/>
            <CoursesPage/>
            <Categories/>
            <FAQPage/>
            <Contact/>
            <Footer/>



        </>
    );
};

export default Page;
