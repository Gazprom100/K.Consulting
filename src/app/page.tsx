'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import DonateModal from '@/components/DonateModal';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

const serviceCategories = [
  {
    id: 'investment',
    name: 'Инвестиции и Трейдинг',
    description: 'Максимизируйте ваш потенциал в мире криптовалют с помощью профессиональных инвестиционных стратегий и торговых решений',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    services: [
      {
        title: 'Стейкинг и Фарминг',
        description: 'Пассивный доход от ваших криптоактивов с минимальными рисками и максимальной прозрачностью',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: [
          'Доступ к проверенным стейкинг-платформам с высокой доходностью',
          'Профессиональное управление портфелем с учетом рисков',
          'Круглосуточная техническая поддержка и мониторинг'
        ]
      },
      {
        title: 'Трейдинг и Арбитраж',
        description: 'Профессиональные торговые стратегии и арбитражные возможности для максимизации прибыли',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        items: [
          'Индивидуальные торговые стратегии с учетом вашего профиля риска',
          'Автоматизированные системы управления портфелем',
          'Доступ к межбиржевому арбитражу и маркетмейкингу'
        ]
      },
      {
        title: 'Инвестиционный консалтинг',
        description: 'Экспертное сопровождение ваших инвестиций от анализа до реализации',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        items: [
          'Формирование диверсифицированного криптопортфеля',
          'Профессиональное управление рисками и хеджирование',
          'Персональные инвестиционные стратегии'
        ]
      }
    ]
  },
  {
    id: 'development',
    name: 'Разработка и Интеграция',
    description: 'Создаем инновационные блокчейн-решения, которые трансформируют ваш бизнес в цифровую эпоху',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    services: [
      {
        title: 'Блокчейн разработка',
        description: 'Создание передовых блокчейн-решений с использованием последних технологий',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
        items: [
          'Разработка безопасных и эффективных смарт-контрактов',
          'Создание и запуск токенов с уникальной экономической моделью',
          'Разработка P2E игр и метавселенных',
          'Комплексные блокчейн-решения под ключ'
        ]
      },
      {
        title: 'Интеграция',
        description: 'Бесшовная интеграция блокчейн-технологий в существующие бизнес-процессы',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        items: [
          'Интеграция с существующими проектами и платформами',
          'Разработка и внедрение платежных систем',
          'Помощь в получении грантов и инвестиций',
          'Техническая поддержка и обновления'
        ]
      },
      {
        title: 'Коробочные решения',
        description: 'Готовые блокчейн-продукты для быстрого запуска вашего проекта',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
        items: [
          'Готовые DEX и SWAP платформы с кастомизацией',
          'Настраиваемые биржевые решения',
          'P2P платформы под ваши требования',
          'Инвестиционные платформы с гибкими настройками'
        ]
      }
    ]
  },
  {
    id: 'business',
    name: 'Бизнес и Управление',
    description: 'Комплексные решения для развития и масштабирования вашего криптобизнеса',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    services: [
      {
        title: 'Токенизация',
        description: 'Создание и управление токенами с продуманной экономической моделью',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: [
          'Разработка уникальной токеномики',
          'Аналитика рынка и конкурентов',
          'Техническая реализация токенов',
          'Поддержка и развитие токен-экономики'
        ]
      },
      {
        title: 'Маркетинг',
        description: 'Стратегический маркетинг для продвижения криптопроектов',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        ),
        items: [
          'Разработка маркетинговой стратегии',
          'Создание и продвижение бренда',
          'Комплексные рекламные кампании',
          'Аналитика и оптимизация результатов'
        ]
      },
      {
        title: 'Менеджмент',
        description: 'Профессиональное управление криптопроектами на всех этапах',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        items: [
          'Управление проектами любой сложности',
          'Оптимизация бизнес-процессов',
          'Аналитика и отчетность',
          'Координация команды и ресурсов'
        ]
      }
    ]
  },
  {
    id: 'legal',
    name: 'Право и NFT',
    description: 'Комплексная юридическая поддержка и инновационные NFT решения для вашего бизнеса',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    services: [
      {
        title: 'Юридические услуги',
        description: 'Полное юридическое сопровождение криптопроектов',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        items: [
          'Подготовка и проверка документации',
          'Консультации по налогообложению',
          'Представительство в судах',
          'Лицензирование деятельности'
        ]
      },
      {
        title: 'NFT решения',
        description: 'Создание и монетизация уникальных NFT проектов',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        items: [
          'Разработка NFT коллекций',
          'Создание NFT маркетплейсов',
          'Техническая поддержка',
          'Маркетинговое продвижение'
        ]
      },
      {
        title: 'Брокер KLN',
        description: 'Профессиональные брокерские услуги в мире криптовалют',
        icon: (
          <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        items: [
          'Агентское сопровождение сделок',
          'Доверительное управление активами',
          'Брокерские и дилерские услуги',
          'Консультации по инвестициям'
        ]
      }
    ]
  }
];

const stats = [
  { number: '50+', label: 'Успешных проектов' },
  { number: '100M+', label: 'Общий объем инвестиций' },
  { number: '30+', label: 'Экспертов в команде' },
  { number: '5+', label: 'Лет на рынке' }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('main');
  const [activeCategory, setActiveCategory] = useState('investment');
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  
  const handleOpenDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const handleCloseDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  // Добавляем Bootstrap JS на стороне клиента
  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  return (
    <div className="container-fluid px-0" style={{ paddingTop: '60px' }}>
      {/* Навигация по вкладкам */}
      <ul className="nav nav-tabs bg-dark border-bottom border-dark justify-content-center sticky-top" style={{ top: '56px', zIndex: 1000 }}>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'main' ? 'active bg-primary text-white' : 'text-white'}`}
            onClick={() => setActiveTab('main')}
            href="#main"
          >
            Главная
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'services' ? 'active bg-primary text-white' : 'text-white'}`}
            onClick={() => setActiveTab('services')}
            href="#services"
          >
            Услуги
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'about' ? 'active bg-primary text-white' : 'text-white'}`}
            onClick={() => setActiveTab('about')}
            href="#about"
          >
            О нас
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'contact' ? 'active bg-primary text-white' : 'text-white'}`}
            onClick={() => setActiveTab('contact')}
            href="#contact"
          >
            Контакты
          </a>
        </li>
      </ul>

      {/* Содержимое вкладок */}
      <div className="tab-content bg-dark text-white min-vh-100">
        
        {/* Главная вкладка */}
        <div 
          className={`tab-pane fade ${activeTab === 'main' ? 'show active' : ''}`} 
          id="main"
        >
          <div className="container py-5">
            <div className="text-center mb-5">
              <h1 className={`${montserrat.className} display-3 fw-bold mb-3`}>
                <span className="text-danger">K.Consulting</span>
              </h1>
              <p className="lead fs-4 mb-4">
                Профессиональные решения в мире криптовалют и блокчейна
              </p>
              <button 
                className="btn btn-danger btn-lg"
                onClick={handleOpenDonateModal}
                id="donate"
              >
                <i className="bi bi-heart-fill me-2"></i> Отправить донат
              </button>
            </div>

            {/* Статистика */}
            <div className="row row-cols-2 row-cols-md-4 g-4 mb-5">
              {stats.map((stat, index) => (
                <div key={index} className="col">
                  <div className="card h-100 bg-dark border border-secondary">
                    <div className="card-body text-center">
                      <h2 className="card-title text-danger fw-bold">{stat.number}</h2>
                      <p className="card-text text-light">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

            {/* Информация о миссии и преимущества */}
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 bg-dark border border-secondary">
                  <div className="card-body">
                    <h3 className="card-title h4 text-danger mb-3">Наша миссия</h3>
                    <p className="card-text">
                      Мы делаем мир криптовалют доступным и понятным для каждого. Наша команда экспертов
                      предлагает индивидуальные решения, которые помогут вам достичь успеха в динамичном
                      мире блокчейн-технологий.
                    </p>
                  </div>
                </div>
          </div>

              <div className="col-md-6">
                <div className="card h-100 bg-dark border border-secondary">
                  <div className="card-body">
                    <h3 className="card-title h4 text-danger mb-3">Почему мы</h3>
                    <ul className="list-group list-group-flush bg-transparent">
                      <li className="list-group-item bg-dark text-light border-secondary">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        Многолетний опыт работы с криптовалютами
                      </li>
                      <li className="list-group-item bg-dark text-light border-secondary">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        Команда профессионалов мирового уровня
                      </li>
                      <li className="list-group-item bg-dark text-light border-secondary">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        Индивидуальный подход к каждому клиенту
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Вкладка Услуги */}
        <div 
          className={`tab-pane fade ${activeTab === 'services' ? 'show active' : ''}`} 
          id="services"
        >
          <div className="container py-5">
            <h2 className={`${montserrat.className} text-center display-5 mb-5`}>Наши услуги</h2>
            
            <div className="row">
              {/* Боковая панель категорий */}
              <div className="col-lg-3 mb-4">
                <div className="list-group">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                      type="button"
                      className={`list-group-item list-group-item-action d-flex align-items-center ${
                      activeCategory === category.id
                          ? 'active bg-primary' 
                          : 'bg-dark text-white'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                      <span className="me-2" style={{ width: '24px', height: '24px' }}>
                        {category.icon}
                      </span>
                      <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

              {/* Содержимое категорий */}
              <div className="col-lg-9">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                    className={activeCategory === category.id ? 'd-block' : 'd-none'}
                  >
                    <div className="card bg-dark border border-secondary mb-4">
                      <div className="card-body">
                        <h3 className="card-title h3 text-danger mb-3">{category.name}</h3>
                        <p className="card-text mb-4">{category.description}</p>
                        
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                          {category.services.map((service, idx) => (
                            <div key={idx} className="col">
                              <div className="card h-100 bg-secondary text-white">
                                <div className="card-body">
                                  <div className="d-flex align-items-center mb-3">
                                    <span className="me-2 text-danger">
                            {service.icon}
                                    </span>
                                    <h5 className="card-title mb-0">{service.title}</h5>
                          </div>
                                  <p className="card-text">{service.description}</p>
                                  <ul className="list-group list-group-flush bg-transparent">
                                    {service.items.map((item, i) => (
                                      <li key={i} className="list-group-item bg-transparent border-secondary text-white">
                                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                        {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                </div>
              </div>
            ))}
          </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Вкладка О нас */}
        <div 
          className={`tab-pane fade ${activeTab === 'about' ? 'show active' : ''}`} 
          id="about"
        >
          <div className="container py-5">
            <h2 className={`${montserrat.className} text-center display-5 mb-5`}>О нас</h2>
            
            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className="card h-100 bg-dark border border-secondary">
                  <div className="card-body">
                    <h3 className="card-title h4 text-danger mb-3">Наша история</h3>
                    <p className="card-text mb-3">
                      K.Consulting был основан в 2018 году группой экспертов в области криптовалют и блокчейн-технологий.
                      С тех пор мы выросли в полноценную консалтинговую компанию, обслуживающую клиентов по всему миру.
                    </p>
                    <p className="card-text">
                      За годы работы мы помогли десяткам проектов успешно запуститься и масштабироваться,
                      а сотни частных инвесторов смогли значительно увеличить свой капитал благодаря нашим стратегиям.
                    </p>
                  </div>
                </div>
            </div>

              <div className="col-md-6">
                <div className="card h-100 bg-dark border border-secondary">
                  <div className="card-body">
                    <h3 className="card-title h4 text-danger mb-3">Наши ценности</h3>
                    <div className="d-flex mb-3">
                      <div className="fs-4 text-danger me-3">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div>
                        <h4 className="h5 text-white">Безопасность</h4>
                        <p className="small text-light">Безопасность активов и данных наших клиентов — наш главный приоритет</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="fs-4 text-danger me-3">
                        <i className="bi bi-lightning-charge"></i>
                      </div>
                      <div>
                        <h4 className="h5 text-white">Инновации</h4>
                        <p className="small text-light">Мы постоянно исследуем новые технологии и подходы для достижения лучших результатов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-dark border border-secondary">
              <div className="card-body text-center">
                <h3 className="card-title h4 text-danger mb-4">Наши достижения</h3>
                <div className="row row-cols-2 row-cols-md-4 g-3">
                  {[
                    { title: "ICO проектов", value: "15+" },
                    { title: "Запущенных DeFi платформ", value: "8+" },
                    { title: "NFT коллекций", value: "20+" },
                    { title: "Клиентов", value: "200+" }
                  ].map((item, idx) => (
                    <div key={idx} className="col">
                      <div className="p-3 bg-secondary rounded">
                        <h4 className="h2 text-danger fw-bold mb-2">{item.value}</h4>
                        <p className="small text-white">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Вкладка Контакты */}
        <div 
          className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} 
          id="contact"
        >
          <div className="container py-5">
            <h2 className={`${montserrat.className} text-center display-5 mb-5`}>Свяжитесь с нами</h2>
            
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <h3 className="card-title h4 text-danger mb-4">Контактная информация</h3>
                    
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-telephone-fill text-danger fs-4 me-3"></i>
                        <div>
                          <h4 className="h6 text-white mb-1">Телефон</h4>
                          <p className="mb-0">+7 (495) 123-45-67</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-envelope-fill text-danger fs-4 me-3"></i>
                        <div>
                          <h4 className="h6 text-white mb-1">Email</h4>
                          <p className="mb-0">info@kconsulting.com</p>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <i className="bi bi-geo-alt-fill text-danger fs-4 me-3"></i>
                        <div>
                          <h4 className="h6 text-white mb-1">Адрес</h4>
                          <p className="mb-0">г. Москва, ул. Примерная, д. 123, офис 456</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="h6 text-white mb-3">Мы в социальных сетях</h4>
                      <div className="d-flex">
                        <a href="#" className="btn btn-outline-danger me-2">
                          <i className="bi bi-telegram"></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger me-2">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="card bg-dark border border-secondary h-100">
                  <div className="card-body">
                    <h3 className="card-title h4 text-danger mb-4">Напишите нам</h3>
                    
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Имя</label>
                        <input 
                          type="text" 
                          className="form-control bg-secondary text-white border-dark" 
                          id="name" 
                          placeholder="Ваше имя"
                        />
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                          type="email" 
                          className="form-control bg-secondary text-white border-dark" 
                          id="email" 
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label">Сообщение</label>
                        <textarea 
                          className="form-control bg-secondary text-white border-dark" 
                          id="message" 
                          rows={5}
                          placeholder="Ваше сообщение..."
                        ></textarea>
                      </div>
                      
                      <button type="submit" className="btn btn-danger w-100">
                        Отправить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Footer */}
      <footer className="bg-black py-4 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-white">&copy; 2024 K.Consulting. Все права защищены.</span>
          </div>
            <div className="col-md-6 text-center text-md-end">
              <Link href="/privacy" className="text-light mx-2">Политика конфиденциальности</Link>
              <Link href="/terms" className="text-light mx-2">Условия использования</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Модальное окно для доната */}
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={handleCloseDonateModal} 
      />
    </div>
  );
} 