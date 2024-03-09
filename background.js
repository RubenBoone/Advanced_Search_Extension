chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if (message.action === 'open_popup') {
    chrome.windows.create({
      'url': 'index.html',
      'type': 'popup',
      'width': 400,
      'height': 300
    });
  }
});