import React from 'react';
import Navbar from '../components/Navbar';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover animate-heroFadeIn"
      style={{
        backgroundImage: "url('/images/shovelHeadBackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '70% 80%',
        height: '100vh',
        width: '100%',
      }}
    >
      {/* Transparent Navbar */}
      <div className="animate-heroFadeIn">
        <Navbar />
      </div>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-heroFadeIn {
          animation: heroFadeIn 1.2s ease-in forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;