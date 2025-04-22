import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// Получаем токен из переменных окружения
const WATA_API_TOKEN = process.env.WATA_API_TOKEN;
const BASE_URL = 'https://pay.wata.pro/api/v1'; // Обновленный URL API

export async function POST(request: NextRequest) {
  try {
    console.log('Получен запрос на создание платежа');
    
    // Проверяем наличие токена
    if (!WATA_API_TOKEN) {
      console.error('Отсутствует токен API Wata');
      return NextResponse.json(
        { error: 'Ошибка конфигурации сервера', details: 'Отсутствует токен API' },
        { status: 500 }
      );
    }

    // Парсим тело запроса
    const body = await request.json();
    const { amount } = body;

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
    const notifyUrl = `${baseUrl}/api/payment-webhook`;
    
    console.log('Подготовка данных для API Wata:', {
      orderId,
      amount: parseFloat(amount),
      successUrl,
      failUrl,
      notifyUrl
    });

    try {
      // Создаем платеж через API Wata
      const paymentResponse = await fetch(`${BASE_URL}/invoice/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Token': WATA_API_TOKEN
        },
        body: JSON.stringify({
          order_id: orderId,
          amount: parseFloat(amount),
          currency: 'RUB',
          description: `Пожертвование ${amount} руб.`,
          success_url: successUrl,
          fail_url: failUrl,
          callback_url: notifyUrl
        })
      });

      // Получаем ответ в виде текста для анализа
      const responseText = await paymentResponse.text();
      console.log('Ответ от API Wata (текст):', responseText);
      
      // Пытаемся распарсить JSON
      let paymentData;
      try {
        paymentData = JSON.parse(responseText);
        console.log('Ответ от API Wata (JSON):', paymentData);
      } catch (e) {
        console.error('Ошибка парсинга JSON ответа:', e);
        return NextResponse.json(
          { 
            error: 'Некорректный ответ от платежного сервиса', 
            details: responseText 
          },
          { status: 502 }
        );
      }

      // Проверяем ответ
      if (!paymentResponse.ok) {
        console.error(`Ошибка API Wata: ${paymentResponse.status}`);
        
        return NextResponse.json(
          { 
            error: 'Ошибка платежного сервиса', 
            details: paymentData || responseText
          },
          { status: paymentResponse.status }
        );
      }
      
      // Проверяем наличие URL для оплаты
      if (!paymentData.url) {
        console.error('В ответе API отсутствует URL платежа:', paymentData);
        return NextResponse.json(
          { 
            error: 'Некорректный ответ платежного сервиса',
            details: paymentData
          },
          { status: 500 }
        );
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
      return NextResponse.json(
        { 
          error: 'Ошибка соединения с платежным сервисом', 
          details: fetchError.message
        },
        { status: 502 }
      );
    }

  } catch (error: any) {
    console.error('Ошибка при создании платежа:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера', details: error.message },
      { status: 500 }
    );
  }
} 