'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

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
  const [activeCategory, setActiveCategory] = useState('investment');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#0D0D0D] ${montserrat.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold">
              K.Consulting
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="/team" className="text-white hover:text-red-500 transition-colors">
                Team
              </Link>
              <Link href="/contact" className="text-white hover:text-red-500 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/team"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0D0D0D]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-red-500/10 via-transparent to-transparent" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-red-700/10 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              >
                <span className="text-white">Криптовалютный консалтинг</span>
                <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                  для вашего бизнеса
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Помогаем компаниям внедрять блокчейн-технологии и развивать криптовалютные проекты. 
                Полный спектр услуг от разработки до юридического сопровождения.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg overflow-hidden transition-all duration-300 hover:from-red-600 hover:to-red-800"
                >
                  <span className="relative z-10">Получить консультацию</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-red-600 to-red-800 transition-transform duration-300" />
                </Link>
                <Link
                  href="/about"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-red-500/30 rounded-lg overflow-hidden hover:border-red-500 transition-all duration-300"
                >
                  <span className="relative z-10">Узнать больше</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-red-500 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-[#0D0D0D]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Наши услуги
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Предоставляем полный спектр услуг для развития вашего бизнеса в сфере криптовалют и блокчейн-технологий
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-900/50 rounded-2xl">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-6 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-red-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Content */}
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    {category.icon}
                    <h3 className="text-2xl md:text-3xl font-bold">{category.name}</h3>
                  </div>
                  <p className="text-gray-400 text-lg max-w-3xl mx-auto">{category.description}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-gradient-to-b from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-red-500/50 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-red-500/10 rounded-lg">
                            {service.icon}
                          </div>
                          <h4 className="text-xl font-bold">{service.title}</h4>
                        </div>
                        <p className="text-gray-400 mb-8">{service.description}</p>
                        <ul className="space-y-4">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-conic from-red-500/10 via-transparent to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Мы предоставляем комплексные решения для развития вашего бизнеса в сфере криптовалют
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800"
              >
                <div className="text-red-500 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Безопасность</h3>
                <p className="text-gray-400">
                  Все решения проходят тщательный аудит безопасности и тестирование
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-b from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800"
              >
                <div className="text-red-500 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Скорость</h3>
                <p className="text-gray-400">
                  Быстрое внедрение решений и оперативная техническая поддержка
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-b from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800"
              >
                <div className="text-red-500 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Комплексность</h3>
                <p className="text-gray-400">
                  Полный цикл услуг от разработки до юридического сопровождения
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-b from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800"
              >
                <div className="text-red-500 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Гибкость</h3>
                <p className="text-gray-400">
                  Индивидуальный подход и адаптация решений под ваши потребности
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0D0D0D] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-700/5" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Готовы начать свой путь в мире блокчейна?
              </h2>
              <p className="text-lg text-gray-400 mb-12">
                Запишитесь на бесплатную консультацию и получите персональный план развития вашего проекта
              </p>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg overflow-hidden transition-all duration-300 hover:from-red-600 hover:to-red-800"
              >
                <span className="relative z-10">Получить консультацию</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-red-600 to-red-800 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 