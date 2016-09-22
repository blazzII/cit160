
//    document.addEventListener('DOMContentLoaded', function () {
//        var hText = '';
//        var wCount  = 0;
//        hText = (document.all) ? document.selection.createRange().text : document.getSelection();
//        hText = hText.toString();
//        wCount = hText.split(" ").length;
//        document.getElementById('wordCount').innerHTML = wCount;  
//    }, false);

    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, function (selection) {
        var hText = selection.toString();
        var wCount = hText.split(" ").length;
        document.getElementById('wordCount').innerHTML = wCount;
    });