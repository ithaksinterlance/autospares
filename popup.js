/*global chrome*/
window.addEventListener("load", (event) => {
  chrome.tabs.executeScript(null, { file: "content.js" }, connect);
});

function connect() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const port = chrome.tabs.connect(tabs[0].id);
    port.postMessage({ function: "html" });
    port.onMessage.addListener((response) => {
      console.log(
        "In content script, received message from background script: "
      );
      console.log(response.greeting);
    });
  });
}
