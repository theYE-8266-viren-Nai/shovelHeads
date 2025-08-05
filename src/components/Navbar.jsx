import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const Navbar = () => {
  const [soundOn, setSoundOn] = useState(false);

  const navItems = [
    { href: '/', text: 'HOME', punk: 'H✖ME' },
    { href: '/merch', text: 'MERCH', punk: 'M€RCH' },
    { href: '/discography', text: 'DISCOGRAPHY', punk: 'DISCO⚡GRAPHY' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 font-shovelHeads lg:px-30">
        {/* Torn paper effect top (removed gradients) */}
        {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gray-800"></div> */}
        
        {/* Grunge scratches (simplified) */}
   

        {/* Logo Section */}
        <div className="relative z-10 flex items-center">
          <div className="relative">
            {/* Your actual logo */}
            <img
              src="/shovelHeadsNavbar1.png"
              alt="ShovelHeads Logo"
              className="relative object-contain w-auto h-24 lg:h-56"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            
            {/* Fallback logo (simplified) */}
            <div className="relative items-center justify-center hidden w-40 h-24 lg:w-48 lg:h-32">
              <span className="text-sm font-black text-gray-300">SHOVEL</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="relative z-10 flex items-center space-x-15">
          {navItems.map((item, index) => (
            <div key={item.href} className="relative">
              <a
                href={item.href}
                className="block px-3 py-2 text-xl font-black tracking-wider text-gray-200 lg:px-4 lg:text-3xl"
                style={{ textShadow: '1px 1px 2px #000' }}
              >
                <span>{item.text}</span>
              </a>
            </div>
          ))}
          
          {/* Sound toggle button (simplified) */}
          <div className="relative ml-4">
            <button
              onClick={() => setSoundOn(!soundOn)}
              className="p-2 text-gray-200"
            >
              {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>
        </div>

        {/* Bottom distressed edge (simplified) */}
      </nav>
    </>
  );
};

export default Navbar;