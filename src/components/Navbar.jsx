import React from 'react';
  import { Button } from '../components/ui/button';

  const Navbar = () => {
    return (
      <nav className="background text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Shovelheads</div>
        <div className="space-x-4">
          <Button variant="outline" size="sm" asChild>
            <a href="#origin">Origin</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#members">Members</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#discography">Discography</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#shows">Shows</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#connect">Connect</a>
          </Button>
          <Button variant="default" size="sm">Contact Us</Button>
        </div>
      </nav>
    );
  };

  export default Navbar;