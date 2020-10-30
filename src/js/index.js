import "../scss/main.scss";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import {mobNav} from "../loaders/nav";
import {assignClass, assignStyle, createDist} from  "../loaders/hero-distortion";
import {counter, counters, counterOptions} from  "../loaders/counter";
import {slide} from "../loaders/slide";
import img1 from "../img/hero-2x.jpg";
import img2 from "../img/hero-2-2x.jpg";
import img3 from "../img/hero-3-2x.jpg";
import deplace from "../img/14.jpg";




function initCounter() {
    // setting an observer on counter elements
    const countersObserver = new IntersectionObserver((entries) => counter(entries), counterOptions);
    // start observing the selected elements
    counters.forEach(counter => countersObserver.observe(counter));
}

function initDistortion() {
    //changing slides with distortion effect functionality
    function distort() {
        assignClass(titles, "hero__text--selected", index);
        assignClass(indicators, "indicators__indicator--selected", index);
        distortion[index].next();
        setTimeout(() => {
            assignStyle(canvas, "display", "none", "", index);
            distortion[index].previous();
            
        }, 100)
    }
    
    const images = [img1, img2, img3];
    const titles = document.querySelectorAll(".hero__text");
    const indicators = document.querySelectorAll(".indicators__indicator");
    let index = 0;
    const background = document.querySelector(".background");
    const myAnimation1 = createDist(".background", images[0], images[1], deplace);
    const myAnimation2 = createDist(".background", images[1], images[2], deplace);
    const myAnimation3 = createDist(".background", images[2], images[0], deplace);
    const distortion = [ myAnimation1, myAnimation2, myAnimation3];
    const canvas = background.querySelectorAll("canvas");
    
    assignStyle(canvas, "display", "none", "", index);
    
    indicators.forEach((ind, inde) => {
        ind.addEventListener("click", (e) => {
            index = inde;
            distort();	
        })
    });

    const id = setInterval(() => {
        index < images.length - 1 ? index += 1 :  index = 0;
        distort();
    }, 5000);
}


mobNav();
slide();
initCounter();
initDistortion();


