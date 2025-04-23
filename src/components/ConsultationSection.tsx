'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Данные для типов консультаций
const consultationTypes = [
  {
    id: 'technical',
    title: 'Технические консультации',
    description: 'Решение технических вопросов по смарт-контрактам, блокчейну, разработке DApps',
    icon: (
      <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 'legal',
    title: 'Юридический консалтинг',
    description: 'Консультации по правовым аспектам криптовалютного бизнеса и регуляторным требованиям',
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: 'marketing',
    title: 'Маркетинг в крипте',
    description: 'Стратегии продвижения криптопроектов, комьюнити-билдинг и PR-сопровождение',
    icon: (
      <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    id: 'launch',
    title: 'Запуск проекта с нуля',
    description: 'Комплексное сопровождение запуска криптовалютного проекта от идеи до выхода на рынок',
    icon: (
      <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    consultationType: 'technical',
    message: '',
    telegram: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleConsultationTypeChange = (id: string) => {
    setFormData(prev => ({ ...prev, consultationType: id }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Имитация отправки данных
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        consultationType: 'technical', 
        message: '', 
        telegram: '' 
      });
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="consultation" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Фоновая сетка */}
      <div className="cyber-grid"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </motion.h2>
          
          <motion.div
            initial={{ width: "0%" }}
            animate={isInView ? { width: "150px" } : { width: "0%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-10"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          >
            Выберите тип консультации и заполните форму ниже.
            Наши эксперты свяжутся с вами в ближайшее время для обсуждения деталей.
          </motion.p>
        </div>
        
        {/* Типы консультаций */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {consultationTypes.map((type) => (
            <motion.div
              key={type.id}
              variants={itemVariants}
              className={`cyber-card cursor-pointer transition-all duration-300 ${
                formData.consultationType === type.id ? 'neon-border-blue' : ''
              }`}
              onClick={() => handleConsultationTypeChange(type.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {type.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  formData.consultationType === type.id ? 'neon-blue' : ''
                }`}>
                  {type.title}
                </h3>
                <p className="text-gray-400">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Форма записи на консультацию */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="cyber-card">
            <h3 className="text-2xl font-bold mb-6 neon-blue">Заполните данные</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-900 bg-opacity-20 border border-green-500 text-green-300 px-4 py-3 rounded mb-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время для обсуждения деталей консультации.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-900 bg-opacity-20 border border-red-500 text-red-300 px-4 py-3 rounded mb-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p>Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова или свяжитесь с нами другим способом.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label htmlFor="consultationType" className="block text-gray-300 mb-2">Тип консультации</label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  className="cyber-input w-full"
                >
                  {consultationTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Опишите ваш запрос</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="cyber-input w-full resize-none"
                  placeholder="Расскажите о вашем проекте или вопросе"
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
                    <span>Записаться на консультацию</span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 