'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';
import ImageWithLoader from '@/components/ui/ImageWithLoader';
import { useRef } from 'react';

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
    color: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    title: 'Стейкинг и фарминг',
    description: 'Максимизация доходности через оптимальные протоколы и стратегии',
    icon: ChartBarIcon,
    color: 'bg-gradient-to-br from-green-500 to-green-600'
  },
  {
    title: 'Безопасность активов',
    description: 'Защита ваших криптоактивов с использованием передовых практик безопасности',
    icon: ShieldCheckIcon,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  {
    title: 'Образование',
    description: 'Обучающие программы и материалы по криптовалютам и блокчейну',
    icon: AcademicCapIcon,
    color: 'bg-gradient-to-br from-orange-500 to-orange-600'
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
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <main className="flex min-h-screen flex-col" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900"
          style={{ y: backgroundY }}
        />
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -top-96 -right-96 animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl top-1/2 -left-48 animate-pulse delay-1000"></div>
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-2000"></div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm"
          />
        </div>

        <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
              style={{ y: textY }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Ваш надежный партнер в мире
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  криптовалют
                </span>
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed">
                Профессиональные консультации и решения для успешного развития вашего криптовалютного бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link 
                  href="/consultation" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-medium text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                >
                  <span className="relative z-10">Получить консультацию</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
                <Link 
                  href="/services" 
                  className="group relative px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white">Наши услуги</span>
                  <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-1"></div>
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
                <ImageWithLoader
                  src="/crypto-illustration.svg"
                  alt="Cryptocurrency Illustration"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-1/2 bg-gradient-to-b from-transparent to-black/50 bottom-0"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
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
                className="group bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300 border border-gray-700/50 hover:border-gray-600"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-black to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -left-48"></div>
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
            <p className="text-blue-200 text-xl mb-12 leading-relaxed">
              Запишитесь на бесплатную консультацию и получите персональный план развития
            </p>
            <Link 
              href="/contact" 
              className="group relative inline-flex px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-medium text-xl text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">Связаться с нами</span>
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 