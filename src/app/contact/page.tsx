'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ui/ContactForm';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: <EnvelopeIcon className="h-6 w-6" />,
    title: 'Email',
    value: 'info@kconsulting.com',
    link: 'mailto:info@kconsulting.com',
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: 'Телефон',
    value: '+7 (XXX) XXX-XX-XX',
    link: 'tel:+7XXXXXXXXXX',
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: 'Адрес',
    value: 'г. Москва, ул. Примерная, д. 123',
    link: 'https://maps.google.com',
  },
];

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Мы готовы ответить на все ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Контактная информация
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start">
                    <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Часы работы
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Понедельник - Пятница</span>
                  <span className="text-gray-900 dark:text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Суббота</span>
                  <span className="text-gray-900 dark:text-white">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Воскресенье</span>
                  <span className="text-gray-900 dark:text-white">Выходной</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 