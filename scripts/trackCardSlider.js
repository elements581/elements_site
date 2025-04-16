const cardsContainer = document.querySelector('.track-cards');
const trackCard = document.querySelectorAll('.track-card');
const paginationDots = document.querySelectorAll('.track-dot');
const toggleButtons = document.querySelectorAll('.track-toggle-button');
const trackBacks = document.querySelectorAll('.track-card-back'); 
const trackPagination = document.querySelector('.track-pagination');

let currentCard = 0;

function updateCards() {
    if (window.innerWidth > 480) {
        cardsContainer.style.transform = `translateY(-${currentCard * 25}%)`; 
    } else {
        cardsContainer.style.transform = `translateX(-${currentCard * 100}%)`; 
    }
    
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
        const trackBack = cardInner.querySelector('.track-card-back');

        if (window.innerWidth <= 480) {
            
            if (trackBack.style.display === 'block') {
                trackBack.style.display = 'none'; 
                trackPagination.style.display = 'flex'; 
            } else {
                trackBack.style.display = 'block'; 
                trackPagination.style.display = 'none'; 
            }
        } else {
            cardInner.classList.toggle('flipped');
        }
    });
});

cardsContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (window.innerWidth > 480) {
        if (event.deltaY > 0) {
            if (currentCard < paginationDots.length - 1) {
                currentCard++;
            }
        } else {
            if (currentCard > 0) {
                currentCard--;
            }
        }
    }
    
    updateCards(); 
});

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe(); 
}

function handleSwipe() {
    const threshold = 50; 
    const distance = touchEndX - touchStartX;

    if (distance > threshold) { 
        if (currentCard > 0) {
            currentCard--;
        }
    } else if (distance < -threshold) { 
        if (currentCard < paginationDots.length - 1) {
            currentCard++;
        }
    }
    
    updateCards(); 
}

function checkDevice() {
    const isMobile = window.innerWidth <= 480; 
    if (isMobile) {
        cardsContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
        cardsContainer.addEventListener('touchend', handleTouchEnd, { passive: true });
    } else {
        cardsContainer.removeEventListener('touchstart', handleTouchStart);
        cardsContainer.removeEventListener('touchend', handleTouchEnd);
    }
}


updateCards();
checkDevice();
window.addEventListener('resize', checkDevice);
