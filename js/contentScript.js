// contentScript.js
// Code to open a modal on the specific website when the URL matches the pattern

// Function to check if the URL matches the required pattern
function matchesPattern() {
    return /^https:\/\/icones8\.fr\/icon\/\d+\/.+/.test(window.location.href);
}
// Function to fetch the modal content from external HTML file
async function fetchModalContent() {
    try {
        const response = await fetch(chrome.runtime.getURL('modal/modalContent.html'));
        let modalHTML = await response.text();
        const cssUrl = chrome.runtime.getURL('modal/modalStyle.css');
        modalHTML = `<link rel="stylesheet" type="text/css" href="${cssUrl}">` + modalHTML;
        return modalHTML;
    } catch (error) {
        console.error('Error fetching modal content:', error);
        return null;
    }
}



window.onload = function () {
    // Check if the URL matches the pattern before injecting the modal content
    if (matchesPattern()) {
        fetchModalContent().then((modalHTML) => {
            if (modalHTML) {
                const body = document.querySelector('body');
                body.insertAdjacentHTML('beforeend', modalHTML);

                // Get the absolute URL of the JS file in your extension
                const jsUrl = chrome.runtime.getURL('modal/modalScript.js');

                // Create a script element
                const script = document.createElement('script');
                script.src = jsUrl;

                // Add an event listener to check when the script has loaded
                script.onload = () => {
                    console.log('Script has been loaded!');
                    // You can perform further actions here if needed
                };

                // Append the script element to the document body to trigger loading and execution
                body.appendChild(script);
            }
        });
    }
};
