'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    telegram: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Здесь будет логика отправки формы, например через API
      await new Promise(resolve => setTimeout(resolve, 1500)); // Имитация отправки
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', telegram: '' });
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Сбрасываем статус через 5 секунд
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };
  
  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Фоновая сетка */}
      <div className="cyber-grid"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 neon-blue"
          >
            КОНТАКТЫ
          </motion.h2>
          
          <motion.div
            initial={{ width: "0%" }}
            animate={isInView ? { width: "150px" } : { width: "0%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-blue-400 mx-auto mb-10"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          >
            Свяжитесь с нами для консультации или обсуждения вашего проекта.
            Мы ответим в ближайшее время.
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12" ref={ref}>
          {/* Информация о контактах */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants} className="cyber-card mb-8">
              <h3 className="text-2xl font-bold mb-6 neon-blue">Наши контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-md">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a href="mailto:info@kconsulting.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      info@kconsulting.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-md">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Телефон</h4>
                    <a href="tel:+18001234567" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-md">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Мессенджеры</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://t.me/kconsulting" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        <i className="bi bi-telegram text-2xl"></i>
                      </a>
                      <a href="https://wa.me/18001234567" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        <i className="bi bi-whatsapp text-2xl"></i>
                      </a>
                      <a href="https://discord.gg/kconsulting" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        <i className="bi bi-discord text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="cyber-card">
              <h3 className="text-2xl font-bold mb-6 neon-blue">Соцсети</h3>
              <div className="flex space-x-6 mb-6">
                <a href="https://twitter.com/kconsulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="bi bi-twitter text-3xl"></i>
                </a>
                <a href="https://linkedin.com/company/kconsulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="bi bi-linkedin text-3xl"></i>
                </a>
                <a href="https://github.com/kconsulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="bi bi-github text-3xl"></i>
                </a>
                <a href="https://medium.com/@kconsulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="bi bi-medium text-3xl"></i>
                </a>
              </div>
              
              <p className="text-gray-400">
                Следите за нашими обновлениями и новостями в социальных сетях.
                Мы регулярно публикуем аналитические статьи и новости из мира блокчейна.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Форма обратной связи */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants} className="cyber-card">
              <h3 className="text-2xl font-bold mb-6 neon-blue">Обратная связь</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-900 bg-opacity-20 border border-green-500 text-green-300 px-4 py-3 rounded mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-900 bg-opacity-20 border border-red-500 text-red-300 px-4 py-3 rounded mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p>Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова или свяжитесь с нами другим способом.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Имя</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cyber-input w-full"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cyber-input w-full"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telegram" className="block text-gray-300 mb-2">Telegram (опционально)</label>
                  <input
                    id="telegram"
                    name="telegram"
                    type="text"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="cyber-input w-full"
                    placeholder="@username"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="cyber-input w-full resize-none"
                    placeholder="Опишите ваш проект или вопрос"
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Отправка...
                      </span>
                    ) : (
                      <span>Отправить сообщение</span>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 