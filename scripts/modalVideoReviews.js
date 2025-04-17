const playButtons = document.querySelectorAll('.modal-footer__videocard-playbutton'); 
const videoModals = {
    desktop: {
        modal: document.getElementById('video-modal-desktop'),
        video: document.getElementById('modal-video-desktop'),
        closeButton: document.getElementById('close-button-desktop'),
    },
    mobile: {
        modal: document.getElementById('video-modal-mobile'),
        video: document.getElementById('modal-video-mobile'),
        closeButton: document.getElementById('close-button-mobile'),
    }
};

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const isDesktop = button.classList.contains('play-button-desktop');
        const currentModal = isDesktop ? videoModals.desktop : videoModals.mobile;

        currentModal.modal.style.display = 'flex';
        currentModal.video.play();
    });
});

Object.values(videoModals).forEach(modalInfo => {
    modalInfo.closeButton.addEventListener('click', () => {
        modalInfo.modal.style.display = 'none';
        modalInfo.video.pause();
        modalInfo.video.currentTime = 0;
    });
    
    modalInfo.modal.addEventListener('click', (event) => {
        if (event.target === modalInfo.modal) {
            modalInfo.modal.style.display = 'none';
            modalInfo.video.pause();
            modalInfo.video.currentTime = 0;
        }
    });
});