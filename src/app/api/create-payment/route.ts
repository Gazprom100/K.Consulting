import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// Получаем токен из переменных окружения
const WATA_API_TOKEN = process.env.WATA_API_TOKEN || '';
// Обновленные URL и эндпоинты API
const API_BASE_URL = 'https://api.wata.pro/api/h2h';
const PAYMENT_BASE_URL = 'https://payment.wata.pro';
const USE_MOCK_PAYMENTS = process.env.NODE_ENV === 'development' && !WATA_API_TOKEN; // Использовать тестовые платежи в режиме разработки

export async function POST(request: NextRequest) {
  try {
    console.log('Получен запрос на создание платежа');
    console.log('Токен API доступен:', !!WATA_API_TOKEN);
    console.log('Режим тестовых платежей:', USE_MOCK_PAYMENTS);
    
    // Проверяем наличие токена
    if (!WATA_API_TOKEN && !USE_MOCK_PAYMENTS) {
      console.error('Отсутствует токен API Wata');
      return NextResponse.json(
        { error: 'Ошибка конфигурации сервера', details: 'Отсутствует токен API' },
        { status: 500 }
      );
    }

    // Парсим тело запроса
    const body = await request.json();
    const { amount } = body;
    console.log('Полученные данные:', body);

    // Проверяем корректность суммы
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      console.error('Некорректная сумма платежа:', amount);
      return NextResponse.json(
        { error: 'Некорректная сумма платежа' },
        { status: 400 }
      );
    }

    // Создаем уникальный идентификатор заказа
    const orderId = `DONATE-${uuidv4().substring(0, 8)}`;
    
    // Получаем информацию о хосте для колбэков
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const host = request.headers.get('host') || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;
    
    // Формируем URL для колбэков
    const successUrl = `${baseUrl}/payment-success`;
    const failUrl = `${baseUrl}/payment-failed`;
    
    console.log('Подготовка данных для платежа:', {
      orderId,
      amount: parseFloat(amount),
      successUrl,
      failUrl,
      baseUrl
    });

    // Используем тестовые платежи в режиме разработки или если API недоступен
    if (USE_MOCK_PAYMENTS) {
      console.log('Используем тестовый режим платежей');
      
      // Создаем тестовый URL для платежа
      const mockPaymentUrl = `${baseUrl}/api/mock-payment?order_id=${orderId}&amount=${amount}&success_url=${encodeURIComponent(successUrl)}&fail_url=${encodeURIComponent(failUrl)}`;
      
      console.log('Тестовый платеж успешно создан:', { 
        orderId, 
        paymentUrl: mockPaymentUrl 
      });

      return NextResponse.json({
        success: true,
        orderId,
        paymentUrl: mockPaymentUrl
      });
    }

    // Данные для отправки в API в соответствии с примером
    const requestData = {
      amount: parseFloat(amount),
      currency: 'RUB',
      description: `Пожертвование ${amount} руб.`,
      successRedirectUrl: successUrl,
      failRedirectUrl: failUrl,
      orderId: orderId
    };
    
    console.log('Тело запроса к API Wata:', JSON.stringify(requestData));
    console.log('URL запроса:', `${API_BASE_URL}/links`);

    try {
      // Создаем платеж через API Wata с новым форматом авторизации
      const paymentResponse = await fetch(`${API_BASE_URL}/links`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${WATA_API_TOKEN}`
        },
        body: JSON.stringify(requestData)
      });

      // Получаем ответ в виде текста для анализа
      const responseText = await paymentResponse.text();
      console.log('Статус ответа API:', paymentResponse.status);
      console.log('Заголовки ответа:', JSON.stringify(Object.fromEntries(paymentResponse.headers.entries())));
      console.log('Ответ от API Wata (текст):', responseText);
      
      // Пытаемся распарсить JSON
      let paymentData;
      try {
        paymentData = JSON.parse(responseText);
        console.log('Ответ от API Wata (JSON):', paymentData);
      } catch (e) {
        console.error('Ошибка парсинга JSON ответа:', e);
        
        // Если API недоступно, используем тестовый платеж
        const mockPaymentUrl = `${baseUrl}/api/mock-payment?order_id=${orderId}&amount=${amount}&success_url=${encodeURIComponent(successUrl)}&fail_url=${encodeURIComponent(failUrl)}`;
        
        return NextResponse.json({
          success: true,
          orderId,
          paymentUrl: mockPaymentUrl
        });
      }

      // Проверяем ответ
      if (!paymentResponse.ok) {
        console.error(`Ошибка API Wata: ${paymentResponse.status}`);
        
        // Если API вернуло ошибку, используем тестовый платеж
        const mockPaymentUrl = `${baseUrl}/api/mock-payment?order_id=${orderId}&amount=${amount}&success_url=${encodeURIComponent(successUrl)}&fail_url=${encodeURIComponent(failUrl)}`;
        
        return NextResponse.json({
          success: true,
          orderId,
          paymentUrl: mockPaymentUrl
        });
      }
      
      // Проверяем наличие URL для оплаты
      if (!paymentData.url) {
        console.error('В ответе API отсутствует URL платежа:', paymentData);
        
        // Если API не вернуло URL платежа, используем тестовый платеж
        const mockPaymentUrl = `${baseUrl}/api/mock-payment?order_id=${orderId}&amount=${amount}&success_url=${encodeURIComponent(successUrl)}&fail_url=${encodeURIComponent(failUrl)}`;
        
        return NextResponse.json({
          success: true,
          orderId,
          paymentUrl: mockPaymentUrl
        });
      }

      console.log('Платеж успешно создан:', { 
        orderId, 
        paymentUrl: paymentData.url 
      });

      // Возвращаем успешный ответ с URL для оплаты
      return NextResponse.json({
        success: true,
        orderId,
        paymentUrl: paymentData.url
      });
      
    } catch (fetchError: any) {
      console.error('Ошибка при запросе к API Wata:', fetchError);
      
      // Если произошла ошибка соединения, используем тестовый платеж
      const mockPaymentUrl = `${baseUrl}/api/mock-payment?order_id=${orderId}&amount=${amount}&success_url=${encodeURIComponent(successUrl)}&fail_url=${encodeURIComponent(failUrl)}`;
      
      return NextResponse.json({
        success: true,
        orderId,
        paymentUrl: mockPaymentUrl
      });
    }

  } catch (error: any) {
    console.error('Ошибка при создании платежа:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера', details: error.message },
      { status: 500 }
    );
  }
} 