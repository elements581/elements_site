export function initFormValidation() {
    document.getElementById('consultation-form').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const form = this;
    
        const formData = new FormData(form);
        const params = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            productSelect: formData.get('product'),
            utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
            urlReffer: document.referrer || '',
            dateApplication: new Date().toLocaleString('uk-UA', {
                hour12: false,
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }) 
        };
    
        // const url = "https://script.google.com/macros/s/AKfycbx9e-NKWpEzUVVu5C3EQ_VtUcuJQtKInYkcZn9o4vOhPOQqrrsYh3DsC5KxWI3ty-at/exec"; 
        
        const telegramBotToken = '7331938875:AAGKlEDpePoMz8UXsNgyV5KxJkheSFq-hDo'; 
        const chatId = '-1002552417580'; 
        const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    
        const telegramBody = {
            chat_id: chatId,
            text: `<b>Юзер заповнив форму:</b>\n <b>Ім'я:</b> <i>${params.firstName}</i>\n <b>Прізвище:</b> <i>${params.lastName}</i>\n <b>Email:</b> ${params.email}\n <b>Телефон:</b> ${params.phone}\n <b>Продукт:</b> <i>${params.productSelect}</i>\n <b>Час:</b> ${params.dateApplication}`,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                          text: "Повна інформація",
                          url: "https://example.com"
                        }
                    ]
                ]
            },
            parse_mode: "HTML"
        }
    
        async function sendRequests() {
            try {
                // const appScriptResponse = await fetch(url, {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(params)
                // });
    
                // if (!appScriptResponse.ok) {
                //     throw new Error('Помилка відправки даних в Apps Script');
                // }
    
                const telegramResponse = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(telegramBody)
                });
    
                if (!telegramResponse.ok) {
                    throw new Error('Помилка при відправці даних в Telegram');
                }
    
                // const results = await Promise.allSettled([appScriptRequest, telegramRequest]);
    
                // results.forEach((result, index) => {
                //     if (result.status === 'rejected') {
                //         console.error(`Помилка під час відправки запиту ${index + 1}:`, result.reason);
                //     } else {
                //         console.log(`Успішне виконання запиту ${index + 1}:`, result.value);
                //     }
                // });
        
                // if (results.every(result => result.status === 'fulfilled')) {
                //     this.reset(); 
                //     window.location.href = '/thankyou-page'; 
                // }
    
                document.getElementById('consultation-form').reset(); 
                window.location.href = 'thankyou-page.html'; 
                
            } catch (error) {
                console.error('Помилка:', error);
                alert('Під час відправки форми сталась помилка. Будь-ласка, спробуйте ще раз.');
            }
        }
    
        sendRequests();
    
    });
}