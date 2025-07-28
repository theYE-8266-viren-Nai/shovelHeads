import React from 'react';

const OurStory = () => {
  return (
    <div className="flex flex-col gap-8 p-6 md:flex-row animate-storyFadeIn">
      {/* Left column: Image */}
      <div className="md:w-1/2">
        <img 
          src="/images/ourstory.jpg" 
          alt="Our Story" 
          className="object-cover w-full h-auto rounded-lg"
        />
      </div>

      {/* Right column: Text content */}
      <div className="flex flex-col justify-center md:w-1/2">
        <div className="p-6 bg-gray-800 border rounded-lg border-neutral-700">
          <span className="font-bold text-shovel-head-main-color">Highlighted text</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold">Our Story</h1>
        <p className="mt-2 text-gray-300">
          In the gritty, rain-soaked streets of Yangon, where the weather bites with a relentless edge,
          two teenage rebels fueled by the roaring grunge revolution of the 90s banded together. Led by
          the fierce vocals of Layate Min Htet, they forged Shovelheads—a name that screams defiance. In
          2024, with the lineup still a wild card, Layate and bassist Htet Aung unleashed their untamed
          creativity, hammering out drums, guitar, bass, and vocals with raw intensity.
        </p>
      </div>

      <style>{`
        @keyframes storyFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-storyFadeIn {
          animation: storyFadeIn 1.2s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default OurStory;