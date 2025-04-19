'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function ImageWithLoader({
  src,
  alt,
  width,
  height,
  fill,
  className = '',
  priority = false,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
} 