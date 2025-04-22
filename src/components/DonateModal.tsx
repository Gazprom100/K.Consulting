'use client';

import { useState } from 'react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [amount, setAmount] = useState('100');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Предустановленные суммы для выбора
  const presetAmounts = ['100', '500', '1000', '5000'];

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      setError('Пожалуйста, введите корректную сумму');
      return;
    }

    try {
      setIsLoading(true);
      
      // Отправка запроса на создание платежа
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при создании платежа');
      }
      
      // Перенаправление на страницу оплаты
      window.location.href = data.paymentUrl;
      
    } catch (error: any) {
      console.error('Ошибка при создании платежа:', error);
      setError(error.message || 'Произошла ошибка. Пожалуйста, попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Затемнение заднего фона */}
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"
        style={{ zIndex: 1050 }}
        onClick={onClose}
      />
      
      {/* Модальное окно */}
      <div 
        className="position-fixed top-50 start-50 translate-middle bg-dark border border-secondary rounded-3 p-4"
        style={{ zIndex: 1055, width: '95%', maxWidth: '450px' }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="m-0 text-white">Отправить донат</h5>
          <button 
            type="button" 
            className="btn-close btn-close-white" 
            onClick={onClose}
            aria-label="Close"
          />
        </div>
        
        {error && (
          <div className="alert alert-danger mb-4" role="alert">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="form-label">Сумма (RUB)</label>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control bg-secondary text-white border-dark" 
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="Введите сумму"
                required
              />
              <span className="input-group-text bg-secondary text-white border-dark">₽</span>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-2">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`btn ${amount === preset ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => setAmount(preset)}
                >
                  {preset} ₽
                </button>
              ))}
            </div>
          </div>
          
          <div className="d-flex justify-content-end">
            <button 
              type="button" 
              className="btn btn-outline-light me-2" 
              onClick={onClose}
              disabled={isLoading}
            >
              Отмена
            </button>
            <button 
              type="submit" 
              className="btn btn-danger"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Обработка...
                </>
              ) : 'Оплатить'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
} 