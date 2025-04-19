'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-900"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl font-bold text-white mb-8">K.Consulting</div>
          <div className="relative w-24 h-24">
            <motion.div
              className="absolute inset-0 rounded-full border-t-4 border-blue-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-r-4 border-cyan-500"
              animate={{ rotate: -180 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 