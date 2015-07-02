'use strict';

console.log('starting @ ' + new Date());

chrome.commands.getAll(function(commands) {
  console.log(commands);
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('command: ' + command);

  chrome.tabs.query(
    {
      url: '*://www.youtube.com/*'
    },
    function(tabs) {
      if(tabs.length > 0) {
        for(var i = tabs.length - 1; i >= 0; i--) {
          chrome.tabs.sendMessage(
            tabs[i].id,
            {cmd: command}
          );
        }
      } else {
        console.log('no youtube tabs found');
      }
    }
  );
});
