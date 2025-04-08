export default function initializeReviewsSlider() {
    const cards = document.querySelectorAll('.reviews-section__card');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const counter = document.getElementById('counter');

    let currentIndex = 0;
    const totalCards = cards.length;

    function updateCards() {
        
        const isMobile = window.innerWidth <= 480; 
        const visibleCardsCount = isMobile ? 1 : 3; 
    
        cards.forEach((card, index) => {
           
            card.style.display = index >= currentIndex && index < currentIndex + visibleCardsCount ? 'block' : 'none';
            card.classList.remove('is-active'); 
        });
        
        if (cards[currentIndex]) {
            cards[currentIndex].classList.add('is-active');
        }

     
        const displayIndex = currentIndex + 1; 
        counter.textContent = `${String(displayIndex).padStart(2, '0')}/${String(totalCards).padStart(2, '0')}`;
    }

    function showPrevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCards();
        }
    }

    function showNextCard() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCards();
        }
    }

    prevButton.addEventListener('click', showPrevCard);
    nextButton.addEventListener('click', showNextCard);

    window.addEventListener('resize', updateCards);
}
