'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const features: Feature[] = [
  {
    title: 'Криптовалютный консалтинг',
    description: 'Профессиональные консультации по инвестициям в криптовалюты и блокчейн-проекты',
    icon: CurrencyDollarIcon,
    color: 'bg-blue-500'
  },
  {
    title: 'Стейкинг и фарминг',
    description: 'Максимизация доходности через оптимальные протоколы и стратегии',
    icon: ChartBarIcon,
    color: 'bg-green-500'
  },
  {
    title: 'Безопасность активов',
    description: 'Защита ваших криптоактивов с использованием передовых практик безопасности',
    icon: ShieldCheckIcon,
    color: 'bg-purple-500'
  },
  {
    title: 'Образование',
    description: 'Обучающие программы и материалы по криптовалютам и блокчейну',
    icon: AcademicCapIcon,
    color: 'bg-orange-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
          <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl top-1/2 -left-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Ваш надежный партнер в мире
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  криптовалют
                </span>
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed">
                Профессиональные консультации и решения для успешного развития вашего криптовалютного бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link 
                  href="/consultation" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Получить консультацию
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Наши услуги
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative"
            >
              <div className="relative h-[600px] w-full">
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Мы предоставляем комплексные решения для успешного развития в криптовалютной индустрии
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 bg-blue-500/30 rounded-full blur-3xl -top-32 -right-32"></div>
          <div className="absolute w-64 h-64 bg-blue-700/30 rounded-full blur-3xl -bottom-32 -left-32"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Готовы начать свой путь в криптовалютном мире?
            </h2>
            <p className="text-blue-100 text-xl mb-12 leading-relaxed">
              Запишитесь на бесплатную консультацию и получите персональный план развития
            </p>
            <Link 
              href="/contact" 
              className="inline-flex px-12 py-5 bg-white text-blue-600 rounded-xl font-medium text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Связаться с нами
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 