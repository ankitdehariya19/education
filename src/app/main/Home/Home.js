import React from 'react';
import Header from '../common/Header/Header';
import FeatureSection from '../common/Feature/FeatureSection';

const Home = () => {
  return (
    <section id='home'
      className="bg-cover bg-center bg-no-repeat w-full h-screen relative "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1616531770192-6eaea74c2456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
      }}
    >
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gray-700 opacity-40"></div>
      <Header />
      <FeatureSection />
      {/* Other content */}
    </section>
  );
};

export default Home;
