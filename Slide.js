// let slideIndex = 0;
// const slides = document.querySelector('.slides');
// const dots = document.querySelectorAll('.dot');
// const sliderContainer = document.querySelector('.slider-container');
// const totalSlides = 3;
// const slideWidthPercentage = 20;

// slides.style.transform = `translateX(-${slideWidthPercentage}%)`;

// // Auto-slide every 3 seconds
// let autoSlide = setInterval(() => moveSlide(1), 3000);

// // Touch variables
// let touchStartX = 0;
// let touchCurrentX = 0;
// let isDragging = false;

// updateDots();

// function moveSlide(step) {
//     slideIndex += step;
//     const newPosition = -(slideIndex + 1) * slideWidthPercentage;
//     slides.style.transition = 'transform 0.5s ease-in-out';
//     slides.style.transform = `translateX(${newPosition}%)`;

//     slides.addEventListener('transitionend', function handleWrap() {
//         if (slideIndex >= totalSlides) {
//             slides.style.transition = 'none';
//             slideIndex = 0;
//             slides.style.transform = `translateX(-${slideWidthPercentage}%)`;
//         } else if (slideIndex < 0) {
//             slides.style.transition = 'none';
//             slideIndex = totalSlides - 1;
//             slides.style.transform = `translateX(-${totalSlides * slideWidthPercentage}%)`;
//         }
//         updateDots();
//         slides.removeEventListener('transitionend', handleWrap);
//     }, { once: true });

//     resetAutoSlide();
// }

// function currentSlide(index) {
//     slideIndex = index;
//     const newPosition = -(slideIndex + 1) * slideWidthPercentage;
//     slides.style.transition = 'transform 0.5s ease-in-out';
//     slides.style.transform = `translateX(${newPosition}%)`;
//     updateDots();
//     resetAutoSlide();
// }

// function updateDots() {
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[slideIndex].classList.add('active');
// }

// function resetAutoSlide() {
//     clearInterval(autoSlide);
//     autoSlide = setInterval(() => moveSlide(1), 3000);
// }

// // Touch event handlers
// sliderContainer.addEventListener('touchstart', (e) => {
//     touchStartX = e.touches[0].clientX;
//     isDragging = true;
//     slides.style.transition = 'none'; // Disable transition during drag
//     resetAutoSlide(); // Pause auto-slide on touch
// });

// sliderContainer.addEventListener('touchmove', (e) => {
//     if (!isDragging) return;
//     touchCurrentX = e.touches[0].clientX;
//     const diffX = touchCurrentX - touchStartX;
//     const currentPosition = -(slideIndex + 1) * slideWidthPercentage;
//     const newPosition = currentPosition + (diffX / sliderContainer.offsetWidth) * 100;
//     slides.style.transform = `translateX(${newPosition}%)`;
// });

// sliderContainer.addEventListener('touchend', (e) => {
//     if (!isDragging) return;
//     isDragging = false;
//     const diffX = touchCurrentX - touchStartX;
//     const threshold = sliderContainer.offsetWidth * 0.3; // 30% of slider width as swipe threshold

//     if (Math.abs(diffX) > threshold) {
//         if (diffX > 0) {
//             moveSlide(-1); // Swipe right
//         } else {
//             moveSlide(1); // Swipe left
//         }
//     } else {
//         // Snap back to current slide if swipe is too small
//         slides.style.transition = 'transform 0.5s ease-in-out';
//         slides.style.transform = `translateX(-${(slideIndex + 1) * slideWidthPercentage}%)`;
//     }
// });


let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const sliderContainer = document.querySelector('.slider-container');
const totalSlides = 3;
const slideWidthPercentage = 20;

slides.style.transform = `translateX(-${slideWidthPercentage}%)`;

// Auto-slide every 3 seconds
let autoSlide = setInterval(() => moveSlide(1), 5000);

// Touch variables
let touchStartX = 0;
let touchCurrentX = 0;
let isDragging = false;

updateDots();

function moveSlide(step) {
    slideIndex += step;
    const newPosition = -(slideIndex + 1) * slideWidthPercentage;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${newPosition}%)`;

    slides.addEventListener('transitionend', function handleWrap() {
        if (slideIndex >= totalSlides) {
            slides.style.transition = 'none';
            slideIndex = 0;
            slides.style.transform = `translateX(-${slideWidthPercentage}%)`;
        } else if (slideIndex < 0) {
            slides.style.transition = 'none';
            slideIndex = totalSlides - 1;
            slides.style.transform = `translateX(-${totalSlides * slideWidthPercentage}%)`;
        }
        updateDots();
        slides.removeEventListener('transitionend', handleWrap);
    }, { once: true });

    resetAutoSlide();
}

function currentSlide(index) {
    slideIndex = index;
    const newPosition = -(slideIndex + 1) * slideWidthPercentage;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${newPosition}%)`;
    updateDots();
    resetAutoSlide();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => moveSlide(1), 3000);
}

// Touch event handlers
sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
    slides.style.transition = 'none'; // Disable transition during drag
    resetAutoSlide(); // Pause auto-slide on touch
});

sliderContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    touchCurrentX = e.touches[0].clientX;
    const diffX = touchCurrentX - touchStartX;
    const currentPosition = -(slideIndex + 1) * slideWidthPercentage;
    const newPosition = currentPosition + (diffX / sliderContainer.offsetWidth) * 100;
    slides.style.transform = `translateX(${newPosition}%)`;
});

sliderContainer.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diffX = touchCurrentX - touchStartX;
    const threshold = sliderContainer.offsetWidth * 0.2; // Reduced threshold for smoother swipes

    if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
            moveSlide(-1); // Swipe right
        } else {
            moveSlide(1); // Swipe left
        }
    } else {
        // Smooth snap-back
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${(slideIndex + 1) * slideWidthPercentage}%)`;
    }
});