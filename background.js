function forwardId() {
  const id = window.location.href.split("/")[4].split("?")[0];
  fetch("http://localhost:4080?id=" + id);
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: forwardId,
  });
});
