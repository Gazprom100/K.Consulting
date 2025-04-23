// Тестовый скрипт для проверки интеграции с API Wata
import fetch from 'node-fetch';

// JWT токен авторизации из примера
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQdWJsaWNJZCI6IjNhMTk0YmUzLWQ5NjgtZDRkNy0zNTIxLTFlMDZjNGJhYmJlOCIsIlRva2VuVmVyc2lvbiI6IjEiLCJleHAiOjE3NzYyNjEyNDEsImlzcyI6Imh0dHBzOi8vYXBpLndhdGEucHJvIiwiYXVkIjoiaHR0cHM6Ly9hcGkud2F0YS5wcm8vYXBpL2gyaCJ9.ocnPY52cL-a8ui8kBh21dRGp5_va9q-84IRhZNwOfvI';
// URL API из примера
const API_URL = 'https://api.wata.pro/api/h2h/links';

async function testWataApi() {
  try {
    console.log('Тестирование API Wata...');
    
    // Тестовые данные из примера
    const requestData = {
      amount: 100,
      currency: 'RUB',
      description: 'Тестовый платеж',
      successRedirectUrl: 'http://localhost:3000/payment-success',
      failRedirectUrl: 'http://localhost:3000/payment-failed',
      orderId: `TEST-${Date.now()}`
    };
    
    console.log('Отправляемые данные:', JSON.stringify(requestData, null, 2));
    console.log('URL запроса:', API_URL);
    
    // Выполняем запрос
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify(requestData)
    });
    
    console.log('Статус ответа:', response.status);
    
    // Получаем текст ответа
    const responseText = await response.text();
    console.log('Текст ответа:', responseText);
    
    // Пробуем распарсить JSON
    try {
      const responseJson = JSON.parse(responseText);
      console.log('JSON ответа:', JSON.stringify(responseJson, null, 2));
      
      if (responseJson.url) {
        console.log('\nУСПЕХ: Получен URL платежа:', responseJson.url);
      } else {
        console.log('\nОШИБКА: В ответе отсутствует URL платежа');
      }
    } catch (e) {
      console.error('Ошибка парсинга JSON:', e.message);
    }
    
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error);
  }
}

// Запуск теста
testWataApi(); 