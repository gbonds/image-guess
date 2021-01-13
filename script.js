window.onload = init; // isn't there a cleaner way to code this?

function init () {
    var image = document.getElementById("zero");
    image.onclick = showAnswer;
}

function showAnswer() {
    //// diverging from HFJS code here, which are the two lines below. rather than using two images, one regular and one blurred, I'm blurring regular.
    // var image = document.getElementById("zero");
    // image.src = "img/zero.jpg"; 
    document.getElementById("zero").style.filter = "blur(0)"; // this removes the blur filter from image
}