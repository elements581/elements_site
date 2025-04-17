let currentIndex = 1;
const cards = document.querySelectorAll('.bonus-slider-card');
const dots = document.querySelectorAll('.bonus-slider-dot');

function getTransformValue(offset) {
    const windowWidth = window.innerWidth;

    if (windowWidth < 358) {
        return `${offset * 30}%`;
    } else if (windowWidth < 370) {
        return `${offset * 33}%`;
    } else if (windowWidth < 390) {
        return `${offset * 35}%`;
    } else if (windowWidth < 410) {
        return `${offset * 40}%`;
    } else if (windowWidth < 480) {
        return `${offset * 45}%`;
    } else {
        return `${offset * 90}%`;
    }
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

let startX = 0;
let endX = 0;

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


const sliderContainer = document.querySelector('.bonus-slider-container'); 
sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; 
});

sliderContainer.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; 
});

sliderContainer.addEventListener('touchend', () => {
    const threshold = 50; 
    if (startX - endX > threshold) {
        currentIndex = (currentIndex + 1) % cards.length;
        updateBonusCards();
    } else if (endX - startX > threshold) {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateBonusCards();
    }
});

window.addEventListener("resize", updateBonusCards);
