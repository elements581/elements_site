
    const openButtons = document.querySelectorAll('.open-form-button'); 
    const modal = document.getElementById('form-wrapper'); 
    const closeButton = modal.querySelector('.close-form'); 

    const openModal = () => {
        modal.classList.remove('hidden'); 
    };

    const closeModal = () => {
        modal.classList.add('hidden'); 
    };

    openButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
