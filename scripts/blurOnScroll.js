export function applyBlurOnScroll(header) {
    function handleScroll() {
        if (window.scrollY > 10) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
}