window.onload = init; // isn't there a cleaner way to code this?

function init () {
    var images = document.getElementsByTagName("img"); // ByTagName essentially creates an array of all img elements
    // for each image, run showAnswer function onclick
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    //// diverging from HFJS code. I'm using CSS to blur and unblur image, rather than using blurred and unblurred images.

    // this selects the event object used in the init function, removes the blur filter from image clicked on
    eventObj.target.style.filter = "blur(0)"; 

    // sets timer to run reblur function on eventObj in 3sec
    setTimeout(reblur,3000,eventObj);
}

function reblur(eventObj) {
    eventObj.target.style.filter = "blur(12.5px)"; // blur should match blur set in style.ss
}

