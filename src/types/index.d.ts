/// <reference types="react" />
/// <reference types="next" />
/// <reference types="framer-motion" />

import React from 'react';
import { SVGProps } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'framer-motion';
declare module '@headlessui/react';
declare module '@heroicons/react/24/outline';
declare module 'next/link';

declare module '*.svg' {
  const content: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}

interface Window {
  scrollY: number;
} 