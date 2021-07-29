window.onload = function () {
    if (localStorage.getItem('thisvarisgud4me') == '1') {
        alert("Pease switch to light mode for best user-experience");
    }
}
window.onbeforeunload = function (e) {
    return 'Changes you made may not be saved.';
}