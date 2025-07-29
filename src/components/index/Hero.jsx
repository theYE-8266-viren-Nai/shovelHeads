// components/index/Hero.jsx
import React from 'react';
import Navbar from '../Navbar';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen pt-24 bg-cover"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/index/shovelHeadBackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '70% 70%',
        height: '100vh',
        width: '100%',
      }}
    >
      <Navbar />
      
      {/* Hero content area */}
      <div className="flex items-center justify-center h-full text-shovel-head-main-color">
        <div className="text-center text-white">
          <h1 className="mb-4 text-6xl font-black text-orange-300 lg:text-8xl" 
              style={{ 
                textShadow: '4px 4px 0px #000, -2px -2px 0px #ff6b35, 4px -2px 0px #000, -2px 4px 0px #000',
                filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.5))'
              }}>
            SHOVEL HEADS
          </h1>
          <p className="text-xl font-bold tracking-wider text-red-300 lg:text-2xl">
            UNDERGROUND • LOUD • REBELLIOUS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;