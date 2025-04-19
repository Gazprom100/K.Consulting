/// <reference types="react" />
/// <reference types="next" />
/// <reference types="framer-motion" />

import React, { PropsWithChildren } from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';
import type { SVGProps } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module '@heroicons/react/24/outline' {
  export const Bars3Icon: React.FC<SVGProps<SVGSVGElement>>;
  export const XMarkIcon: React.FC<SVGProps<SVGSVGElement>>;
  export const ChartBarIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const ShieldCheckIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const AcademicCapIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const CurrencyDollarIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

declare module '@headlessui/react' {
  interface DisclosureProps {
    children: ({ open }: { open: boolean }) => React.ReactNode;
    as?: React.ElementType;
    className?: string;
  }

  interface DisclosureButtonProps {
    children: React.ReactNode;
    className?: string;
  }

  interface DisclosurePanelProps {
    children: React.ReactNode;
    className?: string;
  }

  export const Disclosure: React.FC<DisclosureProps> & {
    Button: React.FC<DisclosureButtonProps>;
    Panel: React.FC<DisclosurePanelProps>;
  };
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module 'next/link' {
  interface LinkProps extends NextLinkProps {
    children?: React.ReactNode;
    className?: string;
    href: string;
  }
  export default React.ForwardRefExoticComponent<LinkProps>;
}

declare module 'framer-motion' {
  interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    whileHover?: any;
    whileTap?: any;
    className?: string;
    children?: React.ReactNode;
  }

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      MotionProps & JSX.IntrinsicElements[K]
    >;
  };
}

interface Window {
  scrollY: number;
} 