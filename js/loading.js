document.onreadystatechange = function loadingbar() {
    if (document.readyState !== "complete") {
        disableScroll();
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        enableScroll();
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
    loadingbar();
}

function disableScroll() {
	// Get the current page scroll position
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

		// if any scroll is attempted, set this to the previous value
		window.onscroll = function() {
			window.scrollTo(scrollLeft, scrollTop);
		};
}

function enableScroll() {
	window.onscroll = function() {};
}
