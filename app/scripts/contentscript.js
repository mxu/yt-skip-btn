'use strict';

console.log('content script');

chrome.runtime.onMessage.addListener(
  function(request) {
    var className = '';
    switch(request.cmd) {
      case 'like':
        className = 'like-button-renderer-like-button';
        break;
      case 'prev':
        className = 'ytp-button-prev';
        break;
      case 'pause':
        className = 'ytp-button-' + (document.getElementsByClassName('ytp-button-play').length > 0 ? 'play' : 'pause');
        break;
      case 'next':
        className = 'ytp-button-next';
        break;
    }

    var btn = document.getElementsByClassName(className);
    if(btn.length > 0) {
      btn[0].click();
    }
  }
);
