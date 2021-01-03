chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    url = tabs[0].url;
    console.log(url);
  });
});
