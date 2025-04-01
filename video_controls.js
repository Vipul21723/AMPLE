// // document.addEventListener("DOMContentLoaded", () => {
// //     const videoPlayers = document.querySelectorAll('.video-player');

// //     videoPlayers.forEach(player => {
// //         const video = player.querySelector('.video');
// //         const playPause = player.querySelector('.play-pause');
// //         const progressContainer = player.querySelector('.progress-container');
// //         const progressBar = player.querySelector('.progress-bar');
// //         const time = player.querySelector('.time');
// //         const mute = player.querySelector('.mute');
// //         const fullscreen = player.querySelector('.fullscreen');
// //         const controls = player.querySelector('.controls');
// //         const fullscreenIcon = fullscreen.querySelector('img');

// //         let lastTap = 0;

// //         // Format Time
// //         function formatTime(seconds) {
// //             if (isNaN(seconds)) return '0:00';
// //             const min = Math.floor(seconds / 60);
// //             const sec = Math.floor(seconds % 60);
// //             return `${min}:${sec < 10 ? '0' + sec : sec}`;
// //         }

// //         // Update Play/Pause Button
// //         function updatePlayPauseButton() {
// //             playPause.querySelector('img').src = video.paused ? 'play-fill.svg' : 'pause.svg';
// //         }

// //         // Update Fullscreen State
// //         function updateFullscreenState() {
// //             fullscreenIcon.src = document.fullscreenElement ? 'fullscreen-exit.svg' : 'fullscreen.svg';
// //             player.classList.toggle('fullscreen-active', !!document.fullscreenElement);
// //         }

// //         // Tap to show/hide controls and double-tap actions
// //         video.addEventListener('click', (e) => {
// //             const now = new Date().getTime();
// //             const timeSinceLastTap = now - lastTap;

// //             if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
// //                 const rect = video.getBoundingClientRect();
// //                 const clickX = e.clientX - rect.left;
// //                 const third = rect.width / 3;

// //                 if (clickX < third) {
// //                     video.currentTime = Math.max(0, video.currentTime - 10);
// //                 } else if (clickX > 2 * third) {
// //                     video.currentTime = Math.min(video.duration, video.currentTime + 10);
// //                 } else {
// //                     video.paused ? video.play() : video.pause();
// //                     updatePlayPauseButton();
// //                 }
// //             } else {
// //                 controls.classList.toggle('visible');
// //             }
// //             lastTap = now;
// //         });

// //         // Play/Pause Button
// //         playPause.addEventListener('click', (e) => {
// //             e.stopPropagation();
// //             video.paused ? video.play() : video.pause();
// //             updatePlayPauseButton();
// //         });

// //         // Progress Update
// //         video.addEventListener('timeupdate', () => {
// //             const percent = (video.currentTime / video.duration) * 100;
// //             progressBar.style.width = `${percent}%`;
// //             time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
// //         });

// //         // Seek (Mouse)
// //         progressContainer.addEventListener('mousedown', (e) => {
// //             const seek = (event) => {
// //                 const rect = progressContainer.getBoundingClientRect();
// //                 const pos = (event.clientX - rect.left) / rect.width;
// //                 video.currentTime = pos * video.duration;
// //             };
// //             seek(e);
// //             document.addEventListener('mousemove', seek);
// //             document.addEventListener('mouseup', () => document.removeEventListener('mousemove', seek), { once: true });
// //         });

// //         // Seek (Touch)
// //         progressContainer.addEventListener('touchstart', (e) => {
// //             e.preventDefault();
// //             const seek = (event) => {
// //                 const rect = progressContainer.getBoundingClientRect();
// //                 const pos = (event.touches[0].clientX - rect.left) / rect.width;
// //                 video.currentTime = pos * video.duration;
// //             };
// //             seek(e);
// //             progressContainer.addEventListener('touchmove', seek);
// //             progressContainer.addEventListener('touchend', () => progressContainer.removeEventListener('touchmove', seek), { once: true });
// //         });

// //         // Mute Button
// //         mute.addEventListener('click', (e) => {
// //             e.stopPropagation();
// //             video.muted = !video.muted;
// //             mute.querySelector('img').src = video.muted ? 'volume-mute-fill.svg' : 'volume-up-fill.svg';
// //         });

// //         // Fullscreen Button
// //         fullscreen.addEventListener('click', (e) => {
// //             e.stopPropagation();
// //             if (!document.fullscreenElement) {
// //                 if (player.requestFullscreen) {
// //                     player.requestFullscreen();
// //                 } else if (player.webkitRequestFullscreen) {
// //                     player.webkitRequestFullscreen();
// //                 } else if (player.msRequestFullscreen) {
// //                     player.msRequestFullscreen();
// //                 }
// //             } else {
// //                 if (document.exitFullscreen) {
// //                     document.exitFullscreen();
// //                 } else if (document.webkitExitFullscreen) {
// //                     document.webkitExitFullscreen();
// //                 } else if (document.msExitFullscreen) {
// //                     document.msExitFullscreen();
// //                 }
// //             }
// //         });

// //         // Sync fullscreen state on change
// //         document.addEventListener('fullscreenchange', updateFullscreenState);

// //         // Center video playback (scroll-based)
// //         document.addEventListener('scroll', () => {
// //             const rect = player.getBoundingClientRect();
// //             const viewportCenter = window.innerHeight / 2;

// //             if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
// //                 if (video.paused) {
// //                     video.play().then(() => {
// //                         updatePlayPauseButton(); // Sync button after play
// //                     }).catch(err => {
// //                         console.log("Playback error:", err);
// //                     });
// //                 }
// //             } else {
// //                 if (!video.paused) {
// //                     video.pause();
// //                     updatePlayPauseButton(); // Sync button after pause
// //                 }
// //             }
// //         });

// //         // Initial button state sync
// //         video.addEventListener('play', updatePlayPauseButton);
// //         video.addEventListener('pause', updatePlayPauseButton);
// //     });
// // });




// document.addEventListener("DOMContentLoaded", () => {
//     const videoPlayers = document.querySelectorAll('.video-player');

//     videoPlayers.forEach(player => {
//         const video = player.querySelector('.video');
//         const playPause = player.querySelector('.play-pause');
//         const progressContainer = player.querySelector('.progress-container');
//         const progressBar = player.querySelector('.progress-bar');
//         const time = player.querySelector('.time');
//         const mute = player.querySelector('.mute');
//         const fullscreen = player.querySelector('.fullscreen');
//         const controls = player.querySelector('.controls');
//         const fullscreenIcon = fullscreen.querySelector('img');

//         let lastTap = 0;
//         let touchStartY = 0;
//         let isSwiping = false;

//         // Format Time
//         function formatTime(seconds) {
//             if (isNaN(seconds)) return '0:00';
//             const min = Math.floor(seconds / 60);
//             const sec = Math.floor(seconds % 60);
//             return `${min}:${sec < 10 ? '0' + sec : sec}`;
//         }

//         // Update Play/Pause Button
//         function updatePlayPauseButton() {
//             playPause.querySelector('img').src = video.paused ? 'play-fill.svg' : 'pause.svg';
//         }

//         // Update Fullscreen State
//         function updateFullscreenState() {
//             fullscreenIcon.src = document.fullscreenElement ? 'fullscreen-exit.svg' : 'fullscreen.svg';
//             player.classList.toggle('fullscreen-active', !!document.fullscreenElement);
//             if (!document.fullscreenElement) {
//                 player.style.cssText = ''; // Reset any inline styles
//             }
//         }

//         // Exit fullscreen on swipe down
//         function exitFullscreen() {
//             if (document.fullscreenElement) {
//                 if (document.exitFullscreen) {
//                     document.exitFullscreen();
//                 } else if (document.webkitExitFullscreen) {
//                     document.webkitExitFullscreen();
//                 } else if (document.msExitFullscreen) {
//                     document.msExitFullscreen();
//                 }
//                 video.play().catch(err => console.log("Playback error after exiting fullscreen:", err));
//             }
//         }

//         // Tap to show/hide controls and double-tap actions
//         video.addEventListener('click', (e) => {
//             const now = new Date().getTime();
//             const timeSinceLastTap = now - lastTap;

//             if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
//                 const rect = video.getBoundingClientRect();
//                 const clickX = e.clientX - rect.left;
//                 const third = rect.width / 3;

//                 if (clickX < third) {
//                     video.currentTime = Math.max(0, video.currentTime - 10);
//                 } else if (clickX > 2 * third) {
//                     video.currentTime = Math.min(video.duration, video.currentTime + 10);
//                 } else {
//                     video.paused ? video.play() : video.pause();
//                     updatePlayPauseButton();
//                 }
//             } else {
//                 controls.classList.toggle('visible');
//             }
//             lastTap = now;
//         });

//         // Play/Pause Button
//         playPause.addEventListener('click', (e) => {
//             e.stopPropagation();
//             video.paused ? video.play() : video.pause();
//             updatePlayPauseButton();
//         });

//         // Progress Update
//         video.addEventListener('timeupdate', () => {
//             const percent = (video.currentTime / video.duration) * 100;
//             progressBar.style.width = `${percent}%`;
//             time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
//         });

//         // Seek (Mouse)
//         progressContainer.addEventListener('mousedown', (e) => {
//             const seek = (event) => {
//                 const rect = progressContainer.getBoundingClientRect();
//                 const pos = (event.clientX - rect.left) / rect.width;
//                 video.currentTime = pos * video.duration;
//             };
//             seek(e);
//             document.addEventListener('mousemove', seek);
//             document.addEventListener('mouseup', () => document.removeEventListener('mousemove', seek), { once: true });
//         });

//         // Seek (Touch)
//         progressContainer.addEventListener('touchstart', (e) => {
//             e.preventDefault();
//             const seek = (event) => {
//                 const rect = progressContainer.getBoundingClientRect();
//                 const pos = (event.touches[0].clientX - rect.left) / rect.width;
//                 video.currentTime = pos * video.duration;
//             };
//             seek(e);
//             progressContainer.addEventListener('touchmove', seek);
//             progressContainer.addEventListener('touchend', () => progressContainer.removeEventListener('touchmove', seek), { once: true });
//         });

//         // Mute Button
//         mute.addEventListener('click', (e) => {
//             e.stopPropagation();
//             video.muted = !video.muted;
//             mute.querySelector('img').src = video.muted ? 'volume-mute-fill.svg' : 'volume-up-fill.svg';
//         });

//         // Fullscreen Button
//         fullscreen.addEventListener('click', (e) => {
//             e.stopPropagation();
//             if (!document.fullscreenElement) {
//                 if (player.requestFullscreen) {
//                     player.requestFullscreen();
//                 } else if (player.webkitRequestFullscreen) {
//                     player.webkitRequestFullscreen();
//                 } else if (player.msRequestFullscreen) {
//                     player.msRequestFullscreen();
//                 }
//             } else {
//                 exitFullscreen();
//             }
//         });

//         // Swipe detection for fullscreen exit (top to bottom)
//         player.addEventListener('touchstart', (e) => {
//             if (document.fullscreenElement) {
//                 touchStartY = e.touches[0].clientY;
//                 isSwiping = true;
//             }
//         });

//         player.addEventListener('touchmove', (e) => {
//             if (isSwiping && document.fullscreenElement) {
//                 const touchY = e.touches[0].clientY;
//                 const deltaY = touchY - touchStartY;
//                 const swipeThreshold = 50; // Minimum distance for swipe detection

//                 if (deltaY > swipeThreshold) { // Swipe down detected
//                     exitFullscreen();
//                     isSwiping = false;
//                 }
//             }
//         });

//         player.addEventListener('touchend', () => {
//             isSwiping = false;
//         });

//         // Sync fullscreen state on change
//         document.addEventListener('fullscreenchange', updateFullscreenState);

//         // Center video playback (scroll-based) and initial play on load
//         function checkCenteredVideo() {
//             const rect = player.getBoundingClientRect();
//             const viewportCenter = window.innerHeight / 2;

//             if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
//                 if (video.paused) {
//                     video.play().then(() => {
//                         updatePlayPauseButton();
//                     }).catch(err => {
//                         console.log("Playback error:", err);
//                     });
//                 }
//             } else {
//                 if (!video.paused) {
//                     video.pause();
//                     updatePlayPauseButton();
//                 }
//             }
//         }

//         // Run on scroll
//         document.addEventListener('scroll', checkCenteredVideo);

//         // Initial check after DOM load
//         setTimeout(checkCenteredVideo, 100); // Slight delay to ensure DOM is fully rendered

//         // Initial button state sync
//         video.addEventListener('play', updatePlayPauseButton);
//         video.addEventListener('pause', updatePlayPauseButton);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const videoPlayers = document.querySelectorAll('.video-player');

    videoPlayers.forEach(player => {
        const video = player.querySelector('.video');
        const playPause = player.querySelector('.play-pause');
        const progressContainer = player.querySelector('.progress-container');
        const progressBar = player.querySelector('.progress-bar');
        const time = player.querySelector('.time');
        const mute = player.querySelector('.mute');
        const fullscreen = player.querySelector('.fullscreen');
        const controls = player.querySelector('.controls');
        const fullscreenIcon = fullscreen.querySelector('img');

        let lastTap = 0;
        let touchStartY = 0;
        let touchStartX = 0; // Added for horizontal swipe detection
        let isSwiping = false;

        // Format Time
        function formatTime(seconds) {
            if (isNaN(seconds)) return '0:00';
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return `${min}:${sec < 10 ? '0' + sec : sec}`;
        }

        // Update Play/Pause Button
        function updatePlayPauseButton() {
            playPause.querySelector('img').src = video.paused ? 'play-fill.svg' : 'pause.svg';
        }

        // Update Fullscreen State
        function updateFullscreenState() {
            fullscreenIcon.src = document.fullscreenElement ? 'fullscreen-exit.svg' : 'fullscreen.svg';
            player.classList.toggle('fullscreen-active', !!document.fullscreenElement);
            if (!document.fullscreenElement) {
                player.style.cssText = ''; // Reset inline styles
                document.body.style.overflow = ''; // Restore scrolling
            } else {
                document.body.style.overflow = 'hidden'; // Prevent scrolling in fullscreen
            }
        }

        // Exit fullscreen on swipe down
        function exitFullscreen() {
            if (document.fullscreenElement) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                video.play().catch(err => console.log("Playback error after exiting fullscreen:", err));
            }
        }

        // Tap to show/hide controls and double-tap actions
        video.addEventListener('click', (e) => {
            const now = new Date().getTime();
            const timeSinceLastTap = now - lastTap;

            if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
                const rect = video.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const third = rect.width / 3;

                if (clickX < third) {
                    video.currentTime = Math.max(0, video.currentTime - 10);
                } else if (clickX > 2 * third) {
                    video.currentTime = Math.min(video.duration, video.currentTime + 10);
                } else {
                    video.paused ? video.play() : video.pause();
                    updatePlayPauseButton();
                }
            } else {
                controls.classList.toggle('visible');
            }
            lastTap = now;
        });

        // Play/Pause Button
        playPause.addEventListener('click', (e) => {
            e.stopPropagation();
            video.paused ? video.play() : video.pause();
            updatePlayPauseButton();
        });

        // Progress Update
        video.addEventListener('timeupdate', () => {
            const percent = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${percent}%`;
            time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        });

        // Seek (Mouse)
        progressContainer.addEventListener('mousedown', (e) => {
            const seek = (event) => {
                const rect = progressContainer.getBoundingClientRect();
                const pos = (event.clientX - rect.left) / rect.width;
                video.currentTime = pos * video.duration;
            };
            seek(e);
            document.addEventListener('mousemove', seek);
            document.addEventListener('mouseup', () => document.removeEventListener('mousemove', seek), { once: true });
        });

        // Seek (Touch)
        progressContainer.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const seek = (event) => {
                const rect = progressContainer.getBoundingClientRect();
                const pos = (event.touches[0].clientX - rect.left) / rect.width;
                video.currentTime = pos * video.duration;
            };
            seek(e);
            progressContainer.addEventListener('touchmove', seek);
            progressContainer.addEventListener('touchend', () => progressContainer.removeEventListener('touchmove', seek), { once: true });
        });

        // Mute Button
        mute.addEventListener('click', (e) => {
            e.stopPropagation();
            video.muted = !video.muted;
            mute.querySelector('img').src = video.muted ? 'volume-mute-fill.svg' : 'volume-up-fill.svg';
        });

        // Fullscreen Button
        fullscreen.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!document.fullscreenElement) {
                if (player.requestFullscreen) {
                    player.requestFullscreen();
                } else if (player.webkitRequestFullscreen) {
                    player.webkitRequestFullscreen();
                } else if (player.msRequestFullscreen) {
                    player.msRequestFullscreen();
                }
            } else {
                exitFullscreen();
            }
        });

        // Swipe detection for fullscreen exit (top to bottom)
        player.addEventListener('touchstart', (e) => {
            if (document.fullscreenElement) {
                touchStartY = e.touches[0].clientY;
                touchStartX = e.touches[0].clientX;
                isSwiping = true;
            }
        });

        player.addEventListener('touchmove', (e) => {
            if (isSwiping && document.fullscreenElement) {
                const touchY = e.touches[0].clientY;
                const touchX = e.touches[0].clientX;
                const deltaY = touchY - touchStartY;
                const deltaX = touchX - touchStartX;
                const swipeThreshold = 50;

                // Only exit fullscreen if swipe is primarily vertical (downward)
                if (deltaY > swipeThreshold && Math.abs(deltaY) > Math.abs(deltaX)) {
                    exitFullscreen();
                    isSwiping = false;
                }
            }
        });

        player.addEventListener('touchend', () => {
            isSwiping = false;
        });

        // Sync fullscreen state on change
        document.addEventListener('fullscreenchange', updateFullscreenState);

        // Center video playback (scroll-based) and initial play on load
        function checkCenteredVideo() {
            if (!document.fullscreenElement) { // Only check when not in fullscreen
                const rect = player.getBoundingClientRect();
                const viewportCenter = window.innerHeight / 2;

                if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                    if (video.paused) {
                        video.play().then(() => {
                            updatePlayPauseButton();
                        }).catch(err => {
                            console.log("Playback error:", err);
                        });
                    }
                } else {
                    if (!video.paused) {
                        video.pause();
                        updatePlayPauseButton();
                    }
                }
            }
        }

        // Run on scroll
        document.addEventListener('scroll', checkCenteredVideo);

        // Initial check after DOM load
        setTimeout(checkCenteredVideo, 100); // Slight delay to ensure DOM is fully rendered

        // Initial button state sync
        video.addEventListener('play', updatePlayPauseButton);
        video.addEventListener('pause', updatePlayPauseButton);
    });
});