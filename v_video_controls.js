// const video = document.getElementById('video');
//         const playPauseBtn = document.getElementById('play_pause');
//         const backwardBtn = document.getElementById('back');
//         const forwardBtn = document.getElementById('forward');
//         const replayBtn = document.getElementById('replay');
//         const captionBtn = document.getElementById('caption');
//         // const pipBtn = document.getElementById('screen');
//         const fullscreenBtn = document.getElementById('max_screen');
//         const downloadBtn = document.getElementById('download');
//         const speedBtn = document.getElementById('speed');
//         const volumeBtn = document.getElementById('volume');
//         const progressBar = document.getElementById('box');
//         const currentTimeDisplay = document.getElementById('continue_time');
//         const durationDisplay = document.getElementById('finish_time');

//         let captionsEnabled = false;
//         let isPictureInPicture = false;

//         // Play/Pause Button Functionality
//         playPauseBtn.addEventListener('click', () => {
//             if (video.paused) {
//                 video.play();
//                 if (video.paused) {
//                     document.getElementById('play_pause_icon').src = 'play-fill.svg';
//                 }
//                 else {
//                     document.getElementById('play_pause_icon').src = 'pause.svg';
//                 }
//             } else {
//                 video.pause();
//                 if (video.paused) {
//                     document.getElementById('play_pause_icon').src = 'play-fill.svg';
//                 }
//                 else {
//                     document.getElementById('play_pause_icon').src = 'pause.svg';
//                 }
//             }
//         });

//         volumeBtn.addEventListener('click', () => {
//             if (video.muted) {
//                 video.muted = false;
//                 if (video.muted) {
//                     document.getElementById('volume_icon').src = 'volume-mute-fill.svg';
//                 }
//                 else {
//                     document.getElementById('volume_icon').src = 'volume-up-fill.svg';
//                 }
//             } else {
//                 video.muted = true;
//                 if (video.muted) {
//                     document.getElementById('volume_icon').src = 'volume-mute-fill.svg';
//                 }
//                 else {
//                     document.getElementById('volume_icon').src = 'volume-up-fill.svg';
//                 }
//             }
//         });

//         // Backward 10 seconds
//         backwardBtn.addEventListener('click', () => {
//             video.currentTime -= 10;
//         });

//         // Forward 10 seconds
//         forwardBtn.addEventListener('click', () => {
//             video.currentTime += 10;
//         });

//         // Replay (reset video)
//         replayBtn.addEventListener('click', () => {
//             video.currentTime = 0;
//             video.play();
//             if (video.paused) {
//                 document.getElementById('play_pause_icon').src = 'play-fill.svg';
//                 if (video.muted) {
//                     document.getElementById('volume_icon').src = 'volume-up-fill.svg';
//                 }
//                 else {
//                     document.getElementById('volume_icon').src = 'volume-mute-fill.svg';
//                 }
//             }
//             else {
//                 document.getElementById('play_pause_icon').src = 'pause.svg';
//                 if (video.muted) {
//                     document.getElementById('volume_icon').src = 'volume-up-fill.svg';
//                 }
//                 else {
//                     document.getElementById('volume_icon').src = 'volume-mute-fill.svg';
//                 }
//             }

//             if (video.muted) {
//                 document.getElementById('volume_icon').src = 'volume-mute-fill.svg';
//             }
//             else {
//                 document.getElementById('volume_icon').src = 'volume-up-fill.svg';
//             }
//         });

//         // Toggle Captions
//         captionBtn.addEventListener('click', () => {
//             captionsEnabled = !captionsEnabled;
//             if (captionsEnabled) {
//                 video.textTracks[0].mode = 'showing'; // Enable captions if available
//             } else {
//                 video.textTracks[0].mode = 'hidden'; // Disable captions
//             }
//             captionBtn.textContent = captionsEnabled ? 'Hide Captions' : 'Show Captions';
//         });

//         // Picture in Picture
//         // pipBtn.addEventListener('click', async () => {
//         //     if (document.pictureInPictureElement) {
//         //         document.exitPictureInPicture(); 
//         //     } else {
//         //         try {
//         //             await video.requestPictureInPicture();
//         //         } catch (error) {
//         //             console.error("Error entering Picture-in-Picture", error);
//         //         }
//         //     }
//         // });

//         // Fullscreen
//         fullscreenBtn.addEventListener('click', () => {
//             if (video.requestFullscreen) {
//                 video.requestFullscreen();
//             } else if (video.mozRequestFullScreen) { // Firefox
//                 video.mozRequestFullScreen();
//             } else if (video.webkitRequestFullscreen) { // Chrome and Safari
//                 video.webkitRequestFullscreen();
//             }
//         });

//         // Download Button
//         downloadBtn.addEventListener('click', () => {
//             const link = document.createElement('a');
//             link.href = video.querySelector('video').src;
//             link.download = 'Elon_Musk_delivers_speech_after_Trump_Inauguration(720p).mp4'; 
//             link.click();
//         });

//         // Speed Control
//         speedBtn.addEventListener('click', () => {
//             const currentSpeed = video.playbackRate;
//             video.playbackRate = currentSpeed === 1 ? 1.5 : currentSpeed === 1.5 ? 2 : 1;
//             // speedBtn.textContent = `Speed: ${video.playbackRate}x`;

//             if(video.playbackRate == 1){
//                 document.getElementById('speed_box').textContent = '1x';
//             }
//             else if (video.playbackRate == 1.5){
//                 document.getElementById('speed_box').textContent = '1.5x';
//             }
//             else if (video.playbackRate == 2){
//                 document.getElementById('speed_box').textContent = '2x';
//             }
//         });

//         // Volume Control
//         // volumeBtn.addEventListener('click', () => {
//         //     video.muted = !video.muted;
//         //     volumeBtn.textContent = video.muted ? 'Unmute' : 'Mute';
//         // });

//         // Update Time and Progress Bar
//         video.addEventListener('timeupdate', () => {
//             const currentTime = video.currentTime;
//             const duration = video.duration;
//             const progress = (currentTime / duration) * 100;
//             progressBar.style.width = `${progress}%`;

//             const currentMinutes = Math.floor(currentTime / 60);
//             const currentSeconds = Math.floor(currentTime % 60);
//             const durationMinutes = Math.floor(duration / 60);
//             const durationSeconds = Math.floor(duration % 60);

//             currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
//             durationDisplay.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
//         });

//         // const controls = document.getElementById('video_control');

//         // video.addEventListener('click', () => {
//         //     controls.classList.toggle('visible');
//         // })

//         // video.addEventListener('click', () => {
//         //     if (controls.style.visibility === 'hidden') {
//         //         controls.style.visibility = 'visible';
//         //     }
//         //     else {
//         //         controls.style.visibility = 'hidden'
//         //     }
            
//         // })

//         const controls = document.getElementById('video_control');

//         video.addEventListener('click', () => {
//             controls.classList.toggle('visible');
            
//             setTimeout(() => {
//                 controls.classList.remove('visible');
//             }, 7000);
//         })

//         video.addEventListener('click', () => {
//             if (controls.style.visibility === 'hidden') {
//                 controls.style.visibility = 'visible';
//             }
//             else {
//                 controls.style.visibility = 'hidden'
//             }
            
//         })



// video.addEventListener('dblclick', (event) => {
//     const rect = video.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY= rect.height / 2;
//     const centerAreaSize = 200;

//     if (x >= centerX - centerAreaSize / 2 && x <= centerX + centerAreaSize / 2 && y >= centerY - centerAreaSize / 2 && y <= centerY + centerAreaSize / 2 ) {
//         video.paused ? video.play() : video.pause();
//         if (video.paused) {
//             document.getElementById('play_pause_icon').src = 'play-fill.svg';
//         }
//         else {
//             document.getElementById('play_pause_icon').src = 'pause.svg';
//         }
//     }
//     else if (x < rect.width / 2) {
//         video.currentTime -= 10;
//         if (video.paused) {
//             document.getElementById('play_pause_icon').src = 'play-fill.svg';
//         }
//         else {
//             document.getElementById('play_pause_icon').src = 'pause.svg';
//         }
//     }
//     else {
//         video.currentTime += 10;
//         if (video.paused) {
//             document.getElementById('play_pause_icon').src = 'play-fill.svg';
//         }
//         else {
//             document.getElementById('play_pause_icon').src = 'pause.svg';
//         }
//     }
// });

// // const controls = document.getElementById('controls');

// // video.addEventListener('click', () => {
// //     if (controls.style.display === 'block') {
// //         controls.style.display = 'none';
// //     }
// //     else {
// //         controls.style.display = 'block';
// //     }
// // })


// video_controls.js
document.querySelectorAll('video').forEach(video => {
    const controls = video.closest('.source').querySelector('.video_control');
    const playPauseBtn = controls.querySelector('.play_pause');
    const backwardBtn = controls.querySelector('.back');
    const forwardBtn = controls.querySelector('.forward');
    const replayBtn = controls.querySelector('.replay');
    const volumeBtn = controls.querySelector('.volume');
    const fullscreenBtn = controls.querySelector('.max_screen');
    const settingsBtn = controls.querySelector('.settings');
    const settingsMenu = controls.querySelector('.settings-menu');
    const progressBar = controls.querySelector('.box');
    const currentTimeDisplay = controls.querySelector('.continue_time');
    const durationDisplay = controls.querySelector('.finish_time');

    // Toggle settings menu
    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsMenu.style.display = settingsMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.querySelector('img').src = 'pause.svg';
        } else {
            video.pause();
            playPauseBtn.querySelector('img').src = 'play-fill.svg';
        }
    });

    // Volume
    volumeBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        volumeBtn.querySelector('img').src = video.muted ? 'volume-mute-fill.svg' : 'volume-up-fill.svg';
    });

    // Skip backward/forward
    backwardBtn.addEventListener('click', () => video.currentTime -= 10);
    forwardBtn.addEventListener('click', () => video.currentTime += 10);

    // Replay
    replayBtn.addEventListener('click', () => {
        video.currentTime = 0;
        video.play();
        playPauseBtn.querySelector('img').src = 'pause.svg';
    });

    // Fullscreen
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            video.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Update progress bar
    video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
        
        currentTimeDisplay.textContent = formatTime(video.currentTime);
        if (video.duration) {
            durationDisplay.textContent = formatTime(video.duration);
        }
    });

    // Click on video to play/pause
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.querySelector('img').src = 'pause.svg';
        } else {
            video.pause();
            playPauseBtn.querySelector('img').src = 'play-fill.svg';
        }
    });

    // Hide controls when not interacting
    let hideControlsTimeout;
    const resetHideTimeout = () => {
        clearTimeout(hideControlsTimeout);
        controls.classList.add('visible');
        hideControlsTimeout = setTimeout(() => {
            controls.classList.remove('visible');
            settingsMenu.style.display = 'none';
        }, 3000);
    };

    video.addEventListener('mousemove', resetHideTimeout);
    resetHideTimeout();
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Change playback speed
function changeSpeed(btn) {
    const video = btn.closest('.source').querySelector('video');
    const speed = parseFloat(btn.dataset.speed);
    video.playbackRate = speed;
    btn.closest('.settings-menu').style.display = 'none';
}

// Download video
function downloadVideo(btn) {
    const video = btn.closest('.source').querySelector('video');
    const source = video.querySelector('source') || video;
    const link = document.createElement('a');
    link.href = source.src;
    link.download = 'video.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    btn.closest('.settings-menu').style.display = 'none';
}