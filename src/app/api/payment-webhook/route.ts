import { NextRequest, NextResponse } from 'next/server';

// Получаем токен из переменных окружения
const WATA_API_TOKEN = process.env.WATA_API_TOKEN;

export async function POST(request: NextRequest) {
  try {
    console.log('Получен вебхук от платежной системы');
    
    // Проверяем наличие токена
    if (!WATA_API_TOKEN) {
      console.error('Отсутствует токен API Wata для проверки вебхука');
      return NextResponse.json(
        { error: 'Ошибка конфигурации сервера' },
        { status: 500 }
      );
    }

    // Получаем и проверяем заголовок с подписью
    const signature = request.headers.get('X-Signature');
    
    if (!signature) {
      console.error('Отсутствует заголовок X-Signature');
      return NextResponse.json(
        { error: 'Отсутствует подпись' },
        { status: 401 }
      );
    }
    
    // Парсим тело запроса
    let body;
    try {
      body = await request.json();
      console.log('Данные вебхука:', body);
    } catch (error) {
      console.error('Ошибка при чтении тела запроса:', error);
      return NextResponse.json(
        { error: 'Некорректное тело запроса' },
        { status: 400 }
      );
    }

    // Проверяем наличие необходимых полей
    if (!body.order_id || !body.status) {
      console.error('В вебхуке отсутствуют обязательные поля');
      return NextResponse.json(
        { error: 'Неполные данные' },
        { status: 400 }
      );
    }

    // Определяем и логируем статус платежа
    const { order_id, status, amount } = body;
    
    console.log(`Обновление статуса платежа: ${order_id}, статус: ${status}, сумма: ${amount}`);
    
    // Обрабатываем различные статусы
    switch (status) {
      case 'success':
        // Здесь логика для успешного платежа
        // Например, обновление базы данных, отправка письма и т.д.
        console.log(`Платеж ${order_id} успешно завершен на сумму ${amount}`);
        break;
        
      case 'failed':
        // Логика для неудачного платежа
        console.log(`Платеж ${order_id} завершился неудачей`);
        break;
        
      case 'pending':
        // Логика для ожидающего платежа
        console.log(`Платеж ${order_id} в ожидании`);
        break;
        
      default:
        console.log(`Получен неизвестный статус для платежа ${order_id}: ${status}`);
    }

    // Возвращаем успешный ответ
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Ошибка при обработке вебхука:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера', details: error.message },
      { status: 500 }
    );
  }
} 