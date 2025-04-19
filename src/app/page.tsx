'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'blockchain',
    title: 'Блокчейн-разработка',
    description: 'Создание смарт-контрактов, токенов и DApps на DecimalChain',
    details: [
      'Разработка и аудит смарт-контрактов',
      'Создание токенов и NFT',
      'Интеграция с DeFi протоколами',
      'Разработка децентрализованных приложений'
    ]
  },
  {
    id: 'consulting',
    title: 'Криптоконсалтинг',
    description: 'Стратегическое планирование и консультации по развитию криптопроектов',
    details: [
      'Анализ токеномики',
      'Стратегия выхода на рынок',
      'Оценка рисков и безопасности',
      'Юридическое сопровождение'
    ]
  },
  {
    id: 'integration',
    title: 'Интеграция',
    description: 'Внедрение блокчейн-технологий в существующий бизнес',
    details: [
      'Аудит текущей инфраструктуры',
      'Разработка архитектуры решения',
      'Интеграция с legacy-системами',
      'Обучение персонала'
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
  const [activeService, setActiveService] = useState('blockchain');
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Все услуги', content: 'all' },
    { name: 'Для стартапов', content: 'startups' },
    { name: 'Для бизнеса', content: 'business' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 via-transparent to-transparent animate-pulse" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-700/20 via-transparent to-transparent animate-pulse delay-1000" />
            </div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="text-white">K.</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                Consulting
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
              Создаем будущее блокчейн-технологий<br />
              для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 text-lg"
              >
                Начать проект
              </Link>
              <Link
                href="/about"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 text-lg border border-gray-700"
              >
                О компании
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="border border-gray-800 rounded-lg p-1">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-red-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-gray-900 rounded-2xl p-8 cursor-pointer transition-all duration-300 border border-gray-800 ${
                  activeService === service.id ? 'border-red-500' : 'hover:border-gray-700'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Эксперты в области
                <span className="text-red-500"> блокчейна</span>
              </h2>
              <div className="bg-gray-900 rounded-2xl p-8 mb-6 border border-gray-800">
                <p className="text-xl text-gray-300">
                  Мы объединяем опыт традиционного бизнеса с инновациями блокчейн-технологий
                </p>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Наша команда состоит из опытных разработчиков, бизнес-аналитиков и консультантов,
                которые помогут вам создать и развить успешный блокчейн-проект на платформе DecimalChain
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-20 rounded-2xl" />
                <img
                  src="/team.jpg"
                  alt="Команда K.Consulting"
                  className="rounded-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-700/10" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Готовы начать свой путь в мире блокчейна?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Запишитесь на бесплатную консультацию и получите персональный план развития вашего проекта
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-4 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition-all duration-300"
            >
              Связаться с нами
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 