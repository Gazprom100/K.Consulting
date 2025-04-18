'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

const packages = [
  {
    id: 'basic',
    name: 'Базовый',
    price: 250,
    description: 'Идеально подходит для начинающих инвесторов',
    features: [
      'Консультация по выбору криптовалют',
      'Базовые стратегии инвестирования',
      'Обзор рынка и трендов',
      'Рекомендации по безопасности',
      '1 час консультации',
    ],
    cta: 'Выбрать базовый пакет',
  },
  {
    id: 'professional',
    name: 'Профессиональный',
    price: 500,
    description: 'Для опытных инвесторов и трейдеров',
    features: [
      'Все функции базового пакета',
      'Продвинутые торговые стратегии',
      'Технический анализ рынка',
      'Управление рисками',
      '3 часа консультации',
      'Доступ к закрытому чату',
    ],
    cta: 'Выбрать профессиональный пакет',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Корпоративный',
    price: 1000,
    description: 'Комплексные решения для бизнеса',
    features: [
      'Все функции профессионального пакета',
      'Разработка индивидуальной стратегии',
      'Консультации по токенизации',
      'Юридическое сопровождение',
      'Неограниченное время консультаций',
      'Приоритетная поддержка',
      'Доступ к эксклюзивным материалам',
    ],
    cta: 'Выбрать корпоративный пакет',
  },
];

export default function PackagesPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Пакеты услуг
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Выберите подходящий пакет для ваших целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-lg shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Популярный
                </div>
              )}
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${pkg.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/месяц</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/checkout?package=${pkg.id}`}
                  className={`block w-full text-center px-4 py-2 rounded-md font-medium ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 