'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Главная', href: '/', current: true },
  { name: 'О нас', href: '#about', current: false },
  { name: 'Услуги', href: '#services', current: false },
  { name: 'Кейсы', href: '#cases', current: false },
  { name: 'Образование', href: '#education', current: false },
  { name: 'Контакты', href: '#contact', current: false },
];

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Определяем, прокручена ли страница
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`cyber-nav fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <motion.span 
            className="text-2xl font-bold font-['Orbitron'] gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            K.CONSULTING
          </motion.span>
        </Link>
        
        <button 
          className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 border neon-border-blue rounded transition-all duration-300 ${isExpanded ? 'bg-opacity-20 bg-blue-500' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle navigation"
        >
          <span className={`w-6 h-0.5 bg-blue-400 mb-1.5 transition-all duration-300 ${isExpanded ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${isExpanded ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-blue-400 mt-1.5 transition-all duration-300 ${isExpanded ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        <div className={`fixed inset-0 z-40 transform lg:relative lg:inset-auto lg:transform-none lg:opacity-100 lg:pointer-events-auto transition-all duration-300 ${
          isExpanded 
            ? 'bg-black bg-opacity-80 backdrop-blur-sm opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none lg:bg-transparent'
        }`}>
          <ul className={`flex flex-col lg:flex-row absolute top-24 lg:relative lg:top-0 right-0 left-0 lg:justify-end transition-all duration-500 transform ${
            isExpanded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 lg:translate-y-0 lg:opacity-100'
          }`}>
            {navigation.map((item) => (
              <motion.li key={item.name} className="mx-2 my-2 lg:my-0" whileHover={{ scale: 1.05 }}>
                <Link 
                  href={item.href}
                  className={`block px-6 py-3 text-center lg:text-left text-lg ${
                    item.current 
                      ? 'neon-blue font-semibold' 
                      : 'text-gray-200 hover:neon-blue'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => setIsExpanded(false)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <motion.li className="mx-2 my-2 lg:my-0 lg:ml-6" whileHover={{ scale: 1.05 }}>
              <Link 
                href="#consultation"
                className="cyber-button block text-center"
                onClick={() => setIsExpanded(false)}
              >
                Консультация
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
} 