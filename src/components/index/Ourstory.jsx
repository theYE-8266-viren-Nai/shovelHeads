import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const animationProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeIn' },
  };

  return (
    <motion.div className="flex flex-col gap-8 p-6 md:flex-row" {...animationProps}>
      {/* Left column: Image */}
      <motion.div className="md:w-1/2" {...animationProps}>
        <img
          src="/images/index/ourstory.jpg"
          alt="Our Story"
          className="object-cover w-full h-auto rounded-lg"
        />
      </motion.div>

      {/* Right column: Text content */}
      <motion.div className="flex flex-col justify-center md:w-1/2" {...animationProps}>
        {/* <div className="p-6 bg-gray-800 border rounded-lg border-neutral-700">
          <span className="font-bold text-orange-400">Highlighted text</span>
        </div> */}
        <h1 className="mt-4 text-3xl font-shovelHeads">Our Story</h1>
        <p className="mt-2 text-lg text-gray-300 font-bitcount">
          In the gritty, rain-soaked streets of Yangon, where the weather bites with a relentless edge,
          two teenage rebels fueled by the roaring grunge revolution of the 90s banded together. Led by
          the fierce vocals of Layate Min Htet, they forged Shovelheads—a name that screams defiance. In
          2024, with the lineup still a wild card, Layate and bassist Htet Aung unleashed their untamed
          creativity, hammering out drums, guitar, bass, and vocals with raw intensity.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default OurStory;