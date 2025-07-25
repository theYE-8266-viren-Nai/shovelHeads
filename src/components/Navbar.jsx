import React from 'react';
import { Button } from '../components/ui/button';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-yellow-300">
      {/* Start: Logo Image */}
      <div className="flex items-center">
        <img
          src="../../public/images/shovelHeadsNavbar.png" // Keeping the existing path
          alt="RAUE Logo"
          className="object-contain w-auto h-16 " // Increased height, auto width, and object-fit
        />
      </div>

      {/* End: Navigation Links */}
      <div className="space-x-4 text-lg font-bitcount">
        <a href="/" className="hover:text-raue-orange">Home</a>
        <a href="/merch" className="hover:text-raue-orange">Merch</a>
        <a href="/tour" className="hover:text-raue-orange">Tour</a>
        <a href="/contact" className="hover:text-raue-orange">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;