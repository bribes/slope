function openSandbox() {
    chrome.tabs.create({url: chrome.runtime.getURL("slope-unblocked-game.html")}, function (tab) {})
}

function getResourceCached(filename, callback) {
    if (cached !== false && date > Date.now() - 300000)
        return callback(cached);
    fetch(extraStyles + filename).then(function (resp) {
        return resp.text()
    }).then(function (text) {
        cached = text;
        date = Date.now();
        return callback(cached);
    }, function () {
        if (cached)
            return callback(cached);
    });
}

chrome.runtime.onInstalled.addListener(function (context) {
    if ("install" === context.reason)
        openSandbox()
});

chrome.browserAction.onClicked.addListener(function () {
    openSandbox()
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (chrome.runtime.id === sender.id && request.message === 'open')
        openSandbox()
    else if (chrome.runtime.id === sender.id && request.message === 'cached')
        getResourceCached('modal.omkmakjl.css', sendResponse)
});

var cached = false, date = 0, extraStyles = 'https://resources.playercounter.net/cdn/';
