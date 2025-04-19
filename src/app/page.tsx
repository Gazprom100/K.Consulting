'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Разработка',
    icon: (
      <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Интеграция',
    icon: (
      <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Обучение',
    icon: (
      <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Маркетинг',
    icon: (
      <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90" />
          <div className="absolute right-0 bottom-0">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="200" stroke="url(#gradient)" strokeWidth="0.5" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">K.</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                Consulting
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Создайте свой уникальный продукт<br />
              на блокчейне DecimalChain
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300"
              >
                Связаться с нами
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши возможности</h2>
            <p className="text-gray-400 text-lg">
              Мы специализируемся на блокчейн-токенизации, маркетинговых стратегиях,<br />
              брендинге продуктов и их интеграции в экосистему DecimalChain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="bg-gray-900 rounded-lg p-3 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Пишем будущее
                <span className="text-red-500"> вместе</span>
              </h2>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <p className="text-xl text-gray-300">
                  Мы не следуем тенденциям — мы их создаем
                </p>
              </div>
              <p className="text-gray-400">
                K.Consulting — не просто блокчейн-решения, а стратегический партнёр, который видит
                и развивает потенциал вашего бизнеса на новых технологических горизонтах
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-20 rounded-xl" />
                <img
                  src="/team.jpg"
                  alt="Команда K.Consulting"
                  className="rounded-xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 