

window.perfwatch = {}

chrome.runtime.onMessage.addListener((msg, sender,sendResponse) => {
    window.perfwatch[sender.tab.id] = msg.text;
 });

