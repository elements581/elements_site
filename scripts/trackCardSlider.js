const cardsContainer = document.querySelector('.track-cards');
const trackCard = document.querySelectorAll('.track-card');
const paginationDots = document.querySelectorAll('.track-dot');
const toggleButtons = document.querySelectorAll('.track-toggle-button');

let currentCard = 0;

function updateCards() {
    cardsContainer.style.transform = `translateY(-${currentCard * 25}%)`; 
    paginationDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentCard); 
    });
}

paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentCard = index; 
        updateCards(); 
    });
});

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cardInner = this.closest('.track-card-inner'); 
        cardInner.classList.toggle('flipped'); 
    });
});

cardsContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); 

    if (event.deltaY > 0) {
        if (currentCard < paginationDots.length - 1) {
            currentCard++;
        }
    } else {
        if (currentCard > 0) {
            currentCard--;
        }
    }

    updateCards(); 
});

updateCards();