// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const Navbar = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 2 seconds
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const navItems = [
    { href: '/', text: 'HOME', punk: 'H✖ME' },
    { href: '/merch', text: 'MERCH', punk: 'M€RCH' },
    { href: '/tour', text: 'TOUR', punk: 'T⚡UR' }
  ];

  return (
    <>
      {/* Grunge texture overlay */}
      <div className="fixed top-0 left-0 right-0 z-40 h-24 pointer-events-none  text-shovel-head-main-color opacity-30 bg-gradient-to-b from-black via-transparent to-transparent"></div>

      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-44 py-2 transition-all duration-300 ${isGlitching ? 'animate-pulse bg-red-900/20' : ''
        }`}>

        {/* Distressed background with multiple layers */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-stone-800/90 to-zinc-900/90"></div>

        {/* Torn paper effect top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-800/40 to-transparent"></div>
        <div className="absolute left-0 right-0 h-1 top-1 bg-gradient-to-r from-orange-600/30 via-yellow-600/30 to-orange-600/30"></div>

        {/* Grunge scratches */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-20 w-32 h-0.5 bg-white rotate-12 opacity-40"></div>
          <div className="absolute top-8 right-32 w-24 h-0.5 bg-red-400 -rotate-6 opacity-30"></div>
          <div className="absolute bottom-6 left-1/3 w-16 h-0.5 bg-orange-400 rotate-45 opacity-50"></div>
          <div className="absolute w-8 h-8 rotate-45 border top-2 left-1/2 border-white/20"></div>
        </div>

        {/* Logo Section */}
        <div className="relative z-10 flex items-center">
          <div className="relative group">
            {/* Logo background glow */}
            <div className="absolute transition-all duration-500 opacity-0 -inset-2 bg-gradient-to-r from-red-600/30 via-orange-500/20 to-yellow-600/30 blur-lg group-hover:opacity-100"></div>

            {/* Your actual logo - uncomment and use your image */}
            <img
              src="/images/shovelHeadsNavbar.png"
              alt="ShovelHeads Logo"
              className="relative object-contain w-auto h-24 transition-all duration-300 lg:h-32 group-hover:brightness-110"
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />

            {/* Fallback logo if image fails to load */}
            <div className="relative items-center justify-center hidden w-40 h-24 transition-all duration-300 border-2 lg:w-48 lg:h-32 bg-gradient-to-br from-zinc-800 to-black border-orange-500/60 group-hover:border-red-500">
              <span className="text-sm font-black tracking-wider text-shovel-head-main-color">SHOVEL</span>
              <div className="absolute w-2 h-2 rotate-45 bg-red-500 top-1 right-1"></div>
              <div className="absolute w-1 h-1 bg-yellow-400 bottom-1 left-1"></div>
            </div>

            {/* Distressed edges */}
            <div className="absolute w-2 h-2 -top-1 -left-1 bg-red-600/60"></div>
            <div className="absolute w-3 h-1 -bottom-1 -right-1 bg-orange-600/40 rotate-12"></div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="relative z-10 flex items-center space-x-1 lg:space-x-6">
          {navItems.map((item, index) => (
            <div key={item.href} className="relative group">
              {/* Link glow effect */}
              <div className="absolute transition-all duration-300 opacity-0 -inset-2 bg-gradient-to-r from-red-600/0 via-orange-500/20 to-red-600/0 blur group-hover:opacity-100"></div>

              <a
                href={item.href}
                className={`relative block px-3 lg:px-4 py-2 text-xl lg:text-3xl font-black tracking-wider transform transition-all duration-300 group-hover:scale-110 ${isGlitching && index === 1 ? 'text-red-400' : 'text-orange-300'
                  } group-hover:text-red-400 group-hover:-rotate-1`}
                style={{
                  textShadow: '2px 2px 0px #000, -1px -1px 0px #ff6b35, 2px -1px 0px #000, -1px 2px 0px #000',
                  filter: 'drop-shadow(0 0 8px rgba(255, 107, 53, 0.3))'
                }}
              >
                <span className="group-hover:hidden">{item.text}</span>
                <span className="hidden group-hover:inline">{item.punk}</span>

                {/* Underline scratch */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-x-110"></div>

                {/* Random punk elements */}
                {index === 0 && (
                  <div className="absolute text-xs text-red-400 transition-all duration-300 opacity-0 -top-1 -right-1 group-hover:opacity-100">★</div>
                )}
                {index === 1 && (
                  <div className="absolute text-xs text-yellow-400 transition-all duration-300 opacity-0 -top-2 -left-1 group-hover:opacity-100 rotate-12">⚡</div>
                )}
                {index === 2 && (
                  <div className="absolute text-xs transition-all duration-300 opacity-0 text-shovel-head-main-color -bottom-1 -right-2 group-hover:opacity-100">✖</div>
                )}
              </a>
            </div>
          ))}

          {/* Sound toggle button */}
          <div className="relative ml-4 group">
            <button
              onClick={() => setSoundOn(!soundOn)}
              className="relative p-2 text-orange-300 transition-all duration-300 hover:text-red-400 hover:scale-110 hover:rotate-12"
            >
              <div className="absolute transition-all duration-300 opacity-0 -inset-1 bg-gradient-to-r from-red-600/20 to-orange-500/20 blur group-hover:opacity-100"></div>
              {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
              <div className="absolute w-2 h-2 transition-all duration-300 bg-red-500 rounded-full opacity-0 -top-1 -right-1 group-hover:opacity-100"></div>
            </button>
          </div>
        </div>

        {/* Bottom distressed edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-600/50 to-transparent"></div>
        <div className="absolute left-0 right-0 h-2 -bottom-1 bg-gradient-to-r from-red-800/20 via-transparent to-red-800/20"></div>

        {/* Random grunge spots */}
        <div className="absolute w-1 h-1 rounded-full top-3 left-1/4 bg-red-400/60"></div>
        <div className="absolute w-2 h-1 bottom-2 right-1/4 bg-orange-400/40"></div>
        <div className="absolute w-1 h-3 rotate-45 top-1/2 left-3/4 bg-yellow-400/30"></div>
      </nav>
    </>
  );
};

export default Navbar;