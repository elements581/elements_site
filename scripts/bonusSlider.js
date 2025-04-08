let currentIndex = 1;
const cards = document.querySelectorAll('.bonus-slider-card');
const dots = document.querySelectorAll('.bonus-slider-dot');

function getTransformValue(offset) {
    
    const windowWidth = window.innerWidth;

    if (windowWidth < 480) {
       
        return `${offset * 25}%`;
    }
    
    return `${offset * 90}%`;
}

function updateBonusCards() {
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.style.transform = 'translateX(0)';
            card.style.zIndex = '2'; 
            card.style.top = '0'; 
            card.classList.add('active'); 
            
        } else if (index === (currentIndex + 1) % cards.length) {
            
            card.style.transform = `translateX(${getTransformValue(-1)})`; 
            card.style.zIndex = '1'; 
            card.style.top = '35px'; 
            card.classList.remove('active'); 
            
        } else {
           
            card.style.transform = `translateX(${getTransformValue(1)})`; 
            card.style.zIndex = '1'; 
            card.style.top = '35px'; 
            card.classList.remove('active'); 
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index; 
        updateBonusCards(); 
    });
});

document.querySelector('.btn-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length; 
    updateBonusCards(); 
});

document.querySelector('.btn-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; 
    updateBonusCards(); 
});


updateBonusCards();
