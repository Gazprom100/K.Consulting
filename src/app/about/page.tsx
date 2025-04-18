'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const milestones = [
  {
    year: '2018',
    title: 'Основание компании',
    description: 'K.Consulting была основана с целью предоставления профессиональных консультационных услуг в сфере криптовалют и блокчейн технологий.',
  },
  {
    year: '2019',
    title: 'Расширение команды',
    description: 'Формирование команды экспертов в различных областях криптовалютной индустрии.',
  },
  {
    year: '2020',
    title: 'Запуск образовательных программ',
    description: 'Разработка и запуск образовательных программ для начинающих инвесторов и трейдеров.',
  },
  {
    year: '2021',
    title: 'Выход на международный рынок',
    description: 'Расширение деятельности на международные рынки и сотрудничество с зарубежными партнерами.',
  },
  {
    year: '2022',
    title: 'Разработка собственных решений',
    description: 'Создание уникальных аналитических инструментов и методик для клиентов.',
  },
  {
    year: '2023',
    title: 'Новые горизонты',
    description: 'Запуск новых направлений деятельности и расширение спектра предоставляемых услуг.',
  },
];

const achievements = [
  {
    number: '1000+',
    title: 'Довольных клиентов',
    description: 'Более тысячи успешных проектов и довольных клиентов',
  },
  {
    number: '50+',
    title: 'Профессионалов',
    description: 'Команда экспертов с опытом работы в индустрии',
  },
  {
    number: '15+',
    title: 'Стран',
    description: 'География наших клиентов и партнеров',
  },
  {
    number: '24/7',
    title: 'Поддержка',
    description: 'Круглосуточная поддержка наших клиентов',
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            О компании
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            K.Consulting - это команда профессионалов, объединенных общей целью: помочь нашим клиентам
            успешно ориентироваться в мире криптовалют и блокчейн технологий.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Наша миссия
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Мы стремимся сделать криптовалюты и блокчейн технологии доступными и понятными
              для каждого, кто хочет использовать их потенциал для достижения своих целей.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Наша команда экспертов работает над тем, чтобы предоставить клиентам
              наиболее актуальную информацию, профессиональные консультации и индивидуальные
              решения, учитывающие их уникальные потребности.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-96"
          >
            <Image
              src="/about/mission.jpg"
              alt="Наша миссия"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Наша история
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2 px-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 px-4 text-center">
                    <div className="inline-block bg-blue-600 text-white rounded-full px-6 py-2">
                      {milestone.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Наши достижения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 