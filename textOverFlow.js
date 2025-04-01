// // document.addEventListener("DOMContentLoaded", function () {
// //     const maxLength = 10;
// //     const containers = document.querySelectorAll(".read-more-container");

// //     containers.forEach(container => {
// //         let textElement = container.querySelector(".text-content");
// //         const fullText = textElement.textContent.trim();

// //         let shortText = fullText.substring(0, maxLength).trim();
// //         let lastSpace = shortText.lastIndexOf(" ");
// //         if (lastSpace > 0) {
// //             shortText = shortText.substring(0, lastSpace);
// //         }

// //         textElement.innerHTML = `
// //             <span class="short-text">${shortText}</span>
// //             <span class="full-content">${fullText}</span>
// //             <span class="read-more-btn" onclick="toggleText(this)">...Read More</span>
// //         `;
// //     });
// // });

// // function toggleText(button) {
// //     let container = button.closest(".read-more-container");
// //     let textElement = container.querySelector(".text-content");
// //     let shortText = textElement.querySelector(".short-text");
// //     let fullText = textElement.querySelector(".full-content");

// //     if (fullText.style.display === "none" || fullText.style.display === "") {
// //         fullText.style.display = "inline";
// //         fullText.style.opacity = "0";
// //         shortText.style.opacity = "0";

// //         setTimeout(() => {
// //             shortText.style.display = "none";
// //             fullText.style.opacity = "1";
// //         }, 10);

// //         container.classList.add("expanded");
// //         button.textContent = " Read Less";
// //     } else {
// //         fullText.style.opacity = "0";

// //         setTimeout(() => {
// //             fullText.style.display = "none";
// //             shortText.style.display = "inline";
// //             shortText.style.opacity = "0";
// //             setTimeout(() => {
// //                 shortText.style.opacity = "1";
// //             }, 10);
// //             container.classList.remove("expanded");
// //             button.textContent = "...Read More";
// //         }, 600);
// //     }
// // }

// document.addEventListener("DOMContentLoaded", function () {
//     const maxLength = 100; // Adjust this to set the truncation length (e.g., 100 characters)
//     const textElements = document.querySelectorAll(".post-data .data"); // Target all <p class="data"> in .post-data

//     textElements.forEach(textElement => {
//         const fullText = textElement.innerHTML.trim(); // Preserve HTML tags like <tag>
//         const plainText = textElement.textContent.trim(); // Plain text for length check

//         // Skip if text is already short enough
//         if (plainText.length <= maxLength) return;

//         // Truncate to maxLength, stopping at the last space
//         let shortText = plainText.substring(0, maxLength).trim();
//         const lastSpace = shortText.lastIndexOf(" ");
//         if (lastSpace > 0) {
//             shortText = shortText.substring(0, lastSpace);
//         }

//         // Create a read-more-container dynamically
//         const container = document.createElement("div");
//         container.classList.add("read-more-container");

//         // Insert short text, full text, and button
//         container.innerHTML = `
//             <p class="text-content">
//                 <span class="short-text">${shortText} ......</span>
//                 <span class="full-content" style="display: none;">${fullText}</span>
//                 <span class="read-more-btn">Read More</span>
//             </p>
//         `;

//         // Replace the original <p> with the new container
//         textElement.parentNode.replaceChild(container, textElement);

//         // Add click event to the button
//         const button = container.querySelector(".read-more-btn");
//         button.addEventListener("click", function () {
//             toggleText(this);
//         });
//     });
// });

// function toggleText(button) {
//     const container = button.closest(".read-more-container");
//     const shortText = container.querySelector(".short-text");
//     const fullText = container.querySelector(".full-content");

//     if (fullText.style.display === "none" || fullText.style.display === "") {
//         // Expanding
//         fullText.style.display = "inline";
//         fullText.style.opacity = "0";
//         shortText.style.opacity = "0";

//         requestAnimationFrame(() => {
//             shortText.style.display = "none";
//             fullText.style.opacity = "1";
//             container.classList.add("expanded");
//             button.textContent = " Read Less";
//         });
//     } else {
//         // Collapsing
//         fullText.style.opacity = "0";

//         setTimeout(() => {
//             fullText.style.display = "none";
//             shortText.style.display = "inline";
//             shortText.style.opacity = "0";
//             requestAnimationFrame(() => {
//                 shortText.style.opacity = "1";
//                 container.classList.remove("expanded");
//                 button.textContent = "Read More";
//             });
//         }, 600); // Matches opacity transition duration
//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    const maxLength = 200; // Adjust this to set the truncation length
    const textElements = document.querySelectorAll(".post-data .data");

    textElements.forEach(textElement => {
        const fullText = textElement.innerHTML.trim(); // Full HTML content
        const plainText = textElement.textContent.trim(); // Plain text for length check

        // Skip if text is already short enough
        if (plainText.length <= maxLength) return;

        // Truncate while preserving HTML
        const shortText = truncateWithHTML(fullText, maxLength);

        // Create a read-more-container dynamically
        const container = document.createElement("div");
        container.classList.add("read-more-container");

        // Insert short text, full text, and button
        container.innerHTML = `
            <p class="text-content">
                <span class="short-text">${shortText}...</span>
                <span class="full-content" style="display: none;">${fullText}</span>
                <span class="read-more-btn">Read More</span>
            </p>
        `;

        // Replace the original <p> with the new container
        textElement.parentNode.replaceChild(container, textElement);

        // Add click event to the button
        const button = container.querySelector(".read-more-btn");
        button.addEventListener("click", function () {
            toggleText(this);
        });
    });
});

function truncateWithHTML(html, maxLength) {
    let currentLength = 0;
    let truncated = "";
    let inTag = false;
    let tagContent = "";

    // Parse the HTML character by character
    for (let i = 0; i < html.length; i++) {
        const char = html[i];

        if (char === "<") {
            inTag = true;
            tagContent = char;
            truncated += char;
            continue;
        }

        if (char === ">") {
            inTag = false;
            tagContent += char;
            truncated += char;
            continue;
        }

        if (inTag) {
            tagContent += char;
            truncated += char;
            continue;
        }

        // Count only text outside tags
        currentLength++;
        truncated += char;

        // Stop at maxLength, ensuring we don't cut off in the middle of a tag
        if (currentLength >= maxLength) {
            // Find the last space before maxLength to avoid cutting words
            const lastSpace = truncated.lastIndexOf(" ");
            if (lastSpace > 0 && !inTag) {
                truncated = truncated.substring(0, lastSpace);
            }
            break;
        }
    }

    // Close any open tags (simple approach, assumes well-formed HTML)
    const openTags = html.match(/<tag[^>]*>/g) || [];
    const closeTags = html.match(/<\/tag>/g) || [];
    const unclosedTags = openTags.length - closeTags.length;

    for (let i = 0; i < unclosedTags; i++) {
        truncated += "</tag>";
    }

    return truncated;
}

function toggleText(button) {
    const container = button.closest(".read-more-container");
    const shortText = container.querySelector(".short-text");
    const fullText = container.querySelector(".full-content");

    if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "inline";
        fullText.style.opacity = "0";
        shortText.style.opacity = "0";

        requestAnimationFrame(() => {
            shortText.style.display = "none";
            fullText.style.opacity = "1";
            container.classList.add("expanded");
            button.textContent = " Read Less";
        });
    } else {
        fullText.style.opacity = "0";

        setTimeout(() => {
            fullText.style.display = "none";
            shortText.style.display = "inline";
            shortText.style.opacity = "0";
            requestAnimationFrame(() => {
                shortText.style.opacity = "1";
                container.classList.remove("expanded");
                button.textContent = "Read More";
            });
        }, 600);
    }
}