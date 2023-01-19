chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
});
 

document.onselectionchange = () => {
    let text = getSelectedText();
    if(text)
    {   
        fetch('http://localhost:3000/'+text,{
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(res => {
            chrome.runtime.sendMessage({
                from: 'content',
                text : res
            });
        }).catch(e => {
            chrome.runtime.sendMessage({
                from: 'content',
                subject: 'showPageAction',
                text : "Sorry Not Found"
            });
            console.log("sorry");
        })
    }
}

function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } 
    return '';
}