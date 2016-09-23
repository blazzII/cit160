chrome.tabs.executeScript({
    code: "window.frame[0].getSelection().toString();"
}, function (selection) {
    var hText = selection.toString();
    var wCount = hText.split(" ").length;
    document.getElementById('wordCount').innerHTML = wCount;
});
