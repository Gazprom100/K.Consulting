'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Данные для блоков с преимуществами
const advantages = [
  {
    title: '100+ специалистов',
    description: 'Опытная команда из разных сфер блокчейн-индустрии',
    icon: (
      <svg className="w-10 h-10 mb-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: '400+ проектов',
    description: 'Успешно запущенных и сопровождаемых проектов',
    icon: (
      <svg className="w-10 h-10 mb-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'С 2014 года',
    description: 'На рынке криптовалют и блокчейн-технологий',
    icon: (
      <svg className="w-10 h-10 mb-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Уникальные решения',
    description: 'DAO, DEX, CEX и кастомные блокчейны',
    icon: (
      <svg className="w-10 h-10 mb-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

// Данные для партнеров
const partners = [
  { name: 'Сколково', image: '/partners/skolkovo.png' },
  { name: 'Certik', image: '/partners/certik.png' },
  { name: 'Binance', image: '/partners/binance.png' },
  { name: 'Solana', image: '/partners/solana.png' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  // Анимация блоков преимуществ
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            О КОМПАНИИ
          </motion.h2>
          
          <motion.div
            initial={{ width: "0%" }}
            animate={isInView ? { width: "150px" } : { width: "0%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-purple-400 mx-auto mb-10"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          >
            K.Consulting — ваш надежный партнер в мире криптовалют и блокчейн-технологий с 2014 года. 
            Мы помогаем клиентам создавать, запускать, масштабировать и поддерживать проекты Web3 любой сложности.
          </motion.p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="cyber-card flex flex-col items-center text-center group perspective"
            >
              <div className="transform transition-transform duration-500 group-hover:rotate-y-12">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:neon-blue">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="py-10">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center neon-cyan"
          >
            ЭКОСИСТЕМА
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="cyber-card p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4 neon-blue">Глубокая экспертиза</h4>
                <p className="text-gray-300 mb-6">
                  Наша команда обладает многолетним опытом работы в блокчейн-индустрии,
                  включая разработку смарт-контрактов, токеномику, юридическое сопровождение и маркетинг.
                </p>
                
                <h4 className="text-xl font-bold mb-4 neon-blue">Конфиденциальность</h4>
                <p className="text-gray-300">
                  Мы гарантируем полную конфиденциальность всех данных наших клиентов
                  и используем только безопасные каналы коммуникации.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 neon-blue">Проверенные решения</h4>
                <p className="text-gray-300 mb-6">
                  Все наши продукты и услуги проходят многоступенчатое тестирование и
                  аудит безопасности перед внедрением.
                </p>
                
                <h4 className="text-xl font-bold mb-4 neon-blue">Свои продукты и комьюнити</h4>
                <p className="text-gray-300">
                  K.Consulting развивает собственную экосистему продуктов и услуг, а также поддерживает
                  активное сообщество в сфере блокчейн-технологий.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
          >
            НАШИ ПАРТНЁРЫ
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="w-32 h-32 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-md p-4 border neon-border-blue filter grayscale hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-xl font-bold text-center">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}