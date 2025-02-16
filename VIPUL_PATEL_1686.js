const videos = document.querySelectorAll('video');

window.addEventListener('scroll', () => {
    videos.forEach((video) => {
        const videoRect = video.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (videoRect.top < windowHeight * 0.75 && videoRect.bottom > windowHeight * 0.25) {
            video.play();
        } else {
            video.pause();
        }
    })
});