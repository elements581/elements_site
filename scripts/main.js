import { applyBlurOnScroll } from "./blurOnScroll.js";
import { initVideoModal } from "./videoBisCard.js";
import { initVideoReview } from "./videoReviews.js"
import { headerDropdownOpen } from "./openHeaderDropdown.js";
import { initFormValidation } from "./validationForm.js";
import { initMobileMenu } from "./mobileBurgerMenu.js";
import initializeReviewsSlider  from './reviewsSlider.js';
import initializeFormToggle from './formToggle.js';




const header = document.querySelector('.header');
applyBlurOnScroll(header);
initVideoModal();
initVideoReview();
headerDropdownOpen();

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initializeReviewsSlider();
    initializeFormToggle();
    initFormValidation();
});
