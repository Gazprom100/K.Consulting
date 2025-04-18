'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    name: 'Стейкинг и фарминг',
    category: 'investment',
    description: 'Максимизация доходности от стейкинга и фарминга криптовалют',
    details: 'Мы помогаем выбрать оптимальные протоколы для стейкинга и фарминга, разрабатываем стратегии диверсификации и управления рисками.',
    icon: '💰',
  },
  {
    id: 2,
    name: 'Майнинг',
    category: 'mining',
    description: 'Оптимизация майнинговых операций и выбор оборудования',
    details: 'Консультации по выбору оборудования, оптимизации энергопотребления и повышению эффективности майнинговых операций.',
    icon: '⛏️',
  },
  {
    id: 3,
    name: 'Трейдинг',
    category: 'trading',
    description: 'Профессиональный анализ рынка и торговые стратегии',
    details: 'Разработка индивидуальных торговых стратегий, технический и фундаментальный анализ, управление рисками.',
    icon: '📈',
  },
  {
    id: 4,
    name: 'Арбитраж',
    category: 'trading',
    description: 'Поиск и реализация арбитражных возможностей',
    details: 'Анализ ценовых различий между биржами, разработка автоматизированных систем арбитража.',
    icon: '⚖️',
  },
  {
    id: 5,
    name: 'Токенизация',
    category: 'development',
    description: 'Создание и запуск токенов для вашего бизнеса',
    details: 'Разработка токеномики, создание смарт-контрактов, запуск токенов и их листинг на биржах.',
    icon: '🪙',
  },
  {
    id: 6,
    name: 'NFT',
    category: 'development',
    description: 'Разработка и продвижение NFT-проектов',
    details: 'Создание NFT-коллекций, разработка маркетинговых стратегий, интеграция с маркетплейсами.',
    icon: '🎨',
  },
  {
    id: 7,
    name: 'Юридические услуги',
    category: 'legal',
    description: 'Правовое сопровождение криптовалютных проектов',
    details: 'Консультации по регулированию, подготовка юридических документов, сопровождение ICO/STO.',
    icon: '⚖️',
  },
  {
    id: 8,
    name: 'Образование',
    category: 'education',
    description: 'Обучение криптовалютным технологиям и инвестициям',
    details: 'Индивидуальные и групповые тренинги, мастер-классы, образовательные программы.',
    icon: '📚',
  },
];

const categories = [
  { id: 'all', name: 'Все услуги' },
  { id: 'investment', name: 'Инвестиции' },
  { id: 'mining', name: 'Майнинг' },
  { id: 'trading', name: 'Трейдинг' },
  { id: 'development', name: 'Разработка' },
  { id: 'legal', name: 'Юридические услуги' },
  { id: 'education', name: 'Образование' },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Комплексные решения для вашего криптовалютного бизнеса
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {service.details}
              </p>
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Подробнее
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 