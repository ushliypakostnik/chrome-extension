'use strict';

console.log('Content', chrome, window.location.href);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse({ message: 'Hello!!!' });
});

// C Shadow DOM
// const html = ``;

// const shadowHost = document.createElement("div");
// document.body.insertAdjacentElement("beforebegin", shadowHost);
// const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

// shadowRoot.innerHTML = html
