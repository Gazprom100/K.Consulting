'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: 'Криптовалютный консалтинг',
    description: 'Профессиональные консультации по инвестициям в криптовалюты и блокчейн-проекты',
    icon: '💼'
  },
  {
    title: 'Стейкинг и фарминг',
    description: 'Максимизация доходности через оптимальные протоколы и стратегии',
    icon: '📈'
  },
  {
    title: 'Безопасность активов',
    description: 'Защита ваших криптоактивов с использованием передовых практик безопасности',
    icon: '🔒'
  },
  {
    title: 'Образование',
    description: 'Обучающие программы и материалы по криптовалютам и блокчейну',
    icon: '📚'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 flex items-center">
        <div className="container mx-auto px-4 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ваш надежный партнер в мире
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> криптовалют</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Профессиональные консультации и решения для успешного развития вашего криптовалютного бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/consultation" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                  Получить консультацию
                </Link>
                <Link href="/services" className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-medium transition-colors duration-200">
                  Наши услуги
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative h-[500px] w-full">
                <Image
                  src="/crypto-illustration.svg"
                  alt="Cryptocurrency Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Мы предоставляем комплексные решения для успешного развития в криптовалютной индустрии
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готовы начать свой путь в криптовалютном мире?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Запишитесь на бесплатную консультацию и получите персональный план развития
            </p>
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
              Связаться с нами
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 