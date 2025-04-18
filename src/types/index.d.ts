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
  export const Bars3Icon: React.FC<SVGProps<SVGSVGElement>>;
  export const XMarkIcon: React.FC<SVGProps<SVGSVGElement>>;
  export const ChartBarIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const ShieldCheckIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const AcademicCapIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export const CurrencyDollarIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

declare module 'next/link' {
  import type { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import type { PropsWithChildren } from 'react';

  type LinkProps = PropsWithChildren<NextLinkProps> & {
    className?: string;
  };

  export default function Link(props: LinkProps): JSX.Element;
}

declare module '@headlessui/react' {
  interface DisclosureProps {
    as?: React.ElementType;
    children: ({ open }: { open: boolean }) => React.ReactNode;
    className?: string;
  }

  interface DisclosureButtonProps {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
  }

  interface DisclosurePanelProps {
    children: React.ReactNode;
    className?: string;
  }

  interface TransitionProps {
    show?: boolean;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
    children: React.ReactNode;
  }

  export function Disclosure(props: DisclosureProps): JSX.Element;
  export namespace Disclosure {
    function Button(props: DisclosureButtonProps): JSX.Element;
    function Panel(props: DisclosurePanelProps): JSX.Element;
  }
  export function Transition(props: TransitionProps): JSX.Element;
}

declare module '*.svg' {
  const content: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export default content;
}

declare module 'framer-motion' {
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    className?: string;
    children?: React.ReactNode;
  }

  export const motion: {
    [key: string]: React.FC<MotionProps>;
  };
}

interface Window {
  scrollY: number;
} 