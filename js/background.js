'use strict';

console.log('Background');

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message: "Hello!!!"}, (response) => {
      console.log(response);
    });
  });
});
