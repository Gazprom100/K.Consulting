'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Данные для кейсов
const cases = [
  {
    title: 'CEX за 2 месяца',
    description: 'Разработка полноценной криптобиржи с нуля до запуска за рекордные 60 дней',
    tags: ['Биржа', 'CEX', 'Trading'],
    results: [
      'Поддержка 50+ криптовалют',
      'Интеграция с 5 платежными системами',
      'Защита от DDOS-атак',
      'KYC/AML система'
    ],
    image: 'case-cex.jpg',
    color: 'cyan'
  },
  {
    title: 'NFT-маркетплейс (30,000+ токенов)',
    description: 'Создание уникального NFT-маркетплейса с поддержкой множества коллекций и высокой производительностью',
    tags: ['NFT', 'Marketplace', 'Digital Art'],
    results: [
      'Более 30,000 уникальных токенов',
      'Автоматическая верификация коллекций',
      'P2P торговля и аукционы',
      'Интеграция с 3 блокчейнами'
    ],
    image: 'case-nft.jpg',
    color: 'purple'
  },
  {
    title: 'Биржа с 9-летним аптаймом',
    description: 'Модернизация и поддержка крупной биржи криптовалют с безупречным временем безотказной работы',
    tags: ['Поддержка', 'Масштабирование', 'Highload'],
    results: [
      '9 лет без критических сбоев',
      'Обработка >10,000 транзакций в секунду',
      'Снижение задержек на 87%',
      'Интеграция новых блокчейнов'
    ],
    image: 'case-exchange.jpg',
    color: 'blue'
  },
  {
    title: 'Инвестплатформа под лицензией ЦБ',
    description: 'Разработка лицензированной платформы для инвестиций в криптоактивы с соблюдением всех регуляторных требований',
    tags: ['Compliance', 'Investment', 'Legal'],
    results: [
      'Получение лицензии Центробанка',
      'Полное KYC/AML соответствие',
      'Интеграция с банковскими системами',
      'Защита данных по стандартам ФСБ'
    ],
    image: 'case-invest.jpg',
    color: 'purple'
  },
  {
    title: 'DAO и кастомный блокчейн',
    description: 'Создание уникальной DAO-системы управления с собственным блокчейном для крупного международного проекта',
    tags: ['DAO', 'Blockchain', 'Governance'],
    results: [
      'Разработка блокчейна с нуля',
      'Механизм консенсуса DPoS',
      'Система управления DAO',
      'Смарт-контракты для голосований'
    ],
    image: 'case-dao.jpg',
    color: 'cyan'
  }
];

export default function CasesSection() {
  const [activeCase, setActiveCase] = useState<number | null>(null);
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="cases" className="py-20 relative overflow-hidden">
      {/* Фоновая сетка */}
      <div className="cyber-grid"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 neon-cyan"
          >
            КЕЙСЫ
          </motion.h2>
          
          <motion.div
            initial={{ width: "0%" }}
            animate={isInView ? { width: "150px" } : { width: "0%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-cyan-400 mx-auto mb-10"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          >
            Ознакомьтесь с нашими успешными проектами, реализованными для клиентов
            из различных секторов криптоиндустрии.
          </motion.p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`cyber-card group cursor-pointer ${
                activeCase === index 
                  ? item.color === 'blue' 
                    ? 'neon-border-blue' 
                    : item.color === 'purple' 
                      ? 'neon-border-purple' 
                      : 'neon-border-cyan'
                  : ''
              }`}
              onClick={() => setActiveCase(activeCase === index ? null : index)}
            >
              <div className="relative overflow-hidden mb-6 bg-gray-900 rounded-sm h-48">
                <div className={`absolute inset-0 flex items-center justify-center text-4xl font-bold ${
                  item.color === 'blue' 
                    ? 'neon-blue' 
                    : item.color === 'purple' 
                      ? 'neon-purple' 
                      : 'neon-cyan'
                }`}>
                  {index + 1}
                </div>
                
                {/* Сверкающая линия */}
                <div className={`absolute inset-0 overflow-hidden ${activeCase === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                  <div className="absolute inset-0 flex items-center">
                    <div className={`h-px w-full ${
                      item.color === 'blue' 
                        ? 'bg-blue-400' 
                        : item.color === 'purple' 
                          ? 'bg-purple-400' 
                          : 'bg-cyan-400'
                    } animate-pulse`}></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center">
                    <div className={`w-px h-full mx-auto ${
                      item.color === 'blue' 
                        ? 'bg-blue-400' 
                        : item.color === 'purple' 
                          ? 'bg-purple-400' 
                          : 'bg-cyan-400'
                    } animate-pulse`}></div>
                  </div>
                </div>
              </div>
              
              <div className="p-2">
                <h3 className={`text-xl font-bold mb-3 ${
                  item.color === 'blue' 
                    ? 'group-hover:neon-blue' 
                    : item.color === 'purple' 
                      ? 'group-hover:neon-purple' 
                      : 'group-hover:neon-cyan'
                }`}>
                  {item.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className={`text-xs px-2 py-1 rounded ${
                      item.color === 'blue' 
                        ? 'bg-blue-900 text-blue-300' 
                        : item.color === 'purple' 
                          ? 'bg-purple-900 text-purple-300' 
                          : 'bg-cyan-900 text-cyan-300'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeCase === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <h4 className="text-lg font-semibold mb-2">Результаты:</h4>
                  <ul className="space-y-2 pl-2">
                    {item.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className={`w-5 h-5 ${
                          item.color === 'blue' 
                            ? 'text-blue-400' 
                            : item.color === 'purple' 
                              ? 'text-purple-400' 
                              : 'text-cyan-400'
                        } mt-0.5 mr-2 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 text-right">
                  <button className={`text-sm ${
                    item.color === 'blue' 
                      ? 'text-blue-400 hover:text-blue-300' 
                      : item.color === 'purple' 
                        ? 'text-purple-400 hover:text-purple-300' 
                        : 'text-cyan-400 hover:text-cyan-300'
                  }`}>
                    {activeCase === index ? 'Скрыть детали' : 'Подробнее'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 