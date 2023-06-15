let slides = [document.getElementsByClassName("slide a")];
let lightboxSlides = [document.getElementsByClassName("slide lightboxSlide aL")]
var slideIndex = Array(slides.length).fill(1);
var lightSlideIndex = Array(lightboxSlides.length).fill(1);
let dots = [document.getElementsByClassName("dot a")];
let lightDots = [document.getElementsByClassName("dot aL")];
let lightboxes = document.getElementsByClassName("lightbox");

const hexCharacters= ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

var currIndex;
var currSlides;
var currDots;

function onLoad() {
    setSlide(1,false,1)
    setSlide(1,true,1)
    document.getElementById("body").addEventListener("mousedown", (e) =>  {
        document.getElementById("body").style.setProperty("--selection-color", constructRandomColor());
    })
}
function addSlide(n, isLightbox = false, index = 1) {
    if (isLightbox) {
        currIndex = lightSlideIndex[index-1];
        currSlides = lightboxSlides[index-1];
        currDots = lightDots[index-1];
    } else {
        currIndex = slideIndex[index-1];
        currSlides = slides[index-1];
        currDots = dots[index-1];
    }
    currIndex += n;
    if (currIndex > currSlides.length) {
        currIndex = 1;
    }
    if (currIndex < 1) {
        currIndex = currSlides.length;
    }
    if (isLightbox) {
        lightSlideIndex[index-1] = currIndex ;
    } else {
        slideIndex[index-1] = currIndex ;
    }
    reloadSlide(currIndex, currSlides, currDots);
}
function setSlide(n,isLightbox = false, index = 1) {

    if (isLightbox) {
        currIndex = lightSlideIndex[index-1];
        currSlides = lightboxSlides[index-1];
        currDots = lightDots[index-1];
    } else {
        currIndex = slideIndex[index-1];
        currSlides = slides[index-1];
        currDots = dots[index-1];
    }
    reloadSlide(currIndex = n, currSlides, currDots);
    if (isLightbox) {
        lightSlideIndex[index-1] = currIndex ;
    } else {
        slideIndex[index-1] = currIndex ;
    }
}
function reloadSlide(n,localSlides, localDots) {
    for (i = 0;i < localSlides.length;i++){localSlides[i].classList.remove("slide-enabled");} //disable all slides
    for (i = 0;i < localDots.length;i++){localDots[i].classList.remove("dot-enabled");} //disable all dots
    localSlides[n-1].classList.add("slide-enabled"); //enable the slide index-1 (arrays start with 0)
    localDots[n-1].classList.add("dot-enabled"); //enable the dot index-1 (arrays start with 0)
}
function toggleLightbox(index = 1) {
    lightboxes[index-1].classList.toggle("enabled");//DOESNT WORK TO DO: remove the prev-next when lighbox is enabled

}
function constructRandomColor() {
    var localHexcode = "#";
    for (i = 0;i < 6;i++) {
        currCode = hexCharacters[Math.floor(16 * Math.random())]
        console.log(currCode);
        localHexcode += currCode;
    }
    return localHexcode;

}
