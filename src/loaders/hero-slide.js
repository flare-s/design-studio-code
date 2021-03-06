const slides = Array.from(document.querySelectorAll("[data-hero]"));

const lastSlide = slides.length - 1;
let index = 0;

export function heroSlide() {
    //changing slides every 5s
    setInterval(() => {
        index < lastSlide ? index++ : index = 0;
        changeSlide();
    }, 5000);
}


// the functionality of changing slides
const changeSlide = () => {
    slides.forEach(slide => {
        slide.classList.remove("hero-slide--selected");
        slide.querySelector(".hero-slide__text").classList.remove("hero-slide__text--selected");
    });
    slides[index].classList.add("hero-slide--selected");
    slides[index].querySelector(".hero-slide__text").classList.add("hero-slide__text--selected");
}