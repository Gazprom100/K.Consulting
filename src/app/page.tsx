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
  
  // Обработчики для модального окна доната
  const handleOpenDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const handleCloseDonateModal = () => {
    setIsDonateModalOpen(false);
  };

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
              <a href="#portfolio" className="text-sm uppercase hover:text-red-500 transition-colors">
                ПОРТФОЛИО
              </a>
              <a href="#contact" className="text-sm uppercase hover:text-red-500 transition-colors">
                КОНТАКТЫ
              </a>
              <button 
                onClick={handleOpenDonateModal}
                className="cyber-button-small py-2 px-4 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Поддержать проект
              </button>
            </nav>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main>
        {/* Герой-секция */}
        <section className="pt-20 pb-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className={`${orbitron.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
                <span className="text-red-500">Криптоконсалтинг</span> будущего
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10">
                Мы помогаем компаниям и проектам внедрять блокчейн-технологии и создавать успешные
                криптовалютные продукты.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="w-full sm:w-auto cyber-button py-3 px-8 text-lg">
                  Связаться с нами
                </a>
                <a href="#services" className="w-full sm:w-auto cyber-button-outline py-3 px-8 text-lg">
                  Наши услуги
                </a>
              </div>
            </motion.div>
          </div>

          {/* Анимированные частицы или элементы дизайна */}
          <div className="absolute top-1/4 right-10 w-40 h-40 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-60 h-60 bg-red-500/10 rounded-full filter blur-3xl"></div>
        </section>

        {/* О нас */}
        <section id="about" className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold mb-4`}>
                О <span className="text-red-500">нас</span>
              </h2>
              <p className="text-xl text-gray-300">
                Мы команда экспертов с многолетним опытом в блокчейне и криптовалютах
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "5+ лет",
                  description: "на рынке криптовалют",
                  icon: (
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "50+ проектов",
                  description: "успешно запущено",
                  icon: (
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "20+ экспертов",
                  description: "в нашей команде",
                  icon: (
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "24/7",
                  description: "поддержка клиентов",
                  icon: (
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1
                      }
                    }
                  }}
                  className="bg-gray-800 border border-red-500/20 p-6 rounded-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {item.icon}
                    <h3 className={`${orbitron.className} text-xl font-medium`}>{item.title}</h3>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold mb-4`}>
                Наши <span className="text-red-500">услуги</span>
              </h2>
              <p className="text-xl text-gray-300">
                Комплексные решения для вашего криптобизнеса
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1
                      }
                    }
                  }}
                  className="group"
                >
                  <div className="bg-gray-800 border border-red-500/20 p-6 rounded-lg h-full transition-all duration-300 hover:border-red-500/50 hover:bg-gray-800/80">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-500/20 transition-all duration-300">
                        <i className={`bi bi-${service.icon} text-2xl text-red-500`}></i>
                      </div>
                      <h3 className={`${orbitron.className} text-xl font-medium`}>{service.title}</h3>
                    </div>
                    <p className="text-gray-300">
                      Наши эксперты предоставляют профессиональные консультации и реализуют 
                      комплексные решения в области {service.title.toLowerCase()}.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={handleOpenDonateModal}
                className="cyber-button-small py-2 px-6 inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Поддержать проект
              </button>
            </div>
          </div>
        </section>

        {/* Портфолио */}
        <section id="portfolio" className="py-20 bg-gray-900/30">
          {/* Содержимое портфолио */}
        </section>

        {/* Контакты */}
        <section id="contact" className="py-20">
          {/* Форма контактов */}
        </section>
      </main>

      {/* Футер */}
      <footer className="border-t border-red-500/20 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`${orbitron.className} text-xl font-bold text-red-500 mb-4 md:mb-0`}>
              K.CONSULTING
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="bi bi-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="bi bi-telegram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="bi bi-discord text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="bi bi-github text-xl"></i>
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-6">
            &copy; {new Date().getFullYear()} K.Consulting. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Модальное окно доната */}
      <DonateModal onClose={handleCloseDonateModal} isOpen={isDonateModalOpen} />
    </div>
  );
} 