var text = document.body.getElementsByTagName("textarea")[0]

var buttondiv = document.createElement("div");
var button = document.createElement("button");
button.textContent = "AS";
button.addEventListener('click', function() {
    chrome.runtime.sendMessage({action: 'open_popup'});
    event.preventDefault();
});

buttondiv.appendChild(button);

text.parentNode.parentNode.insertBefore(buttondiv, text.parentNode)
