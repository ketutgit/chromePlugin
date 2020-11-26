

document.addEventListener('DOMContentLoaded', afterDOMLoaded)
function afterDOMLoaded() {
    var modal = document.getElementById("result");
    cookieinfo(modal);
    //window.onload=cookieinfo;
}




function cookieinfo(modal){
    chrome.cookies.getAll({},function (cookie){
        //console.log(cookie.length);
        for(i=0;i<cookie.length;i++){
            if(cookie[i].domain.includes("instagram"))
            {
                //console.log(JSON.stringify(cookie[i]));
                modal.textContent += JSON.stringify(cookie[i])+"\n";
            }
            
        }
    });
    // chrome.cookies.getAllCookieStores(function (cookiestores){
    //     for(i=0;i<cookiestores.length;i++){
    //         console.log(JSON.stringify(cookiestores[i]));
    //     }
    // });
    // chrome.cookies.set({"name":"Sample1","url":"http://developer.chrome.com/extensions/cookies.html","value":"Dummy Data"},function (cookie){
    //     console.log(JSON.stringify(cookie));
    //     console.log(chrome.extension.lastError);
    //     console.log(chrome.runtime.lastError);
    // });
    // chrome.cookies.onChanged.addListener(function (changeInfo){
    //     console.log(JSON.stringify(changeInfo));
    // });
}