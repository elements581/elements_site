export function initVideoModal() {
    const playButton = document.getElementById('play-button');
    const videoModal = document.getElementById('video-modal');
    const closeButton = document.getElementById('close-button');
    const modalVideo = document.getElementById('modal-video');

   
    playButton.addEventListener('click', () => {
        videoModal.style.display = 'flex';
        modalVideo.play(); 
    });

   
    closeButton.addEventListener('click', () => {
        videoModal.style.display = 'none';
        modalVideo.pause(); 
        modalVideo.currentTime = 0; 
    });

    
    videoModal.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause(); 
            modalVideo.currentTime = 0; 
        }
    });
}