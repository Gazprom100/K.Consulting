import { NextResponse } from 'next/server';

// Токен хранится на сервере, недоступен клиенту
const WATA_API_TOKEN = process.env.WATA_API_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQdWJsaWNJZCI6IjNhMTk0YmUzLWQ5NjgtZDRkNy0zNTIxLTFlMDZjNGJhYmJlOCIsIlRva2VuVmVyc2lvbiI6IjIiLCJleHAiOjE3NzY4NDk1NTcsImlzcyI6Imh0dHBzOi8vYXBpLndhdGEucHJvIiwiYXVkIjoiaHR0cHM6Ly9hcGkud2F0YS5wcm8vYXBpL2gyaCJ9.zXFcHWbgc1lS6miTjbuZ02_aB81cKd-WS1lsDAuYcEI';
// Базовый URL API из документации
const WATA_API_URL = 'https://api.wata.pro/api/h2h';

interface WataErrorResponse {
  error?: {
    code?: string;
    message?: string;
    details?: string;
    data?: Record<string, any>;
    validationErrors?: Array<{
      message?: string;
      members?: string[];
    }>;
  };
}

interface WataSuccessResponse {
  paymentUrl: string;
  uuid: string;
  // Другие возможные поля в ответе
  status?: string;
  amount?: number;
  currency?: string;
  orderId?: string;
}

export async function POST(request: Request) {
  try {
    console.log('Начало обработки запроса на создание платежа');
    
    // Получаем данные из запроса
    const body = await request.json();
    const { amount } = body;
    
    console.log('Полученные данные:', { amount });
    
    if (!amount || isNaN(parseFloat(amount))) {
      console.error('Некорректная сумма:', amount);
      return NextResponse.json({ error: 'Некорректная сумма' }, { status: 400 });
    }
    
    // Создаем уникальный orderId на основе времени и случайного числа
    const orderId = `donate_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    console.log('Сгенерирован orderId:', orderId);
    
    // Определяем URL для редиректов на основе заголовка хоста
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;
    
    console.log('Используемый baseUrl для редиректов:', baseUrl);
    
    // Формируем данные для запроса согласно документации Wata
    const requestData = {
      amount: parseFloat(amount),
      currency: 'RUB',
      orderId: orderId,
      orderDescription: 'Донат для K.Consulting',
      successUrl: `${baseUrl}/payment-success`,
      failUrl: `${baseUrl}/payment-failed`
    };
    
    console.log('Отправка запроса к Wata API:', {
      url: `${WATA_API_URL}/payment-links`,
      data: requestData
    });
    
    // Запрос к API Wata для создания платежной ссылки
    try {
      const response = await fetch(`${WATA_API_URL}/payment-links`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WATA_API_TOKEN}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
      
      // Получаем ответ от API
      const responseText = await response.text();
      console.log('Статус ответа:', response.status);
      console.log('Заголовки ответа:', Object.fromEntries(response.headers.entries()));
      console.log('Сырой ответ от Wata API:', responseText);
      
      let data: WataSuccessResponse | WataErrorResponse;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('Ошибка парсинга JSON ответа:', e);
        return NextResponse.json(
          { error: 'Ошибка обработки ответа от платежного сервиса' }, 
          { status: 500 }
        );
      }
      
      if (!response.ok) {
        console.error('Ошибка при создании платежной ссылки. Статус:', response.status, 'Данные:', data);
        return NextResponse.json(
          { error: 'Ошибка при создании платежной ссылки', details: data }, 
          { status: response.status }
        );
      }
      
      console.log('Успешный ответ от Wata API:', data);
      
      // Приведение типа для TypeScript
      const successData = data as WataSuccessResponse;
      
      if (!successData.paymentUrl) {
        console.error('В ответе отсутствует paymentUrl:', data);
        return NextResponse.json(
          { error: 'В ответе API отсутствует платежная ссылка' }, 
          { status: 500 }
        );
      }
      
      return NextResponse.json({ 
        paymentUrl: successData.paymentUrl, 
        uuid: successData.uuid,
        message: 'Платежная ссылка успешно создана'
      });
      
    } catch (fetchError: any) {
      console.error('Ошибка при выполнении запроса к Wata API:', fetchError);
      return NextResponse.json(
        { 
          error: 'Ошибка при обращении к платежному сервису', 
          details: fetchError.message || 'Неизвестная ошибка сети'
        }, 
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Общая ошибка при обработке запроса:', error);
    return NextResponse.json(
      { 
        error: 'Внутренняя ошибка сервера', 
        details: error.message || 'Неизвестная ошибка'
      }, 
      { status: 500 }
    );
  }
} 