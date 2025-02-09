const rainbowBG = document.getElementById("search");
const input = document.getElementById("search-input");


function searchClick() {
    rainbowBG.style.background = ""
}


const checking = document.querySelector(".checkbox");
const sideBar = document.querySelector(".side-bar");
const head = document.querySelector(".head");

checking.addEventListener("change", function () {
    if (checking.checked) {
        head.style.display = "flex";
        sideBar.style.display = "flex";
        sideBar.style.height = "88vh";
        sideBar.style.transition = "0.5s";
    } else {
        sideBar.style.height = "0vh";
        head.style.display = "none";
    }
});




// const videos = document.querySelectorAll('video');

// window.addEventListener('scroll', () => 
// {
//     videos.forEach((video) => {
//         const videoRect = video.getBoundingClientRect();
//         if(videoRect.top < window.innerHeight && videoRect.bottom > 0){
//             video.play();
//         }
//         else{
//             video.pause();
//         }
//     })
// })

const videos = document.querySelectorAll('video');

window.addEventListener('scroll', () => {
    videos.forEach((video) => {
        const videoRect = video.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the video is roughly in the center of the viewport
        if (videoRect.top < windowHeight * 0.75 && videoRect.bottom > windowHeight * 0.25) {
            video.play();
        } else {
            video.pause();
        }
    })
});


const No = document.querySelectorAll(".no");
const Yes = document.querySelectorAll(".yes");

function Clicking(){

    if(No.style.display == "flex" && Yes.style.display == "none"){
        No.style.display = "none";
        Yes.style.display = "flex";
    }
    if(No.style.display == "none" && Yes.style.display == "flex"){
        No.style.display = "flex";
        Yes.style.display = "none";
    }
}


// const No = document.querySelectorAll(".no");
// const Yes = document.querySelectorAll(".yes");

// function Clicking() {
//     No.forEach((noElement, index) => {
//         const yesElement = Yes[index];  // Get the corresponding Yes element

//         if (noElement.style.display === "flex" && yesElement.style.display === "none") {
//             noElement.style.display = "none";
//             yesElement.style.display = "flex";
//         } else if (noElement.style.display === "none" && yesElement.style.display === "flex") {
//             noElement.style.display = "flex";
//             yesElement.style.display = "none";
//         }
//     });
// }


const mainPage = document.querySelector(".main-page");
const Agreee = document.querySelector(".agreement");

function AgreeMent(){


    // alert("© 2025 AMPLE. All Rights Reserved. \n AMPLE™ | Register Soon")
    mainPage.style.display = "flex";
    Agreee.style.display = "none";
    // mainPage.style.transition = "200ms";
}
