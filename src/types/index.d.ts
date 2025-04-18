/// <reference types="react" />
/// <reference types="next" />
/// <reference types="framer-motion" />

import React from 'react';
import type { SVGProps } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module '@heroicons/react/24/outline' {
  export const Bars3Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const XMarkIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const ChartBarIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const ShieldCheckIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const AcademicCapIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const CurrencyDollarIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

declare module '*.svg' {
  const content: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export default content;
}

interface Window {
  scrollY: number;
} 