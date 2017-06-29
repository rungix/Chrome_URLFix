function runSwitchjs() {
    chrome.tabs.executeScript({
        file: 'jquery.js',
        file: 'fix.js'
    });
}

document.getElementById('click_to_fix').addEventListener('click', runSwitchjs)
