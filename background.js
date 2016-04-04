chrome.commands.onCommand.addListener(function (command) {
    if (command === "again") {
        chrome.tabs.executeScript( { file: 'content.js' } );
    }
});
