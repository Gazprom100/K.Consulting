'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Введите корректный email'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  service: z.string().min(1, 'Выберите услугу'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  'Стейкинг и фарминг',
  'Майнинг',
  'Трейдинг',
  'Арбитраж',
  'Токенизация',
  'NFT',
  'Юридические услуги',
  'Образование',
];

const inputClasses = "mt-1 block w-full rounded-xl bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70";
const labelClasses = "block text-sm font-medium text-gray-300";
const errorClasses = "mt-1 text-sm text-red-400";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      console.log('Form data:', data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto space-y-6 bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800/50"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-900/50 border border-green-500/50 text-green-200 p-4 rounded-xl backdrop-blur-sm"
          >
            Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
          </motion.div>
        )}

        <div>
          <label htmlFor="name" className={labelClasses}>
            Имя
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={inputClasses}
            placeholder="Введите ваше имя"
          />
          {errors.name && (
            <p className={errorClasses}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={inputClasses}
            placeholder="example@domain.com"
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className={inputClasses}
            placeholder="+7 (999) 999-99-99"
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Услуга
          </label>
          <select
            id="service"
            {...register('service')}
            className={inputClasses}
          >
            <option value="">Выберите услугу</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className={errorClasses}>{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Сообщение
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className={inputClasses}
            placeholder="Опишите ваш запрос..."
          />
          {errors.message && (
            <p className={errorClasses}>{errors.message.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </motion.span>
          </button>
        </div>
      </form>
    </motion.div>
  );
} 