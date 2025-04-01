
// let currentZoom = 1;
// let currentRotation = 0;
// let isFullscreen = false;
// let isPiP = false;

// const imgElement = document.getElementById('image');


// // const imgElement = document.getElementById('image');
// // const container = document.querySelector('.image-container');
// const control = document.getElementById('image_control');
// // let currentZoom = 1; // Initial zoom level

// // Toggle visibility of controls on image click
// imgElement.addEventListener('click', () => {
//     // Toggle the visibility of the controls
//     if (control.style.visibility === 'hidden') {
//         control.style.visibility = 'visible';
//     } else {
//         control.style.visibility = 'hidden';
//     }
// });

// // // Zoom In Function
// // function zoomIn() {
// //     currentZoom += 0.1;
// //     imgElement.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
// // }

// // // Zoom Out Function
// // function zoomOut() {
// //     if (currentZoom > 0.2) {
// //         currentZoom -= 0.1;
// //         imgElement.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
// //     }
// // }

// // const imgElement = document.getElementById('image');
// const container = document.querySelector('.source');
// // let currentZoom = 1;  // Initial zoom level

// // Zoom In and Out on Mouse Wheel
// // container.addEventListener('wheel', (e) => {
// //     if (e.deltaY < 0) {
// //         zoomIn();  // Zoom in if wheel scrolls up
// //     } else {
// //         zoomOut(); // Zoom out if wheel scrolls down
// //     }
// //     e.preventDefault();  // Prevent default scroll behavior
// // });

// // // Zoom In Function
// // function zoomIn() {
// //     if (currentZoom < 3) {  // Limiting the zoom max value
// //         currentZoom += 0.1;
// //         updateImage();
// //     }
// // }

// // // Zoom Out Function
// // function zoomOut() {
// //     if (currentZoom > 0.2) {  // Limiting the zoom min value
// //         currentZoom -= 0.1;
// //         updateImage();
// //     }
// // }

// // // Update Image with Zoom (and smooth transition)
// // function updateImage() {
// //     imgElement.style.transform = `scale(${currentZoom})`;
// // }

// // const imgElement = document.getElementById('image');
// // const container = document.querySelector('.image-container');
// // let currentZoom = 1;  // Initial zoom level
// let isDragging = false;  // Track dragging state
// let startX, startY;  // Initial mouse position when dragging starts
// let offsetX = 0, offsetY = 0;  // Current offset for image positioning

// // Zoom In and Out on Mouse Wheel
// container.addEventListener('wheel', (e) => {
//     if (e.deltaY < 0) {
//         zoomIn();  // Zoom in if wheel scrolls up
//     } else {
//         zoomOut(); // Zoom out if wheel scrolls down
//     }
//     e.preventDefault();  // Prevent default scroll behavior
// });

// // Zoom In Function
// function zoomIn() {
//     if (currentZoom < 3) {  // Limiting the zoom max value
//         currentZoom += 0.1;
//         updateImage();
//     }
// }

// // Zoom Out Function
// function zoomOut() {
//     if (currentZoom > 0.2) {  // Limiting the zoom min value
//         currentZoom -= 0.1;
//         updateImage();
//     }
// }

// // Update Image with Zoom (and smooth transition)
// function updateImage() {
//     imgElement.style.transform = `scale(${currentZoom})`;
//     imgElement.style.left = `${offsetX}px`;
//     imgElement.style.top = `${offsetY}px`;
// }

// // Mouse Down - Start Dragging
// imgElement.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     container.classList.add('dragging');  // Change cursor style
//     startX = e.clientX - offsetX;  // Record initial mouse position
//     startY = e.clientY - offsetY;
//     e.preventDefault();  // Prevent text selection during drag
// });

// // Mouse Move - Drag the Image
// container.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//         const moveX = e.clientX - startX;
//         const moveY = e.clientY - startY;
//         offsetX = moveX;
//         offsetY = moveY;
//         updateImage();  // Update image position
//     }
// });

// // Mouse Up - Stop Dragging
// container.addEventListener('mouseup', () => {
//     isDragging = false;
//     container.classList.remove('dragging');  // Revert cursor style
// });

// // Mouse Leave - Stop Dragging if mouse leaves the container
// container.addEventListener('mouseleave', () => {
//     isDragging = false;
//     container.classList.remove('dragging');
// });

// // Prevent image dragging on click
// imgElement.addEventListener('mousedown', (e) => {
//     e.preventDefault();
// });

// // Rotate Clockwise Function
// function rotateClockwise() {
//     currentRotation += 90;
//     imgElement.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
// }

// // Rotate Anti-Clockwise Function
// function rotateAntiClockwise() {
//     currentRotation -= 90;
//     imgElement.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
// }

// // Rotate 180 Degrees Function
// function rotate180() {
//     currentRotation += 180;
//     imgElement.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
// }

// // Toggle Fullscreen Function
// function toggleFullscreen() {
//     if (!isFullscreen) {
//         if (imgElement.requestFullscreen) {
//             imgElement.requestFullscreen();
//         } else if (imgElement.mozRequestFullScreen) { // Firefox
//             imgElement.mozRequestFullScreen();
//         } else if (imgElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
//             imgElement.webkitRequestFullscreen();
//         } else if (imgElement.msRequestFullscreen) { // IE/Edge
//             imgElement.msRequestFullscreen();
//         }
//         isFullscreen = true;
//     } else {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) { // Firefox
//             document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
//             document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) { // IE/Edge
//             document.msExitFullscreen();
//         }
//         isFullscreen = false;
//     }
// }

// // Picture-in-Picture Function
// function togglePiP() {
//     if (isPiP) {
//         document.exitPictureInPicture();
//     } else {
//         imgElement.requestPictureInPicture();
//     }
//     isPiP = !isPiP;
// }

// // Download Image Function
// function downloadImage() {
//     const link = document.createElement('a');
//     link.href = imgElement.src;
//     link.download = 'image.jpg'; // Change the filename as needed
//     link.click();
// }


// image_controls.js
document.querySelectorAll('.post-content').forEach(img => {
    const controls = img.closest('.source').querySelector('.image_control');
    const fullscreenBtn = controls.querySelector('.fullscreen');
    const downloadBtn = controls.querySelector('.download');

    // Toggle controls on image click
    img.addEventListener('click', () => {
        controls.style.visibility = controls.style.visibility === 'visible' ? 'hidden' : 'visible';
    });

    // Fullscreen
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            img.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Download
    downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

// Text expansion
document.querySelectorAll('.data').forEach(textEl => {
    if (textEl.textContent.length > 150) {
        textEl.classList.add('truncated');
        const expandBtn = document.createElement('span');
        expandBtn.className = 'expand-text';
        expandBtn.textContent = 'Explore more...';
        expandBtn.addEventListener('click', () => {
            textEl.classList.toggle('truncated');
            expandBtn.textContent = textEl.classList.contains('truncated') ? 
                'Explore more...' : 'Show less';
        });
        textEl.parentNode.insertBefore(expandBtn, textEl.nextSibling);
    }
});