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


function toggleOptionsMenu(menuId) {  
    const menu = document.getElementById(menuId); 

    if (menu.classList.contains("show")) {
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-10px)";
        setTimeout(() => {
            menu.classList.remove("show");
            menu.style.display = "none";
        }, 300);
    } else {
        menu.style.display = "flex";
        setTimeout(() => {
            menu.classList.add("show");
            menu.style.opacity = "1";
            menu.style.transform = "translateY(0)";
        }, 10);
    }
}

document.addEventListener('click', function(event) {
    const menus = document.querySelectorAll('.options-menu');

    menus.forEach(menu => { 
        const relatedButton = menu.previousElementSibling; 

        if (menu.classList.contains("show") && !menu.contains(event.target) && !relatedButton.contains(event.target)) {
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-10px)";
            setTimeout(() => {
                menu.classList.remove("show");
                menu.style.display = "none";
            }, 300);
        }
    });
});


function downloadContent() {
    let media = document.querySelector(".post-data .source img, .post-data .source video"); // Selects Image or Video
    if (!media) {
        alert("No media found to download!");
        return;
    }

    let src = media.tagName === "VIDEO" ? media.querySelector("source").src : media.src;
    
    let link = document.createElement("a");
    link.href = src;
    link.download = src.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function viewFullScreen() {
    let post = document.querySelector(".post-content");

    if (!post) {
        console.error("Element with ID 'postContent' not found.");
        return;
    }

    if (post.requestFullscreen) {
        post.requestFullscreen();
    } else if (post.mozRequestFullScreen) { 
        post.mozRequestFullScreen();
    } else if (post.webkitRequestFullscreen) { 
        post.webkitRequestFullscreen();
    } else if (post.msRequestFullscreen) { 
        post.msRequestFullscreen();
    } else {
        alert("Full-screen API not supported by this browser.");
    }
}


function sharePost() {
    let postUrl = window.location.href;

    if (navigator.clipboard && navigator.clipboard.writeText) {  
        navigator.clipboard.writeText(postUrl)
            .then(() => {
                const message = document.createElement("div");
                message.className = "share-message"; 
                message.textContent = "Link copied to clipboard!";
                document.body.appendChild(message);
                message.style.display = "block"; 

                setTimeout(() => {
                    message.style.display = "none";
                    document.body.removeChild(message); 
                }, 2000); 

            })
            .catch(err => {
                console.error("Failed to copy: ", err); 
                alert("Please copy the link manually: " + postUrl);

            });
        const urlField = document.createElement('textarea');
        urlField.value = postUrl;
        document.body.appendChild(urlField);
        urlField.select();
        document.execCommand('copy'); 
        document.body.removeChild(urlField);
      }
}

function hidePost() {
    let post = document.querySelector(".update");
    post.style.opacity = "0";
    setTimeout(() => {
        post.style.display = "none";
    }, 500); 
}

function printPost() {
    let postContent = document.querySelector(".update-post");
    let postData = postContent.querySelector(".post-data");
    let time = postContent.querySelector(".time");
    let media = postContent.querySelector(".source img");
    let postMakerName = document.querySelector(".updater-name");
    let postMakerId = document.querySelector("tag");

    let currentDate = new Date();
    let printDate = currentDate.toLocaleDateString();
    let printTime = currentDate.toLocaleTimeString();
    let dayOfWeek = currentDate.toLocaleString('en-us', { weekday: 'long' });

    printPostWithFooter(postData, time, media, postMakerName, postMakerId, printDate, printTime, dayOfWeek);
}

function printPostWithFooter(postData, time, media, postMakerName, postMakerId, printDate, printTime, dayOfWeek) {
    let printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write("<html><head><title>Print</title></head><body>");

    printWindow.document.write("<div style='text-align:center; font-size:18px;'>");
    printWindow.document.write("<strong>" + postMakerName.innerHTML + "</strong>");
    printWindow.document.write("<br><span style='font-size:14px;'>@" + postMakerId.innerHTML + "</span>");
    printWindow.document.write("</div>");

    printWindow.document.write("<div style='text-align:center; font-size:16px; margin-top:20px;'>");
    printWindow.document.write("<h3>" + time.innerHTML + "</h3>");
    printWindow.document.write("</div>");

    printWindow.document.write("<div style='margin: 20px; font-size:16px;'>");
    printWindow.document.write("</div>");

    if (media) {
        printWindow.document.write("<div style='text-align:center;'>");
        printWindow.document.write("<img src='" + media.src + "' style='max-width:100%;' />");
        printWindow.document.write("</div>");
    }

    printWindow.document.write("<div style='position: absolute; bottom: 20px; left: 0; right: 0; text-align: center;'>");

    printWindow.document.write("<div style='position: absolute; left: 20px; bottom: 10px; font-size: 12px;'>");
    printWindow.document.write("© AMPLE 2025. All rights reserved.");
    printWindow.document.write("</div>");

    printWindow.document.write("<div style='position: absolute; right: 20px; bottom: 10px; font-size: 12px;'>");
    printWindow.document.write(printDate + " | " + printTime + " | " + dayOfWeek);
    printWindow.document.write("</div>");

    printWindow.document.write("</div>");

    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
}

function Ample1686(){
    window.location.href = 'Ample1686_Space.html';
} 
function VIPUL_PATEL_1686(){
    window.location.href = 'VIPUL_PATEL_1686.html';
} 
function cancle(){
    document.querySelector('.message-alert').style.display = "none";
}

function openMessage(){
    document.querySelector('.message-alert').style.display = "flex";
}