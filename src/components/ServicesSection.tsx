'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Данные для категорий услуг
const serviceCategories = [
  {
    id: 'tech',
    name: 'Технологии и продукты',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    services: [
      {
        title: 'Запуск токенов и смарт-контракты',
        description: 'Разработка и внедрение токенов с различными стандартами (ERC-20, BEP-20 и др.) и смарт-контрактов любой сложности',
        items: [
          'Создание токенов под ключ',
          'Интеграция с популярными блокчейнами',
          'Аудит безопасности',
          'Высоконагруженные системы'
        ]
      },
      {
        title: 'Разработка бирж',
        description: 'Создание централизованных (CEX), децентрализованных (DEX) и P2P площадок для криптовалютной торговли',
        items: [
          'CEX с высокой отказоустойчивостью',
          'DEX на различных блокчейнах',
          'P2P обменники с защитой от мошенничества',
          'Интеграции с ведущими ликвидными пулами'
        ]
      },
      {
        title: 'NFT-маркетплейсы и GameFi',
        description: 'Разработка NFT-платформ, Play-to-Earn игр и метавселенных',
        items: [
          'Создание уникальных NFT-коллекций',
          'Системы мятинга и ранкинга токенов',
          'Игровые экономики с P2E механиками',
          'Интеграция блокчейн-технологий в игры'
        ]
      },
      {
        title: 'DAO, стейкинг, фарминг',
        description: 'Построение децентрализованных автономных организаций и систем пассивного дохода',
        items: [
          'Полная инфраструктура DAO',
          'Многоуровневые программы стейкинга',
          'Фарминг с различными мотивационными моделями',
          'Мультичейн-решения'
        ]
      },
      {
        title: 'Платежные системы',
        description: 'Интеграция криптоплатежей в существующие бизнес-процессы и создание новых платежных решений',
        items: [
          'Прием криптоплатежей для бизнеса',
          'Создание защищенных криптокошельков',
          'Разработка криптоматов',
          'Интеграция с фиатными платежными системами'
        ]
      },
      {
        title: 'Аудит и безопасность',
        description: 'Проверка безопасности и оптимизация кода смарт-контрактов и DApps',
        items: [
          'Пентест и анализ уязвимостей',
          'Audit-as-a-Service',
          'Мониторинг безопасности',
          'Восстановление после взломов'
        ]
      }
    ]
  },
  {
    id: 'business',
    name: 'Бизнес и консалтинг',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    services: [
      {
        title: 'Бизнес-модель и токеномика',
        description: 'Разработка устойчивых бизнес-моделей и эффективных токеномических систем',
        items: [
          'Tokenomics-as-a-Service',
          'Дефляционные и инфляционные модели',
          'Механизмы сжигания и вознаграждения',
          'Балансировка экономики токенов'
        ]
      },
      {
        title: 'Стратегия и УТП',
        description: 'Разработка стратегии развития и уникального торгового предложения для криптопроектов',
        items: [
          'Анализ конкурентов и рынка',
          'Позиционирование бренда',
          'Разработка дорожной карты',
          'Создание презентационных материалов'
        ]
      },
      {
        title: 'Юридическое сопровождение',
        description: 'Комплексная юридическая поддержка блокчейн-проектов в различных юрисдикциях',
        items: [
          'Регистрация компаний в крипто-дружественных юрисдикциях',
          'Соответствие нормативным требованиям',
          'KYC/AML консультации',
          'Лицензирование деятельности'
        ]
      },
      {
        title: 'Маркетинг и масштабирование',
        description: 'Комплексное продвижение проектов в криптоиндустрии и привлечение пользователей',
        items: [
          'Комьюнити-менеджмент',
          'Маркетинговые кампании и PR',
          'Influencer-маркетинг',
          'Привлечение инвестиций'
        ]
      }
    ]
  },
  {
    id: 'solutions',
    name: 'Коробочные решения',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    services: [
      {
        title: 'Обменник',
        description: 'Готовое решение для создания криптовалютного обменника с различными опциями',
        items: [
          'Быстрый запуск за 2 недели',
          'Удобный интерфейс администратора',
          'Множество валютных пар',
          'Готовая интеграция с платежными системами'
        ]
      },
      {
        title: 'Инвест-платформа',
        description: 'Комплексное решение для создания инвестиционной платформы с различными инструментами',
        items: [
          'Управление портфелями',
          'Аналитические инструменты',
          'Системы копи-трейдинга',
          'Готовые стратегии инвестирования'
        ]
      },
      {
        title: 'Кошельки',
        description: 'Кастодиальные и некастодиальные кошельки для хранения криптоактивов',
        items: [
          'Поддержка множества блокчейнов',
          'Высокий уровень безопасности',
          'Встроенные DEX-функции',
          'White-label решения'
        ]
      },
      {
        title: 'Гемблинг и казино',
        description: 'Блокчейн-решения для гемблинга с доказуемой честностью',
        items: [
          'Provably Fair механики',
          'Разнообразные игры и слоты',
          'Интеграция с криптовалютами',
          'Гибкая система вознаграждений'
        ]
      },
      {
        title: 'NFT и GameFi платформы',
        description: 'Готовые решения для запуска NFT-маркетплейсов и игровых проектов',
        items: [
          'Создание и продажа NFT',
          'Маркетплейс с кастомизацией',
          'Интеграция P2E-механик',
          'Метавселенные под ключ'
        ]
      }
    ]
  }
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('tech');
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
  
  const categoryVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const serviceVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Фоновая сетка */}
      <div className="cyber-grid"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 neon-blue"
          >
            УСЛУГИ
          </motion.h2>
          
          <motion.div
            initial={{ width: "0%" }}
            animate={isInView ? { width: "150px" } : { width: "0%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-blue-400 mx-auto mb-10"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          >
            Полный спектр услуг для вашего успеха в мире Web3 и блокчейн-технологий — 
            от разработки продуктов до стратегического консалтинга.
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8" ref={ref}>
          {/* Категории услуг (сайдбар) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-1/4"
          >
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                variants={categoryVariants}
                className={`w-full text-left p-4 mb-4 flex items-center gap-3 transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'cyber-card neon-border-blue' 
                    : 'cyber-card opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className={`${activeCategory === category.id ? 'neon-blue' : 'text-gray-400'}`}>
                  {category.icon}
                </span>
                <span className={`text-lg font-medium ${activeCategory === category.id ? 'neon-blue' : 'text-gray-300'}`}>
                  {category.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Содержимое выбранной категории */}
          <div className="lg:w-3/4">
            {serviceCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: activeCategory === category.id ? 1 : 0,
                  x: activeCategory === category.id ? 0 : 50,
                  display: activeCategory === category.id ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={serviceVariants}
                      initial="hidden"
                      animate={activeCategory === category.id ? "visible" : "hidden"}
                      className="cyber-card hover:neon-border-blue group"
                    >
                      <h3 className="text-xl font-bold mb-3 group-hover:neon-blue">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 