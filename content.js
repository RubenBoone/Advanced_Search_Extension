if (window.location.href.includes("google"))
{
    var text = document.body.getElementsByTagName("textarea")[0]

    var buttondiv = document.createElement("div");
    buttondiv.style.paddingRight = "13px"
    buttondiv.style.paddingLeft = "8px"
    var button = document.createElement("img");
    button.src = chrome.runtime.getURL("images/as_icon.png");
    // button.textContent = "AS";
    button.style.marginTop = "10px";
    button.style.marginBottom = "10px";
    button.width = 17
    button.height = 17
    button.addEventListener('click', function() {
        chrome.runtime.sendMessage({action: 'open_popup'});
        event.preventDefault();
    });
    
    buttondiv.appendChild(button);
    
    text.parentNode.parentNode.append(buttondiv)        
}
