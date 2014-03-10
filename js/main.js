// Usually I would use jQuery for a lot of this.
// Due to the short timeframe and restriction from using external libraries, this has not been extended to work in IE.

function documentLoaded() {


	// Set first panel position so it doesn't overlap the intro
	function setFirstPosition() {
		var introPanelHeight = document.getElementById("intro-panel").getBoundingClientRect().height;
	    var firstPanel = document.getElementById("google-news");
	    firstPanel.style.marginTop = introPanelHeight + "px";
	}
	setFirstPosition();
	window.onresize = setFirstPosition;
    

    // On scroll, check which panel we are viewing
    var pageSections = document.querySelectorAll(".section-wrapper");

    window.onscroll = function () {
    	for (var i = 0, length = pageSections.length; i < length; i++) {
    		var currentPage = pageSections[i];
	    	var topOffset = currentPage.getBoundingClientRect().top;
	    	if (topOffset <= 50) {
	    		if (currentPage.className.indexOf("focused") == -1) {
	    			// Add class "focused"
	    			currentPage.className = currentPage.className + " focused";
	    		}
	    	} else {
	    		// Remove class "focused"
	    		currentPage.className = currentPage.className.replace(" focused","");
	    	}	
	    }
    };


}

document.addEventListener("DOMContentLoaded", documentLoaded);