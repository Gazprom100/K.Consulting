'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DonateModal from '@/components/DonateModal';

// Футуристичный шрифт
import { Orbitron } from 'next/font/google';
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

// Услуги компании
const services = [
  { title: 'Токеномика и бизнес-моделирование', icon: 'chart-line' },
  { title: 'Разработка смарт-контрактов', icon: 'code' },
  { title: 'Создание криптовалют и токенов', icon: 'coins' },
  { title: 'Маркетинговые стратегии', icon: 'bullhorn' }
];

export default function Home() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  
  // Анимация появления элементов при скролле
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  useEffect(() => {
    // Подключаем Bootstrap JS динамически
    const loadBootstrapJS = async () => {
      if (typeof window !== 'undefined') {
        try {
          const url = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
          // Проверяем, не загружен ли уже скрипт
          if (!document.querySelector(`script[src="${url}"]`)) {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
            console.log('Bootstrap JS загружен');
          }
        } catch (err) {
          console.error('Ошибка загрузки Bootstrap JS:', err);
        }
      }
    };
    
    loadBootstrapJS();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Декоративная сетка/фон */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[rgba(255,59,59,0.03)] opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L0 0 0 20' fill='none' stroke='rgba(255,59,59,0.15)' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-red-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-gradient-to-tr from-red-500/5 via-transparent to-transparent"></div>
      </div>

      {/* Неоновые линии */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30"></div>
      </div>

      {/* Шапка/Навигация */}
      <header className="border-b border-red-500/20 sticky top-0 bg-black z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <a href="/" className={`${orbitron.className} text-2xl font-bold text-red-500`}>
              K.CONSULTING
            </a>
            <nav className="hidden md:flex items-center space-x-10">
              <a href="#about" className="text-sm uppercase hover:text-red-500 transition-colors">
                О НАС
              </a>
              <a href="#services" className="text-sm uppercase hover:text-red-500 transition-colors">
                УСЛУГИ
              </a>
              <a href="#cases" className="text-sm uppercase hover:text-red-500 transition-colors">
                КЕЙСЫ
              </a>
            </nav>
            <button 
              className="md:hidden text-white focus:outline-none"
              aria-label="Меню"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero секция */}
        <section className="py-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-4xl"
            >
              <h1 className={`${orbitron.className} text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-red-500`}>
                K.CONSULTING —<br />
                КРИПТО-КОНСАЛТИНГ<br />
                НОВОГО ПОКОЛЕНИЯ
              </h1>
              <p className="text-xl mb-12 text-gray-300 max-w-2xl">
                Токанизация, запуск проектов, блокчейн-решения и маркетинг
                в крипте
              </p>
              <div className="relative inline-block">
                <div className="absolute -inset-0.5 bg-red-500 rounded-sm blur opacity-30"></div>
                <button className="relative px-8 py-4 bg-black border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-colors uppercase tracking-wider font-bold">
                  Получить консультацию
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="py-24 border-t border-red-500/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold mb-16 text-red-500 uppercase`}>
                УСЛУГИ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="relative border border-red-500/20 p-6 group hover:border-red-500 transition-colors"
                  >
                    <div className="absolute -top-px -left-px w-[10px] h-[10px] border-t border-l border-red-500 group-hover:w-[30px] group-hover:h-[30px] transition-all"></div>
                    <div className="absolute -bottom-px -right-px w-[10px] h-[10px] border-b border-r border-red-500 group-hover:w-[30px] group-hover:h-[30px] transition-all"></div>
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <span className="text-red-500 mr-3">•</span>
                      {service.title}
                    </h3>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Кейсы */}
        <section id="cases" className="py-24 border-t border-red-500/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold mb-16 text-red-500 uppercase`}>
                КЕЙСЫ
              </h2>
              <div className="relative border border-red-500/20 p-8">
                <div className="absolute -top-px -right-px w-[20px] h-[20px] border-t border-r border-red-500"></div>
                <h3 className={`${orbitron.className} text-2xl font-bold mb-4`}>
                  Запущено более 400 проектов.
                </h3>
                <p className="text-gray-300 mb-2">
                  среди которых криптобиржи,
                </p>
                <p className="text-gray-300 mb-2">
                  DeFi-протоколы, NFT-маркетплейсы и другие
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contact" className="py-24 border-t border-red-500/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold mb-16 text-red-500 uppercase`}>
                КОНТАКТЫ
              </h2>
              <div className="relative border border-red-500/20 p-8">
                <div className="absolute -top-px -left-px w-[20px] h-[20px] border-t border-l border-red-500"></div>
                <p className="text-xl mb-4">info@kconsulting.com</p>
                <p className="text-xl mb-4">+1 (800) 123-4567</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="py-8 border-t border-red-500/20 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`${orbitron.className} text-xl font-bold text-red-500 mb-4 md:mb-0`}>
              K.CONSULTING
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link href="/privacy" className="text-sm hover:text-red-500 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-sm hover:text-red-500 transition-colors">
                Условия использования
              </Link>
              <button 
                onClick={() => setIsDonateModalOpen(true)}
                className="text-sm border border-red-500/50 px-4 py-2 hover:bg-red-500 hover:text-black transition-colors"
              >
                Донат
              </button>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Модальное окно для доната */}
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)} 
      />

      {/* Стили для исправления проблем с взаимодействием Bootstrap и Tailwind */}
      <style jsx global>{`
        /* Глобальные стили для исправления конфликтов */
        body {
          overflow-x: hidden;
          background-color: black !important;
          color: white !important;
        }
        .container {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
} 