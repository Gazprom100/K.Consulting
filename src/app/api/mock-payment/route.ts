import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get URL parameters
    const searchParams = request.nextUrl.searchParams;
    const orderId = searchParams.get('order_id');
    const amount = searchParams.get('amount');
    const successUrl = searchParams.get('success_url');
    const failUrl = searchParams.get('fail_url');
    
    console.log('Mock payment request received:', {
      orderId,
      amount,
      successUrl,
      failUrl
    });
    
    // Validate parameters
    if (!orderId || !amount || !successUrl || !failUrl) {
      return NextResponse.json(
        { error: 'Missing required parameters' }, 
        { status: 400 }
      );
    }
    
    // Create the HTML for the mock payment page
    const html = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Тестовая оплата</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
          body {
            background-color: #121212;
            color: #e0e0e0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .payment-container {
            max-width: 500px;
            width: 100%;
            padding: 2rem;
            background-color: #1e1e1e;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(80, 210, 255, 0.3);
          }
          .payment-logo {
            text-align: center;
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
            color: #50d2ff;
            text-shadow: 0 0 10px rgba(80, 210, 255, 0.5);
          }
          .payment-info {
            margin-bottom: 2rem;
          }
          .payment-amount {
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1.5rem;
            color: white;
          }
          .payment-actions {
            display: flex;
            gap: 1rem;
          }
          .btn-success {
            background-color: #198754;
            border-color: #198754;
            flex: 1;
          }
          .btn-danger {
            background-color: #dc3545;
            border-color: #dc3545;
            flex: 1;
          }
          .order-id {
            text-align: center;
            font-size: 0.8rem;
            color: #888;
            margin-top: 1rem;
          }
        </style>
      </head>
      <body>
        <div class="payment-container">
          <div class="payment-logo">
            <div>WATA PAY</div>
            <div style="font-size: 0.8rem; color: #888;">Тестовый платежный шлюз</div>
          </div>
          
          <div class="payment-info">
            <div class="payment-amount">${amount} ₽</div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-2">
                <div>Назначение:</div>
                <div>Пожертвование</div>
              </div>
              <div class="d-flex justify-content-between">
                <div>Получатель:</div>
                <div>K.Consulting</div>
              </div>
            </div>
          </div>
          
          <div class="payment-actions">
            <a href="${successUrl}" class="btn btn-success">Оплатить</a>
            <a href="${failUrl}" class="btn btn-danger">Отменить</a>
          </div>
          
          <div class="order-id">
            Заказ №${orderId}
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Return the HTML page
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
    
  } catch (error: any) {
    console.error('Error in mock payment API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
} 