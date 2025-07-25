import React from 'react';
import Navbar from '../components/Navbar'; // Import the existing Navbar component

const Hero = () => {
    return (
        <section
            className="relative min-h-screen bg-cover"
            style={{
                backgroundImage: "url('/images/shovelHeadBackground.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: '70% 80%', // Adjust vertical position as needed
                height: '100vh',
                width: '100%',
            }}
        >
            {/* Transparent Navbar */}
            <Navbar />
        </section>
    );
};

export default Hero;