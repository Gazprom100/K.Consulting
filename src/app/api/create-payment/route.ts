import { NextResponse } from 'next/server';

// Токен хранится на сервере, недоступен клиенту
const WATA_API_TOKEN = process.env.WATA_API_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQdWJsaWNJZCI6IjNhMTk0YmUzLWQ5NjgtZDRkNy0zNTIxLTFlMDZjNGJhYmJlOCIsIlRva2VuVmVyc2lvbiI6IjIiLCJleHAiOjE3NzY4NDk1NTcsImlzcyI6Imh0dHBzOi8vYXBpLndhdGEucHJvIiwiYXVkIjoiaHR0cHM6Ly9hcGkud2F0YS5wcm8vYXBpL2gyaCJ9.zXFcHWbgc1lS6miTjbuZ02_aB81cKd-WS1lsDAuYcEI';
const WATA_API_URL = 'https://api.wata.pro/api/h2h';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount } = body;
    
    if (!amount || isNaN(parseFloat(amount))) {
      return NextResponse.json({ error: 'Некорректная сумма' }, { status: 400 });
    }
    
    // Создаем уникальный orderId на основе времени и случайного числа
    const orderId = `donate_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    
    // Запрос к API Wata для создания платежной ссылки
    const response = await fetch(`${WATA_API_URL}/payment-links`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WATA_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: parseFloat(amount),
        currency: 'RUB',
        orderId: orderId,
        orderDescription: 'Донат для K.Consulting',
        successUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kconsulting.netlify.app'}/payment-success`,
        failUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kconsulting.netlify.app'}/payment-failed`
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error('Ошибка при создании платежной ссылки:', data);
      return NextResponse.json(
        { error: 'Ошибка при создании платежной ссылки' }, 
        { status: response.status }
      );
    }
    
    return NextResponse.json({ paymentUrl: data.paymentUrl, uuid: data.uuid });
  } catch (error) {
    console.error('Ошибка при обработке запроса:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' }, 
      { status: 500 }
    );
  }
} 