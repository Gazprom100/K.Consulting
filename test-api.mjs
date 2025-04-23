// Simple script to test the Wata API connection
import fetch from 'node-fetch';

// Define the token and base URL
const WATA_API_TOKEN = 'B42C9C29DC0F0BAA0D0FAF4D8BC34FBDFA93C7E35C7CC7F7FE0A2CBF092B2BEB';

async function testApi() {
  try {
    console.log('Testing Wata API connection...');
    
    // Create a unique order ID
    const orderId = `TEST-${Date.now()}`;
    
    // Request data
    const requestData = {
      order_id: orderId,
      amount: 100,
      currency: 'RUB',
      description: 'Test payment',
      success_url: 'http://localhost:3000/payment-success',
      fail_url: 'http://localhost:3000/payment-failed',
      callback_url: 'http://localhost:3000/api/payment-webhook'
    };
    
    console.log('Request data:', JSON.stringify(requestData, null, 2));
    console.log('Using token:', WATA_API_TOKEN.substring(0, 8) + '...');

    // Try different base URLs and endpoints
    const baseUrls = [
      'https://pay.wata.pro',
      'https://api.wata.pro'
    ];
    
    const endpoints = [
      '/api/v1/invoice/create',
      '/api/v1/payment/create',
      '/api/invoice/create',
      '/v1/invoice/create',
      '/invoice/create'
    ];

    for (const baseUrl of baseUrls) {
      for (const endpoint of endpoints) {
        const fullUrl = baseUrl + endpoint;
        console.log(`\nTrying URL: ${fullUrl}`);
        
        // Make the request
        try {
          const response = await fetch(fullUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Token': WATA_API_TOKEN,
              'X-API-KEY': WATA_API_TOKEN,  // Try alternate header name
              'Authorization': `Bearer ${WATA_API_TOKEN}`  // Try bearer auth
            },
            body: JSON.stringify(requestData)
          });
          
          // Log the response status
          console.log('Response status:', response.status);
          
          // Get the response text
          const responseText = await response.text();
          console.log('Response text (truncated):', responseText.substring(0, 200) + (responseText.length > 200 ? '...' : ''));
          
          // Try to parse the JSON
          try {
            if (responseText && responseText.trim().startsWith('{')) {
              const responseJson = JSON.parse(responseText);
              console.log('Response JSON:', JSON.stringify(responseJson, null, 2));
              
              if (responseJson.url) {
                console.log('SUCCESS: Payment URL received:', responseJson.url);
                return; // Exit if successful
              }
            }
          } catch (e) {
            console.error('Error parsing JSON response:', e.message);
          }
        } catch (fetchError) {
          console.error(`Error fetching ${fullUrl}:`, fetchError.message);
        }
      }
    }
    
    console.log('\nAll endpoint attempts failed');
    
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

// Run the test
testApi(); 