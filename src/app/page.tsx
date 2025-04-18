'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Стейкинг и фарминг',
    description: 'Максимизация доходности от стейкинга и фарминга криптовалют',
    icon: '💰',
  },
  {
    name: 'Майнинг',
    description: 'Оптимизация майнинговых операций и выбор оборудования',
    icon: '⛏️',
  },
  {
    name: 'Трейдинг',
    description: 'Профессиональный анализ рынка и торговые стратегии',
    icon: '📈',
  },
  {
    name: 'Арбитраж',
    description: 'Поиск и реализация арбитражных возможностей',
    icon: '⚖️',
  },
  {
    name: 'Токенизация',
    description: 'Создание и запуск токенов для вашего бизнеса',
    icon: '🪙',
  },
  {
    name: 'NFT',
    description: 'Разработка и продвижение NFT-проектов',
    icon: '🎨',
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            K.Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Профессиональный консалтинг в сфере криптовалют и блокчейн технологий
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/consultations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Записаться на консультацию
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Комплексные решения для вашего криптовалютного бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать работу?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Выберите подходящий пакет услуг или запишитесь на индивидуальную консультацию
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Выбрать пакет
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-500"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 