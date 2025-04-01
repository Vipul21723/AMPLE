// // Ensure the DOM is fully loaded before running the script
// document.addEventListener('DOMContentLoaded', () => {
//     // Set the worker source to match version 2.10.377
//     pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

//     // DOM elements
//     const pdfItems = document.querySelectorAll('.pdf-item');
//     const pdfContainer = document.getElementById('pdf-container');
//     const loadingSpinner = document.getElementById('loading-spinner');
//     const backBtn = document.getElementById('backBtn');
//     const pdfControlBox = document.getElementById('pdf-control-box');
//     const pdfName = document.getElementById('pdf-name');

//     // Log worker setup for debugging
//     console.log("PDF.js worker set to:", pdfjsLib.GlobalWorkerOptions.workerSrc);

//     // Function to get scale factor based on screen size
//     function getScaleFactor() {
//         return window.innerWidth <= 768 ? 1.5 : 2.5; // Mobile vs. Desktop scaling
//     }

//     // Function to render PDF
//     async function renderPDF(pdfUrl, editionClass) {
//         console.log("Attempting to render PDF from:", pdfUrl);

//         // Hide main content and show PDF viewer
//         document.getElementsByClassName('update').style.display = 'none';
//         document.getElementById('slider-container').style.display = 'none';
//         const hrElements = document.getElementsByTagName('hr');
//         for (let i = 0; i < hrElements.length; i++) {
//             hrElements[i].style.display = 'none';
//         }
//         loadingSpinner.style.display = 'flex';
//         pdfContainer.style.display = 'block';
//         pdfControlBox.style.display = 'flex'; // Show the control box

//         // Set PDF name based on edition class
//         if (editionClass.includes('bronze_edition')) {
//             pdfName.textContent = 'Bronze Edition Times';
//         } else if (editionClass.includes('silver_edition')) {
//             pdfName.textContent = 'Silver Edition Times';
//         } else if (editionClass.includes('gold_edition')) {
//             pdfName.textContent = 'Gold Edition Times';
//         } else {
//             pdfName.textContent = 'Unknown Edition';
//         }

//         pdfContainer.innerHTML = '';

//         try {
//             // Load the PDF document
//             const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
//             console.log("PDF loaded successfully, total pages:", pdf.numPages);

//             // Render each page
//             for (let i = 1; i <= pdf.numPages; i++) {
//                 const page = await pdf.getPage(i);
//                 const viewport = page.getViewport({ scale: getScaleFactor() });

//                 // Create canvas for the page
//                 const canvas = document.createElement('canvas');
//                 const context = canvas.getContext('2d');
//                 canvas.height = viewport.height;
//                 canvas.width = viewport.width;

//                 // Render PDF page into canvas context
//                 await page.render({
//                     canvasContext: context,
//                     viewport: viewport
//                 }).promise;

//                 // Add canvas to container
//                 pdfContainer.appendChild(canvas);

//                 // Add margin between pages
//                 if (i < pdf.numPages) {
//                     canvas.style.marginBottom = '10px';
//                 }
//             }
//         } catch (error) {
//             console.error("PDF rendering failed:", error.message, error.stack);
//             pdfContainer.innerHTML = `<p style="color: white;">Error loading PDF: ${error.message}. Please check the file path or try again.</p>`;
//         } finally {
//             // Hide loading spinner
//             loadingSpinner.style.display = 'none';
//         }
//     }

//     // Event listeners for PDF buttons
//     pdfItems.forEach(item => {
//         item.addEventListener('click', () => {
//             const pdfFile = item.getAttribute('data-pdf');
//             const editionClass = item.className; // Get the class list (e.g., "edition_button bronze_edition pdf-item")
//             console.log("Button clicked, loading PDF:", pdfFile, "Class:", editionClass);
//             renderPDF(pdfFile, editionClass);
//         });
//     });

//     // Back button functionality to return to main content
//     backBtn.addEventListener('click', () => {
//         pdfContainer.style.display = 'none';
//         pdfControlBox.style.display = 'none'; // Hide the control box
//         document.getElementById('new').style.display = 'block';
//         document.getElementById('slider-container').style.display = 'block';
//         const hrElements = document.getElementsByTagName('hr');
//         for (let i = 0; i < hrElements.length; i++) {
//             hrElements[i].style.display = 'block';
//         }
//     });
// });



// function openPdfBox() {
//     const pdfBox = document.getElementById('pdfBox');
//     pdfBox.style.display = 'block';
// }

// // Close the box when clicking outside the content
// document.getElementById('pdfBox').addEventListener('click', function(e) {
//     if (e.target === this) {
//         this.style.display = 'none';
//     }
// });





// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Set the worker source to match version 2.10.377
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

    // DOM elements
    const pdfItems = document.querySelectorAll('.pdf-item'); // Slider buttons
    const pdfBoxItems = document.querySelectorAll('.pdf');    // Magazine Collection PDFs
    const pdfContainer = document.getElementById('pdf-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    const backBtn = document.getElementById('backBtn');
    const pdfControlBox = document.getElementById('pdf-control-box');
    const pdfName = document.getElementById('pdf-name');

    // Log worker setup for debugging
    console.log("PDF.js worker set to:", pdfjsLib.GlobalWorkerOptions.workerSrc);

    // Function to get scale factor based on screen size
    function getScaleFactor() {
        return window.innerWidth <= 768 ? 1.5 : 2.5; // Mobile vs. Desktop scaling
    }

    // Function to render PDF
    async function renderPDF(pdfUrl, editionType) {
        console.log("Attempting to render PDF from:", pdfUrl);

        // Hide main content and show PDF viewer
        document.querySelectorAll('.update').forEach(el => el.style.display = 'none');
        document.getElementById('slider-container').style.display = 'none';
        const hrElements = document.getElementsByTagName('hr');
        for (let i = 0; i < hrElements.length; i++) {
            hrElements[i].style.display = 'none';
        }
        loadingSpinner.style.display = 'flex';
        pdfContainer.style.display = 'block';
        pdfControlBox.style.display = 'flex'; // Show the control box

        // Set PDF name based on edition type
        if (editionType.includes('bronze')) {
            pdfName.textContent = 'Bronze Edition Times';
        } else if (editionType.includes('silver')) {
            pdfName.textContent = 'Silver Edition Times';
        } else if (editionType.includes('gold')) {
            pdfName.textContent = 'Gold Edition Times';
        } else {
            pdfName.textContent = 'Unknown Edition';
        }

        pdfContainer.innerHTML = '';

        try {
            // Load the PDF document
            const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
            console.log("PDF loaded successfully, total pages:", pdf.numPages);

            // Render each page
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: getScaleFactor() });

                // Create canvas for the page
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;

                // Add canvas to container
                pdfContainer.appendChild(canvas);

                // Add margin between pages
                if (i < pdf.numPages) {
                    canvas.style.marginBottom = '10px';
                }
            }
        } catch (error) {
            console.error("PDF rendering failed:", error.message, error.stack);
            pdfContainer.innerHTML = `<p style="color: white;">Error loading PDF: ${error.message}. Please check the file path or try again.</p>`;
        } finally {
            // Hide loading spinner
            loadingSpinner.style.display = 'none';
        }
    }

    // Event listeners for slider PDF buttons
    pdfItems.forEach(item => {
        item.addEventListener('click', () => {
            const pdfFile = item.getAttribute('data-pdf');
            const editionClass = item.className; // e.g., "edition_button bronze_edition pdf-item"
            console.log("Slider button clicked, loading PDF:", pdfFile, "Class:", editionClass);
            renderPDF(pdfFile, editionClass);
        });
    });

    // Event listeners for Magazine Collection PDFs
    pdfBoxItems.forEach(item => {
        item.addEventListener('click', () => {
            const pdfFile = item.getAttribute('data-pdf');
            const section = item.closest('.section'); // Find the parent section
            const editionType = section.className;    // e.g., "section bronze-section"
            console.log("PDF box item clicked, loading PDF:", pdfFile, "Section:", editionType);
            renderPDF(pdfFile, editionType);
            document.getElementById('pdfBox').style.display = 'none'; // Close the pdfBox after clicking
        });
    });

    // Back button functionality to return to main content
    backBtn.addEventListener('click', () => {
        pdfContainer.style.display = 'none';
        pdfControlBox.style.display = 'none'; // Hide the control box
        document.querySelectorAll('.update').forEach(el => el.style.display = 'block');
        document.getElementById('slider-container').style.display = 'block';
        const hrElements = document.getElementsByTagName('hr');
        for (let i = 0; i < hrElements.length; i++) {
            hrElements[i].style.display = 'block';
        }
    });
});

function openPdfBox() {
    const pdfBox = document.getElementById('pdfBox');
    pdfBox.style.display = 'block';
}

// Close the box when clicking outside the content
document.getElementById('pdfBox').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});