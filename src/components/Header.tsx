'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/services' },
  { name: 'Команда', href: '/team' },
  { name: 'Консультации', href: '/consultation' },
  { name: 'Пакеты', href: '/packages' },
  { name: 'Контакты', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-shrink-0 items-center"
                >
                  <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                    K.Consulting
                  </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden sm:ml-12 sm:flex sm:space-x-8">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200
                          ${isScrolled 
                            ? 'text-gray-600 hover:text-blue-600' 
                            : 'text-gray-200 hover:text-white'}`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Disclosure.Button className={`inline-flex items-center justify-center rounded-md p-2 
                  ${isScrolled 
                    ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-800' 
                    : 'text-gray-200 hover:bg-white/10 hover:text-white'}`}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="sm:hidden">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`space-y-1 px-4 pb-3 pt-2 ${isScrolled ? 'bg-white/80 backdrop-blur-lg' : 'bg-gray-900/90 backdrop-blur-lg'}`}
            >
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`block py-2 px-3 rounded-md text-base font-medium transition-colors duration-200
                    ${isScrolled
                      ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'}`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 