
function toggleOptionsMenu() {
    let menu = document.getElementById("optionsMenu");

    if (menu.classList.contains("show")) {
        // When closing the menu, apply animation
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-10px)";
        setTimeout(() => {
            menu.classList.remove("show");
        }, 300); // Delay to match the animation duration
    } else {
        // When opening the menu, apply animation
        menu.classList.add("show");
        setTimeout(() => {
            menu.style.opacity = "1";
            menu.style.transform = "translateY(0)";
        }, 10);
    }
}

// Download Image/Video
function downloadContent() {
    let post = document.getElementById("postContent");
    let src = post.src || post.querySelector("source")?.src;
    if (!src) return alert("No content to download!");

    let link = document.createElement("a");
    link.href = src;
    link.download = src.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Print Post
function printPost() {
    let optionsButton = document.querySelector(".options-btn");
    let menu = document.getElementById("optionsMenu");
    
    // Hide options button and menu before printing
    optionsButton.style.display = "none";
    menu.style.display = "none";

    let post = document.getElementById("postBox").innerHTML;
    let printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.write("<html><head><title>Print</title></head><body>" + post + "</body></html>");
    printWindow.document.close();
    printWindow.print();

    // Restore options button and menu after a short delay
    setTimeout(() => {
        optionsButton.style.display = "block";
        menu.style.display = "flex";
    }, 500);
}

// View Profile
function viewProfile() {
    window.location.href = "/user-profile"; // Change to actual profile URL
}

// Fullscreen View
function viewFullScreen() {
    let post = document.getElementById("postContent");
    if (post.requestFullscreen) {
        post.requestFullscreen();
    } else if (post.mozRequestFullScreen) {
        post.mozRequestFullScreen();
    } else if (post.webkitRequestFullscreen) {
        post.webkitRequestFullscreen();
    } else if (post.msRequestFullscreen) {
        post.msRequestFullscreen();
    }
}

// Hide Post Temporarily
function hidePost() {
    let post = document.getElementById("postBox");
    post.style.opacity = "0";
    setTimeout(() => {
        post.style.display = "none";
    }, 500); // Hide after fade out
}

// Share Post
function sharePost() {
    let postUrl = window.location.href;
    navigator.clipboard.writeText(postUrl).then(() => {
        alert("Post link copied to clipboard!");
    }).catch((err) => {
        alert("Failed to copy link: " + err);
    });
}

// Close the options menu when clicking outside
document.addEventListener('click', function(event) {
    let menu = document.getElementById('optionsMenu');
    let optionsButton = document.querySelector('.options-btn');
    if (!menu.contains(event.target) && !optionsButton.contains(event.target)) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-10px)';
        }, 10); // Delay to match the animation duration
    }
});
