function gsearch() {
    var search_data = document.getElementById("search_data").value;
    // document.location.replace("https://www.google.com/search?q=" + search_data + "");    //we are unable to go back so we need to open it in new tab and this can be done by the code of next line:
    window.open("https://www.google.com/search?q=" + search_data + "", '_blank').focus();
}
function myfunc() {
    search_data.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            gsearch();
        }
    });
}