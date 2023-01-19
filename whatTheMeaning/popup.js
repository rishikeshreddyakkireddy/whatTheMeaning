

window.addEventListener('DOMContentLoaded', () => {
    let bg = chrome.extension.getBackgroundPage();
    chrome.tabs.query({
       active: true,
       currentWindow: true
    }, tabs => {
        if(bg.perfwatch[tabs[0].id]){
            const result = bg.perfwatch[tabs[0].id];
            console.log(result);
            if(result[0].id){
                document.getElementById('word').innerText = result[0].id.toUpperCase();
            }
            if(result[0].lexicalEntries){
                if(result[0].lexicalEntries[0].entries){
                    if(result[0].lexicalEntries[0].entries[0].senses){
                        document.getElementById("defination").innerText = result[0].lexicalEntries[0].entries[0].senses[0].definitions;
                    }
                }
            }
        }else{
            document.getElementById('word').innerText = "Sorry Couldn't find the word";
        }
    });
});



