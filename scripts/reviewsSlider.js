export default function initializeReviewsSlider() {
  const cards = document.querySelectorAll(".reviews-section__card");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");
  const counter = document.getElementById("counter");

  let currentIndex = 0;
  const totalCards = cards.length;

  let touchStartX = 0;
  let touchEndX = 0;

  function updateCards() {
    const isMobile = window.innerWidth <= 480;
    const visibleCardsCount = isMobile ? 2 : 3;

    cards.forEach((card, index) => {
      card.style.display =
        index >= currentIndex && index < currentIndex + visibleCardsCount
          ? "block"
          : "none";
      card.classList.remove("is-active");
    });

    if (cards[currentIndex]) {
      cards[currentIndex].classList.add("is-active");
    }

    const displayIndex = currentIndex + 1;
    counter.textContent = `${String(displayIndex).padStart(2, "0")}/${String(
      totalCards
    ).padStart(2, "0")}`;
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
      showPrevCard();
    } else if (distance < -threshold) {
      showNextCard();
    }
  }

  prevButton.addEventListener("click", showPrevCard);
  nextButton.addEventListener("click", showNextCard);

  document.addEventListener("touchstart", handleTouchStart, { passive: true });
  document.addEventListener("touchend", handleTouchEnd, { passive: true });

  window.addEventListener("resize", updateCards);
}
