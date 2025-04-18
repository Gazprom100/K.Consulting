'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Александр Иванов',
    role: 'Основатель и CEO',
    expertise: ['Криптовалюты', 'Блокчейн', 'Инвестиции'],
    bio: 'Более 10 лет опыта в криптовалютной индустрии. Основатель нескольких успешных проектов.',
    image: '/team/member1.jpg',
  },
  {
    id: 2,
    name: 'Екатерина Смирнова',
    role: 'Технический директор',
    expertise: ['Смарт-контракты', 'DeFi', 'NFT'],
    bio: 'Эксперт по разработке смарт-контрактов и DeFi протоколов. Бывший разработчик в ведущих блокчейн-проектах.',
    image: '/team/member2.jpg',
  },
  {
    id: 3,
    name: 'Дмитрий Петров',
    role: 'Финансовый аналитик',
    expertise: ['Трейдинг', 'Анализ рынка', 'Риск-менеджмент'],
    bio: 'Профессиональный трейдер с опытом работы на крупнейших криптовалютных биржах.',
    image: '/team/member3.jpg',
  },
  {
    id: 4,
    name: 'Мария Сидорова',
    role: 'Юридический консультант',
    expertise: ['Регуляторика', 'ICO/STO', 'Корпоративное право'],
    bio: 'Специалист по правовому регулированию криптовалют и блокчейн-проектов.',
    image: '/team/member4.jpg',
  },
  {
    id: 5,
    name: 'Иван Кузнецов',
    role: 'Эксперт по майнингу',
    expertise: ['Майнинг', 'Оборудование', 'Оптимизация'],
    bio: 'Технический эксперт по майнингу и оптимизации майнинговых ферм.',
    image: '/team/member5.jpg',
  },
  {
    id: 6,
    name: 'Анна Федорова',
    role: 'Менеджер по развитию',
    expertise: ['Маркетинг', 'PR', 'Комьюнити-менеджмент'],
    bio: 'Специалист по развитию проектов и работе с сообществом.',
    image: '/team/member6.jpg',
  },
];

export default function TeamPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наша команда
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Профессионалы с многолетним опытом в криптовалютной индустрии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 