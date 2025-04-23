import { NextRequest, NextResponse } from 'next/server';

// Получаем токен из переменных окружения
const WATA_API_TOKEN = process.env.WATA_API_TOKEN;

export async function POST(request: NextRequest) {
  try {
    // Получаем данные из запроса
    const body = await request.json();
    
    // Логируем полученные данные
    console.log('Получен вебхук от платежной системы:', body);
    
    // Проверяем наличие обязательных полей в новом формате API
    if (!body.id || !body.status) {
      console.error('Отсутствуют обязательные поля в вебхуке');
      return NextResponse.json({ error: 'Invalid webhook data' }, { status: 400 });
    }
    
    // Обрабатываем статус платежа
    const { id, status, amount, orderId } = body;
    
    // Здесь можно добавить логику обработки платежа
    // например, обновление статуса в базе данных
    switch (status.toLowerCase()) {
      case 'completed':
      case 'success':
        console.log(`Платеж ${id} (заказ ${orderId}) успешно завершен на сумму ${amount}`);
        // Тут можно обновить статус заказа в базе данных
        break;
      case 'failed':
      case 'fail':
      case 'cancelled':
        console.log(`Платеж ${id} (заказ ${orderId}) не выполнен`);
        // Тут можно обновить статус заказа в базе данных
        break;
      case 'pending':
        console.log(`Платеж ${id} (заказ ${orderId}) в процессе`);
        // Тут можно обновить статус заказа в базе данных
        break;
      default:
        console.log(`Получен неизвестный статус платежа ${id} (заказ ${orderId}): ${status}`);
    }

    // Отвечаем платежной системе об успешном получении вебхука
    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error('Ошибка при обработке вебхука:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
} 