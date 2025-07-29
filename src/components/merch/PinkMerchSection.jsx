import React from 'react';
import { motion } from 'framer-motion';

const pinkText = "This is limited edition merch designed with attitude and style. Bold, rebellious, and unapologetically pink.";

const pinkContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const pinkWordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};

const PinkMerchSection = () => {
  const words = pinkText.split(" ");

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 md:flex-row">
      {/* Image Section */}
      <motion.img
        src="images/merch/ShovelHeadsMechPink.jpg"
        alt="Pink Merch"
        className="w-full max-w-md shadow-lg rounded-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Text Section */}
      <motion.div
        className="max-w-xl space-y-4 text-left"
        variants={pinkContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-pink-600">This is Merch</h2>

        <div className="flex flex-wrap text-lg leading-relaxed text-gray-700">
          {words.map((w, i) => (
            <motion.span key={i} variants={pinkWordVariants} className="mr-2">
              {w}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PinkMerchSection;
