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
  const [retry, setRetry] = useState(false);
  const [debug, setDebug] = useState<any>(null); // Для отображения отладочной информации
  const [showAdvanced, setShowAdvanced] = useState(false); // Для показа дополнительных опций

  // Предустановленные суммы для выбора
  const presetAmounts = ['100', '500', '1000', '5000'];

  // Очистка ошибки при изменении суммы
  const handleAmountChange = (newAmount: string) => {
    if (error) setError('');
    if (debug) setDebug(null);
    setAmount(newAmount.replace(/[^0-9]/g, ''));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setRetry(false);
    setDebug(null);
    
    // Проверка правильности введенной суммы
    const numAmount = parseFloat(amount);
    if (!amount || isNaN(numAmount) || numAmount <= 0) {
      setError('Пожалуйста, введите корректную сумму');
      return;
    }

    try {
      setIsLoading(true);
      console.log('Отправка запроса на создание платежа:', { amount });
      
      // Отправка запроса на создание платежа
      const startTime = Date.now();
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      const endTime = Date.now();
      const requestDuration = endTime - startTime;

      console.log('Получен ответ со статусом:', response.status);
      console.log('Время запроса:', requestDuration, 'мс');
      
      // Получаем текст ответа
      const responseText = await response.text();
      console.log('Текст ответа:', responseText);
      
      // Попытка парсинга JSON
      let data;
      try {
        data = JSON.parse(responseText);
        setDebug({
          status: response.status,
          headers: Object.fromEntries(response.headers.entries()),
          data,
          requestDuration
        });
      } catch (e: any) {
        console.error('Ошибка парсинга JSON:', e);
        setDebug({
          status: response.status,
          headers: Object.fromEntries(response.headers.entries()),
          rawResponse: responseText,
          error: e.message,
          requestDuration
        });
        throw new Error('Получен некорректный ответ от сервера. Пожалуйста, попробуйте позже.');
      }
      
      if (!response.ok) {
        const errorMessage = data.error || 'Неизвестная ошибка';
        let errorDetails = '';
        
        // Извлекаем детали ошибки в человекочитаемом формате
        if (data.details) {
          if (typeof data.details === 'string') {
            errorDetails = data.details;
          } else if (typeof data.details === 'object') {
            errorDetails = JSON.stringify(data.details);
          }
        }
        
        // Проверяем на наличие testResult для отображения подробностей
        if (data.testResult) {
          setDebug({
            ...data,
            status: response.status,
            requestDuration
          });
        }
        
        console.error('Ошибка API:', errorMessage, errorDetails);
        throw new Error(`${errorMessage}${errorDetails ? ': ' + errorDetails : ''}`);
      }
      
      if (!data.paymentUrl) {
        console.error('В ответе отсутствует платежная ссылка:', data);
        throw new Error('Сервер не вернул платежную ссылку. Пожалуйста, попробуйте позже.');
      }
      
      console.log('Успешно получена платежная ссылка:', data.paymentUrl);
      
      // Перенаправление на страницу оплаты
      window.location.href = data.paymentUrl;
      
    } catch (error: any) {
      console.error('Ошибка при создании платежа:', error);
      setError(error.message || 'Произошла ошибка. Пожалуйста, попробуйте снова позже.');
      setRetry(true); // Включаем возможность повторной попытки
    } finally {
      setIsLoading(false);
    }
  };

  // Повторить попытку
  const handleRetry = () => {
    setError('');
    setRetry(false);
    setDebug(null);
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  // Тестовый запрос напрямую к Wata API
  const handleTestDirectApi = async () => {
    try {
      setIsLoading(true);
      setError('');
      setDebug(null);
      
      // Открываем вкладку с документацией API
      window.open('https://wata.pro/api', '_blank');
      
      setDebug({
        message: 'Открыта документация API для проверки настроек',
        timestamp: new Date().toISOString()
      });
      
    } catch (e: any) {
      setError(`Ошибка при тесте API: ${e.message}`);
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
        style={{ zIndex: 1055, width: '95%', maxWidth: '450px', maxHeight: '90vh', overflow: 'auto' }}
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
            <p className="mb-2">{error}</p>
            <div className="d-flex gap-2 mt-2">
              {retry && (
                <button 
                  className="btn btn-sm btn-danger" 
                  onClick={handleRetry}
                  disabled={isLoading}
                >
                  Попробовать снова
                </button>
              )}
              <button 
                className="btn btn-sm btn-outline-danger"
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                {showAdvanced ? 'Скрыть' : 'Подробнее'}
              </button>
            </div>
          </div>
        )}
        
        {/* Расширенные настройки (при наличии ошибки) */}
        {showAdvanced && (
          <div className="mb-4 p-3 border border-secondary rounded">
            <h6 className="text-light mb-3">Диагностика</h6>
            <button 
              className="btn btn-sm btn-outline-light mb-3" 
              onClick={handleTestDirectApi}
              disabled={isLoading}
            >
              Открыть документацию API
            </button>
            
            <div className="small text-light">
              <p className="mb-1">API URL: api.wata.pro</p>
              <p className="mb-1">Текущий сервер: <span className="text-info">{window.location.host}</span></p>
            </div>
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
                onChange={(e) => handleAmountChange(e.target.value)}
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
                  onClick={() => handleAmountChange(preset)}
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
        
        {/* Отладочная информация */}
        {debug && (
          <div className="mt-4 pt-4 border-top border-secondary">
            <details open={!!error}>
              <summary className="text-muted small">Техническая информация</summary>
              <pre className="mt-2 p-2 bg-dark text-light small" style={{ maxHeight: '200px', overflow: 'auto' }}>
                {JSON.stringify(debug, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </div>
    </>
  );
} 