'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function PaymentFailed() {
  // Возможные действия при загрузке страницы
  useEffect(() => {
    // Логирование ошибки или другие действия
  }, []);

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card bg-dark border border-danger text-white">
            <div className="card-body text-center p-5">
              <div className="mb-4 text-danger">
                <i className="bi bi-x-circle-fill display-1"></i>
              </div>
              <h1 className="card-title h2 mb-4">Платеж не выполнен</h1>
              <p className="card-text mb-4">
                К сожалению, при обработке платежа произошла ошибка. Пожалуйста, попробуйте еще раз или выберите другой способ оплаты.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link href="/" className="btn btn-outline-light">
                  Вернуться на главную
                </Link>
                <Link href="/#donate" className="btn btn-danger">
                  Попробовать снова
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 