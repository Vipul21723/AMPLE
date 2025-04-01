pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

const newsPdfs = {
    "01042025": "AMPLE_Pulse_01April2025.pdf"
};

// Function to get scale factor based on the screen size
function getScaleFactor() {
    let scaleFactor = 3;  // Set a higher default scale factor for better resolution

    // Adjust scaling factor for different devices (high quality for desktop, and balanced for mobile)
    if (window.innerWidth <= 768) {
        // For smaller screens (mobile), slightly reduce the scale
        scaleFactor = 2.5;
    } else {
        // For larger screens (desktop), increase scale for higher quality
        scaleFactor = 3.5;
    }

    return scaleFactor;
}

// Function to load and render the PDF based on the selected date
function renderPDF(selectedDate) {
    const container = document.getElementById('pdf-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    
    loadingSpinner.style.display = 'flex'; // Show the loading spinner

    // Clear previous PDF content before rendering the new one
    container.innerHTML = '';
    
    // Check if the selected date exists in the newsPdfs object
    const pdfUrl = newsPdfs[selectedDate];
    if (!pdfUrl) {
        // If PDF not found, show a background image and hide the loading spinner
        loadingSpinner.style.display = 'none';  // Hide the spinner
        container.style.backgroundImage = 'url("News_Pdf_Not_Found.png")';  // Set the background image
        container.style.backgroundRepeat = 'no-repeat';
        container.style.backgroundSize = 'contain';
        container.style.backgroundPosition = 'center';
        container.style.backgroundClip = 'content-box';
        return;
    }

    const scaleFactor = getScaleFactor();  // Get the scale factor for better quality

    // Use the PDF.js library to fetch and render the PDF document
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
        const totalPages = pdf.numPages;

        // Function to render pages sequentially
        function renderPageSequentially(pageNum) {
            return pdf.getPage(pageNum).then(function(page) {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: scaleFactor });

                // Set canvas dimensions based on the viewport with the desired resolution
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                return page.render({ canvasContext: context, viewport: viewport }).promise.then(function() {
                    container.appendChild(canvas);
                    if (pageNum < totalPages) {
                        renderPageSequentially(pageNum + 1);  // Render the next page after the current one is done
                    }
                });
            });
        }

        renderPageSequentially(1); // Start rendering from the first page

        loadingSpinner.style.display = 'none'; // Hide the spinner after the PDF is rendered
    }).catch(function(error) {
        loadingSpinner.style.display = 'none'; // Hide the spinner on error
        console.error('Error loading PDF:', error);
        container.innerHTML = '<h1>Unable to load PDF. Please try again later.</h1>'; // Show error message
    });
}

// Function to handle date selection from calendar input
function handleDateSelection(event) {
    const selectedDate = formatDate(event.target.value);  // Format the date as DDMMYYYY
    renderPDF(selectedDate);
}

// Helper function to format the date as DDMMYYYY (correct date format for the `newsPdfs` object)
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = ("0" + date.getDate()).slice(-2); // Add leading zero to single digit dates
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero to months
    const year = date.getFullYear();
    return `${day}${month}${year}`;  // Format as DDMMYYYY for `newsPdfs` keys
}

// Function to get the local date in YYYY-MM-DD format, correctly handling time zone offset
function getLocalDate() {
    const today = new Date();

    // Remove the time part to get just the date (correct local date)
    today.setHours(0, 0, 0, 0);

    // Format the date as YYYY-MM-DD
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    
    return `${year}-${month}-${day}`;
}

// Set up the calendar input to trigger date selection
document.getElementById('date-picker').addEventListener('change', handleDateSelection);

// Initial PDF load (optional): Load today's PDF by default when page loads
document.addEventListener('DOMContentLoaded', () => {
    const todayFormatted = getLocalDate();  // Get today's date in local format YYYY-MM-DD

    // Set today's date in the date picker input (local date)
    document.getElementById('date-picker').value = todayFormatted;  // Set today's date in input

    // Format the local date to match the `DDMMYYYY` format for `newsPdfs`
    const todayFormattedForPdf = formatDate(todayFormatted);

    // Render the PDF for today's date by default
    renderPDF(todayFormattedForPdf);
});


