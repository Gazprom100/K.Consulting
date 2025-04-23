'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

// Данные для курсов
const courses = [
  {
    title: 'Основы Web3',
    description: 'Введение в мир децентрализованных технологий и криптовалют',
    duration: '4 недели',
    level: 'Начинающий',
    topics: [
      'Блокчейн и его принципы работы',
      'Криптовалюты и токены',
      'Децентрализованные приложения (DApps)',
      'Web3 и будущее интернета'
    ],
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: 'Создание токена',
    description: 'Практический курс по созданию и запуску собственного токена',
    duration: '6 недель',
    level: 'Средний',
    topics: [
      'Разработка смарт-контрактов на Solidity',
      'Стандарты токенов (ERC-20, ERC-721)',
      'Тестирование и аудит смарт-контрактов',
      'Запуск и листинг токена'
    ],
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'NFT и Metaverse',
    description: 'Погружение в мир невзаимозаменяемых токенов и виртуальных миров',
    duration: '8 недель',
    level: 'Средний',
    topics: [
      'Создание NFT-коллекций',
      'Маркетплейсы и монетизация',
      'Разработка приложений для метавселенных',
      'Интеграция NFT в проекты'
    ],
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Криптоэкономика',
    description: 'Комплексное изучение экономических моделей криптопроектов',
    duration: '10 недель',
    level: 'Продвинутый',
    topics: [
      'Токеномика и дизайн экономических систем',
      'Механизмы стимулирования и вознаграждения',
      'Анализ и оценка токенизированных проектов',
      'Моделирование криптоэкономик'
    ],
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Юриспруденция в крипте',
    description: 'Правовые аспекты блокчейн-проектов и криптовалютного бизнеса',
    duration: '6 недель',
    level: 'Продвинутый',
    topics: [
      'Регулирование криптовалют в разных юрисдикциях',
      'Правовые аспекты ICO/IDO/IEO',
      'KYC/AML в криптопроектах',
      'Интеллектуальная собственность в Web3'
    ],
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Фоновая сетка */}
      <div className="cyber-grid"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 neon-purple"
          >
            ОБРАЗОВАНИЕ
          </motion.h2>
          
          <motion.div
            initial={{ width: "0%" }}
            animate={isInView ? { width: "150px" } : { width: "0%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-purple-400 mx-auto mb-10"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-gray-300"
          >
            <h3 className="text-2xl font-bold mb-4">Smart Blockchain Academy</h3>
            <p className="text-lg md:text-xl">
              Наша академия предлагает современные образовательные программы,
              помогающие освоить блокчейн-технологии и построить карьеру в сфере Web3.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="cyber-card group hover:neon-border-purple"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:neon-purple">
                {course.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {course.description}
              </p>
              
              <div className="flex justify-between mb-4">
                <span className="text-sm text-gray-500">
                  <i className="bi bi-clock mr-1"></i> {course.duration}
                </span>
                <span className="text-sm text-gray-500">
                  <i className="bi bi-bar-chart mr-1"></i> {course.level}
                </span>
              </div>
              
              <div className="border-t border-gray-800 pt-4 mt-4">
                <h4 className="text-md font-semibold mb-2">Программа курса:</h4>
                <ul className="space-y-2">
                  {course.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <Link href="#consultation" className="cyber-button purple w-full text-center">
                  Записаться
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 