document.getElementById('consultation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
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

    const url = "https://script.google.com/macros/s/AKfycbwUoGEauHTwnSzZJBMi_xqYjNr-6pPI5PnVPtJs2Fbkj_4Lw8qlYd1pCguuEAIU1txy/exec"; 

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('myForm').reset(); 
        window.location.href = 'thankyou-page.html';
    })
    .catch(error => {
        console.error('Помилка:', error);
        alert('Під час відправки форми сталась помилка. Будь-ласка, спробуйте ще раз.');
    });
});