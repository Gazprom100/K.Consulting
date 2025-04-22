'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function PaymentSuccess() {
  // Можно добавить анимацию или эффекты при загрузке страницы
  useEffect(() => {
    // Возможно отправить аналитику или выполнить другие действия
  }, []);

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card bg-dark border border-success text-white">
            <div className="card-body text-center p-5">
              <div className="mb-4 text-success">
                <i className="bi bi-check-circle-fill display-1"></i>
              </div>
              <h1 className="card-title h2 mb-4">Платеж успешно выполнен!</h1>
              <p className="card-text mb-4">
                Спасибо за ваш донат! Ваша поддержка помогает нам развиваться и совершенствовать наши услуги.
              </p>
              <Link href="/" className="btn btn-success">
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 