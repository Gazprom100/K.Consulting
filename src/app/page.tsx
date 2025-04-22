'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { Tab } from '@headlessui/react';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

const serviceCategories = [
  {
    id: 'investment',
    name: 'Инвестиции и Трейдинг',
    description: 'Максимизируйте ваш потенциал в мире криптовалют с помощью профессиональных инвестиционных стратегий и торговых решений',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    services: [
      {
        title: 'Стейкинг и Фарминг',
        description: 'Пассивный доход от ваших криптоактивов с минимальными рисками и максимальной прозрачностью',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: [
          'Доступ к проверенным стейкинг-платформам с высокой доходностью',
          'Профессиональное управление портфелем с учетом рисков',
          'Круглосуточная техническая поддержка и мониторинг'
        ]
      },
      {
        title: 'Трейдинг и Арбитраж',
        description: 'Профессиональные торговые стратегии и арбитражные возможности для максимизации прибыли',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        items: [
          'Индивидуальные торговые стратегии с учетом вашего профиля риска',
          'Автоматизированные системы управления портфелем',
          'Доступ к межбиржевому арбитражу и маркетмейкингу'
        ]
      },
      {
        title: 'Инвестиционный консалтинг',
        description: 'Экспертное сопровождение ваших инвестиций от анализа до реализации',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        items: [
          'Формирование диверсифицированного криптопортфеля',
          'Профессиональное управление рисками и хеджирование',
          'Персональные инвестиционные стратегии'
        ]
      }
    ]
  },
  {
    id: 'development',
    name: 'Разработка и Интеграция',
    description: 'Создаем инновационные блокчейн-решения, которые трансформируют ваш бизнес в цифровую эпоху',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    services: [
      {
        title: 'Блокчейн разработка',
        description: 'Создание передовых блокчейн-решений с использованием последних технологий',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
        items: [
          'Разработка безопасных и эффективных смарт-контрактов',
          'Создание и запуск токенов с уникальной экономической моделью',
          'Разработка P2E игр и метавселенных',
          'Комплексные блокчейн-решения под ключ'
        ]
      },
      {
        title: 'Интеграция',
        description: 'Бесшовная интеграция блокчейн-технологий в существующие бизнес-процессы',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        items: [
          'Интеграция с существующими проектами и платформами',
          'Разработка и внедрение платежных систем',
          'Помощь в получении грантов и инвестиций',
          'Техническая поддержка и обновления'
        ]
      },
      {
        title: 'Коробочные решения',
        description: 'Готовые блокчейн-продукты для быстрого запуска вашего проекта',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
        items: [
          'Готовые DEX и SWAP платформы с кастомизацией',
          'Настраиваемые биржевые решения',
          'P2P платформы под ваши требования',
          'Инвестиционные платформы с гибкими настройками'
        ]
      }
    ]
  },
  {
    id: 'business',
    name: 'Бизнес и Управление',
    description: 'Комплексные решения для развития и масштабирования вашего криптобизнеса',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    services: [
      {
        title: 'Токенизация',
        description: 'Создание и управление токенами с продуманной экономической моделью',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: [
          'Разработка уникальной токеномики',
          'Аналитика рынка и конкурентов',
          'Техническая реализация токенов',
          'Поддержка и развитие токен-экономики'
        ]
      },
      {
        title: 'Маркетинг',
        description: 'Стратегический маркетинг для продвижения криптопроектов',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        ),
        items: [
          'Разработка маркетинговой стратегии',
          'Создание и продвижение бренда',
          'Комплексные рекламные кампании',
          'Аналитика и оптимизация результатов'
        ]
      },
      {
        title: 'Менеджмент',
        description: 'Профессиональное управление криптопроектами на всех этапах',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        items: [
          'Управление проектами любой сложности',
          'Оптимизация бизнес-процессов',
          'Аналитика и отчетность',
          'Координация команды и ресурсов'
        ]
      }
    ]
  },
  {
    id: 'legal',
    name: 'Право и NFT',
    description: 'Комплексная юридическая поддержка и инновационные NFT решения для вашего бизнеса',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    services: [
      {
        title: 'Юридические услуги',
        description: 'Полное юридическое сопровождение криптопроектов',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        items: [
          'Подготовка и проверка документации',
          'Консультации по налогообложению',
          'Представительство в судах',
          'Лицензирование деятельности'
        ]
      },
      {
        title: 'NFT решения',
        description: 'Создание и монетизация уникальных NFT проектов',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        items: [
          'Разработка NFT коллекций',
          'Создание NFT маркетплейсов',
          'Техническая поддержка',
          'Маркетинговое продвижение'
        ]
      },
      {
        title: 'Брокер KLN',
        description: 'Профессиональные брокерские услуги в мире криптовалют',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        items: [
          'Агентское сопровождение сделок',
          'Доверительное управление активами',
          'Брокерские и дилерские услуги',
          'Консультации по инвестициям'
        ]
      }
    ]
  }
];

const stats = [
  { number: '50+', label: 'Успешных проектов' },
  { number: '100M+', label: 'Общий объем инвестиций' },
  { number: '30+', label: 'Экспертов в команде' },
  { number: '5+', label: 'Лет на рынке' }
];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('investment');
  
  // Define tabs
  const tabs = [
    { name: 'Главная', href: '#main' },
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Main navigation tabs */}
      <div className="sticky top-16 z-10 bg-gray-800 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tab.Group selectedIndex={selectedIndex} onChange={(index: number) => setSelectedIndex(index)}>
            <Tab.List className="flex space-x-4 py-3 overflow-x-auto">
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  className={({ selected }: { selected: boolean }) =>
                    `px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap
                    ${selected 
                      ? 'bg-red-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
      </div>

      {/* Tab Panels for different sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Tab.Group selectedIndex={selectedIndex} onChange={(index: number) => setSelectedIndex(index)}>
          <Tab.Panels>
            {/* Main Tab - Hero Section */}
            <Tab.Panel>
              <section id="main" className="pb-12">
                <div className="text-center mb-12">
                  <motion.h1 
                    className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-500`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    K.Consulting
                  </motion.h1>
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Профессиональные решения в мире криптовалют и блокчейна
                  </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <p className="text-red-500 text-2xl md:text-3xl font-bold">{stat.number}</p>
                      <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    className="bg-gray-800 p-6 rounded-lg"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-red-500">Наша миссия</h2>
                    <p className="text-gray-300">
                      Мы делаем мир криптовалют доступным и понятным для каждого. Наша команда экспертов
                      предлагает индивидуальные решения, которые помогут вам достичь успеха в динамичном
                      мире блокчейн-технологий.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gray-800 p-6 rounded-lg"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-red-500">Почему мы</h2>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Многолетний опыт работы с криптовалютами</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Команда профессионалов мирового уровня</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Индивидуальный подход к каждому клиенту</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </section>
            </Tab.Panel>

            {/* Services Tab */}
            <Tab.Panel>
              <section id="services" className="pb-12">
                <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-8 text-center`}>Наши услуги</h2>
                
                <div className="grid md:grid-cols-12 gap-6">
                  {/* Categories Sidebar */}
                  <div className="md:col-span-3">
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                      <div className="p-4 border-b border-gray-700">
                        <h3 className="font-medium text-lg text-red-500">Категории</h3>
                      </div>
                      <nav className="flex flex-col">
                        {serviceCategories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`p-4 text-left flex items-center transition-colors ${
                              activeCategory === category.id 
                                ? 'bg-gray-700 text-white' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                          >
                            <span className="mr-3">{category.icon}</span>
                            <span>{category.name}</span>
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Services Content */}
                  <div className="md:col-span-9">
                    <div className="bg-gray-800 rounded-lg p-6">
                      {serviceCategories.map((category) => (
                        <div 
                          key={category.id} 
                          className={activeCategory === category.id ? 'block' : 'hidden'}
                        >
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-red-500 mb-2">{category.name}</h3>
                            <p className="text-gray-300">{category.description}</p>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            {category.services.map((service, idx) => (
                              <motion.div
                                key={idx}
                                className="bg-gray-700 rounded-lg p-5"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 * idx }}
                              >
                                <div className="flex items-center mb-4">
                                  {service.icon}
                                  <h4 className="text-xl font-medium ml-3">{service.title}</h4>
                                </div>
                                <p className="text-gray-300 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                  {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                      <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                      </svg>
                                      <span className="text-gray-300 text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </Tab.Panel>

            {/* About Us Tab */}
            <Tab.Panel>
              <section id="about" className="pb-12">
                <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-8 text-center`}>О нас</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Наша история</h3>
                    <p className="text-gray-300 mb-4">
                      K.Consulting был основан в 2018 году группой экспертов в области криптовалют и блокчейн-технологий.
                      С тех пор мы выросли в полноценную консалтинговую компанию, обслуживающую клиентов по всему миру.
                    </p>
                    <p className="text-gray-300">
                      За годы работы мы помогли десяткам проектов успешно запуститься и масштабироваться,
                      а сотни частных инвесторов смогли значительно увеличить свой капитал благодаря нашим стратегиям.
                    </p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Наши ценности</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                          <span className="font-medium text-white">Безопасность</span>
                          <p className="text-gray-300 text-sm">Безопасность активов и данных наших клиентов — наш главный приоритет</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <div>
                          <span className="font-medium text-white">Инновации</span>
                          <p className="text-gray-300 text-sm">Мы постоянно исследуем новые технологии и подходы для достижения лучших результатов</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </Tab.Panel>

            {/* Contact Tab */}
            <Tab.Panel>
              <section id="contact" className="pb-12">
                <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-8 text-center`}>Свяжитесь с нами</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Контактная информация</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <span className="font-medium text-white">Телефон</span>
                          <p className="text-gray-300">+7 (495) 123-45-67</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <span className="font-medium text-white">Email</span>
                          <p className="text-gray-300">info@kconsulting.com</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-medium text-white mb-3">Мы в социальных сетях</h4>
                      <div className="flex space-x-4">
                        <a href="#" className="text-red-500 hover:text-red-400">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Напишите нам</h3>
                    
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Имя</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Ваше имя"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                      >
                        Отправить
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
} 