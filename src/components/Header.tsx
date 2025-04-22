'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Главная', href: '/', current: true },
  { name: 'Команда', href: '/team', current: false },
  { name: 'Контакты', href: '/contact', current: false },
];

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand fs-4 fw-bold">
          K.Consulting
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-controls="navbarNav" 
          aria-expanded={isExpanded ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navigation.map((item) => (
              <li key={item.name} className="nav-item">
                <Link 
                  href={item.href}
                  className={`nav-link px-3 ${item.current ? 'active fw-bold' : ''}`}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => setIsExpanded(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
} 