import React from 'react';
import { motion } from 'framer-motion';

const BandMembers = () => {
  const animationProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeIn' },
  };

  return (
    <motion.div className="flex flex-col gap-8 p-6 md:flex-row" {...animationProps}>
      {/* Left column: Band member details */}
      <motion.div className="flex flex-col justify-center md:w-1/2" {...animationProps}>
        <h1 className="mb-4 text-3xl font-shovelHeads">Band Members</h1>
        <ul className="mt-2 space-y-4 text-lg text-gray-300 font-bitcount">
          <li>
            <strong>Layate Min Htet</strong> (Vocals/Guitar): The soul-shaking frontman, Layate’s gritty lyrics ignite the band’s grunge fire with every chord.
          </li>
          <li>
            <strong>Htet Aung</strong> (Bass/Guitar): A multi-talented sonic warrior, Htet’s basslines and guitar riffs laid the foundation for their explosive early tracks.
          </li>
          <li>
            <strong>Ye Yint Kyaw Htin</strong> (Drums, joined 2025): Ex-Square Lake Pirates drummer, Ye Yint storms the stage with thunderous beats, electrifying live shows.
          </li>
          <li>
            <strong>Kha Kwe</strong> (Guitar, joined 2025): A riff-slinging maestro, Kha Kwe’s razor-sharp guitar work amps up Shovelheads’ future anthems.
          </li>
        </ul>
      </motion.div>

      {/* Right column: Image */}
      <motion.div className="md:w-1/2" {...animationProps}>
        <img
          src="/BandMembers.jpg"
          alt="Band Members"
          className="object-cover w-full h-auto rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default BandMembers;