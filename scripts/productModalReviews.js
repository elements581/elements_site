   const playBtns = document.querySelectorAll('.play-btn');
    const videoModals = document.querySelectorAll('.reviews-video-modals');
    const closeBtns = document.querySelectorAll('.close-btn');
    const modalVideos = document.querySelectorAll('.reviews-modal-video');

    playBtns.forEach((playBtn, index) => {
        playBtn.addEventListener('click', () => {
            videoModals[index].style.display = 'flex';  
            modalVideos[index].play(); 
        });
    });

    closeBtns.forEach((closeBtn, index) => {
        closeBtn.addEventListener('click', () => {
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