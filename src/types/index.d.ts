/// <reference types="react" />
/// <reference types="next" />
/// <reference types="framer-motion" />

declare module 'framer-motion';
declare module '@headlessui/react';
declare module '@heroicons/react/24/outline';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

interface Window {
  scrollY: number;
} 