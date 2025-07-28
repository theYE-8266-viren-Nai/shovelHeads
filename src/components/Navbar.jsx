import React from 'react';
import { Button } from '../components/ui/button';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-shovel-head-main-color me-24 ">
      {/* Start: Logo Image */}
      <div className="flex items-center ">
        <img
          src="../../images/shovelHeadsNavbar.png" // Keeping the existing path
          alt="ShovelHeads Logo"
          className="object-contain h-96 w-aut me-10 " // Increased height, auto width, and object-fit
        />
      </div>

      {/* End: Navigation Links */}
      <div className="justify-between space-x-4 text-6xl ms-40 text-shovel-head-main-color font-nirvana">
        <a href="/" className="px-2 hover:text-raue-orange">Home</a>
        <a href="/merch" className="px-2 hover:text-raue-orange">Merch</a>
        <a href="/tour" className="px-2 hover:text-raue-orange">Tour</a>
        {/* <a href="/contact" className="hover:text-raue-orange w-11 font-nirvana">Contact</a> */}
      </div>
    </nav>
  );
};

export default Navbar;