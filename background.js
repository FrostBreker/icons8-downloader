// Listen for messages from content.js
console.log('Background script loaded!');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received in background.js!');
    switch (request.command) {
        case 'setItem':
            console.log(request.data);
            chrome.storage.local.set({ downloads: request.data }, function () {
                sendResponse({ status: 'OK' });
            });
            return;
        case 'getItem':
            console.log(request.name);
            sendResponse({ status: 'OK', data: chrome.storage.local.get(['downloads']) });
            return;
    }
});