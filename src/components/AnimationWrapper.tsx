'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function AnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload fonts and minimal loading time
    Promise.all([
      // Wait for fonts to load
      document.fonts.ready,
      // Minimum loading time
      new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <div className="fade-in">
        {children}
      </div>
    </>
  );
} 