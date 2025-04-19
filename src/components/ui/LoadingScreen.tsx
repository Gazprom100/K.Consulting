'use client';

import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.div
            className="h-24 w-24 rounded-full border-4 border-gray-700"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 h-24 w-24 rounded-full border-t-4 border-red-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 h-24 w-24 rounded-full border-r-4 border-red-600"
            animate={{ rotate: -180 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.div
          className="mt-8 text-2xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-white">K.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
            Consulting
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
} 