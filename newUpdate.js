// Sidebar Toggle
const checkbox = document.querySelector(".checkbox");
const sideBar = document.querySelector(".side-bar");
const head = document.querySelector(".head");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        sideBar.style.display = "flex";
        head.style.display = "flex";
    } else {
        sideBar.style.display = "none";
        head.style.display = "none";
    }
});

// Message Alert
function openMessage() {
    document.querySelector(".message-alert").style.display = "block";
}

function cancel() {
    document.querySelector(".message-alert").style.display = "none";
}

// Video Controls
document.querySelectorAll(".video").forEach((video) => {
    const controls = video.nextElementSibling;
    const playPauseBtn = controls.querySelector(".play_pause");
    const playPauseIcon = playPauseBtn.querySelector(".play_pause_icon");
    const progressBox = controls.querySelector(".box");
    const continueTime = controls.querySelector(".continue_time");
    const finishTime = controls.querySelector(".finish_time");

    // Set initial duration
    video.addEventListener("loadedmetadata", () => {
        finishTime.textContent = formatTime(video.duration);
    });

    // Play/Pause Toggle
    playPauseBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playPauseIcon.src = "pause-fill.svg"; // Ensure you have this icon
        } else {
            video.pause();
            playPauseIcon.src = "play-fill.svg";
        }
    });

    // Progress Bar and Time Update
    video.addEventListener("timeupdate", () => {
        const progress = (video.currentTime / video.duration) * 100;
        progressBox.style.width = `${progress}%`;
        continueTime.textContent = formatTime(video.currentTime);
    });

    // Auto-play on scroll
    window.addEventListener("scroll", () => {
        const videoRect = video.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (
            videoRect.top < windowHeight * 0.75 &&
            videoRect.bottom > windowHeight * 0.25
        ) {
            video.play();
        } else {
            video.pause();
            playPauseIcon.src = "play-fill.svg";
        }
    });
});

// Format time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}