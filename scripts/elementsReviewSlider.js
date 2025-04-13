const elementsCards = document.querySelectorAll(".reviews-section__card");
const activeCard = document.querySelector(
  ".active-card-container .reviews-section__card"
);
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const counter = document.getElementById("elements-counter");

let currentElemIndex = 0;
const totalCards = elementsCards.length;

let touchElemStartX = 0;
let touchElemEndX = 0;

function updateElementsCards() {
  elementsCards.forEach((card, index) => {
    card.style.display =
      index >= currentElemIndex && index < currentElemIndex + 3
        ? "block"
        : "none";
    card.classList.remove("is-active");
  });

  if (elementsCards[currentElemIndex]) {
    elementsCards[currentElemIndex].classList.add("is-active");
  }

  const displayIndex = currentElemIndex + 1;
  counter.textContent = `${String(displayIndex).padStart(2, "0")}`;
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

function handleElemTouchStart(event) {
  touchElemStartX = event.touches[0].clientX;
}

function handleElemTouchEnd(event) {
  touchElemEndX = event.changedTouches[0].clientX;
  handleElemSwipe();
}

function handleElemSwipe() {
  const threshold = 50;
  const distance = touchElemEndX - touchElemStartX;

  if (distance > threshold) {
    showPrevElement();
  } else if (distance < -threshold) {
    showNextElement();
  }
}

prevButton.addEventListener("click", showNextElement);
nextButton.addEventListener("click", showPrevElement);

document.addEventListener("touchstart", handleElemTouchStart, {
  passive: true,
});
document.addEventListener("touchend", handleElemTouchEnd, { passive: true });

updateElementsCards();
