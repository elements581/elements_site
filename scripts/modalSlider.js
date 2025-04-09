document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.reviews-section__card.product-slider-card');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    let currentIndex = 0;

    function updateCards() {
        
        cards.forEach((card) => {
            card.style.display = 'none';
        });

        const visibleCount = window.innerWidth > 768 ? 3 : 2; 

    
        for (let i = 0; i < visibleCount; i++) {
            const cardToShow = currentIndex + i;
            if (cardToShow < cards.length) { 
                cards[cardToShow].style.display = 'block';
            }
        }
    }

    function showPrevCard() {
        if (currentIndex > 0) {
            currentIndex--; 
            updateCards(); 
        }
    }

    function showNextCard() {
        const visibleCount = window.innerWidth > 768 ? 3 : 1; 
        if (currentIndex + visibleCount < cards.length) { 
            currentIndex++; 
            updateCards();  
        }
    }

    prevButton.addEventListener('click', showPrevCard);
    nextButton.addEventListener('click', showNextCard);

    
    window.addEventListener('resize', updateCards);
});
    prevButton.addEventListener('click', showPrevCard);
    nextButton.addEventListener('click', showNextCard);

    
    updateCards(); 
});
