const elementsCards = document.querySelectorAll('.reviews-section__card');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const counter = document.getElementById('elements-counter');

let currentElemIndex = 0;
const totalCards = elementsCards.length;

function updateElementsCards() {
    elementsCards.forEach((card, index) => {
        card.style.display = index >= currentElemIndex && index < currentElemIndex + 3 ? 'block' : 'none';
        card.classList.remove('is-active'); 
    });
    
    if (elementsCards[currentElemIndex]) {
        elementsCards[currentElemIndex].classList.add('is-active');
    }

    const displayIndex = currentElemIndex + 1; 
    counter.textContent = `${String(displayIndex).padStart(2, '0')}`;
}

function showPrevElement() {
    if (currentElemIndex > 0) {
        currentElemIndex--;
        updateElementsCards();
    }
}

function showNextElement() {
    if (currentElemIndex < totalCards - 1) {
        currentElemIndex++;
        updateElementsCards();
    }
}

prevButton.addEventListener('click', showPrevElement);
nextButton.addEventListener('click', showNextElement);

updateElementsCards();
