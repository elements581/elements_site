export function initVideoReview() {
    const playButtons = document.querySelectorAll('.play-button');
    const videoModals = document.querySelectorAll('.video-modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const modalVideos = document.querySelectorAll('.modal-video');

    playButtons.forEach((playButton, index) => {
        playButton.addEventListener('click', () => {
            videoModals[index].style.display = 'flex';  
            modalVideos[index].play(); 
        });
    });

    closeButtons.forEach((closeButton, index) => {
        closeButton.addEventListener('click', () => {
            videoModals[index].style.display = 'none';  
            modalVideos[index].pause(); 
            modalVideos[index].currentTime = 0; 
        });
    });

    videoModals.forEach((videoModal, index) => {
        videoModal.addEventListener('click', (event) => {
            if (event.target === videoModal) {
                videoModal.style.display = 'none'; 
                modalVideos[index].pause(); 
                modalVideos[index].currentTime = 0; 
            }
        });
    });
}