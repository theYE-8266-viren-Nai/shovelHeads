// components/index/Hero.jsx
import React from 'react';
import Navbar from '../Navbar.jsx';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen pt-24 bg-cover"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/index/shovelHeadBackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '70% 80%',
        height: '100vh',
        width: '100%',
      }}
    >
      <Navbar />
      
      {/* Hero content area */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-text-primary">
          <h1 className="mb-4 text-6xl font-black lg:text-8xl text-text-secondary font-nirvana" 
              style={{ 
                textShadow: '4px 4px 0px #000000, -2px -2px 0px #fce83a, 4px -2px 0px #000000, -2px 4px 0px #000000',
                filter: 'drop-shadow(0 0 20px rgba(252, 232, 58, 0.5))'
              }}>
            SHOVEL HEADS
          </h1>
          <p className="text-xl font-bold tracking-wider lg:text-2xl text-text-secondary">
            UNDERGROUND • LOUD • REBELLIOUS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;