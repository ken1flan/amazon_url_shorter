chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    url = tabs[0].url;

    shorted_url = url.replace(/(https:\/\/www.amazon.co.jp).*(\/dp\/[^/]+).*/, "$1$2");

    // clipboardへコピー
    var textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = shorted_url;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  });
});
