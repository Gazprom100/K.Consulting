'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function AnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images and fonts
    const preloadImages = async () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Handle error case as well
        });
      });
      await Promise.all(imagePromises);
    };

    Promise.all([
      // Wait for fonts to load
      document.fonts.ready,
      // Wait for images to load
      preloadImages(),
      // Minimum loading time
      new Promise(resolve => setTimeout(resolve, 2000))
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
} 