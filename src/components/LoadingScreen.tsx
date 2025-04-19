'use client';

import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text">K.Consulting</h1>
        </motion.div>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
} 