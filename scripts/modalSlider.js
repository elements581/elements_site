document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".reviews-section__card.product-slider-card"
  );
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");

  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function updateReviews() {
    cards.forEach((card) => {
      card.style.display = "none";
    });

    const visibleCount = window.innerWidth > 768 ? 3 : 2;

    for (let i = 0; i < visibleCount; i++) {
      const cardToShow = currentIndex + i;
      if (cardToShow < cards.length) {
        cards[cardToShow].style.display = "block";
      }
    }
  }

  function showPrevReview() {
    if (currentIndex > 0) {
      currentIndex--;
      updateReviews();
    }
  }

  function showNextReview() {
    const visibleCount = window.innerWidth > 768 ? 3 : 1;
    if (currentIndex + visibleCount < cards.length) {
      currentIndex++;
      updateReviews();
    }
  }

  function handleReviewTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleReviewTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleReviewsSwipe();
  }

  function handleReviewsSwipe() {
    const threshold = 50;
    const distance = touchEndX - touchStartX;

    if (distance > threshold) {
      showPrevReview();
    } else if (distance < -threshold) {
      showNextReview();
    }
  }

  nextButton.addEventListener("click", showNextReview);
  prevButton.addEventListener("click", showPrevReview);

  document.addEventListener("touchstart", handleReviewTouchStart, {
    passive: true,
  });
  document.addEventListener("touchend", handleReviewTouchEnd, {
    passive: true,
  });

  window.addEventListener("resize", updateReviews);
});
