import "intersection-observer";
const navButton = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');


export function mobNav() {
    // show the collapsed nav on the small screen
    navButton.addEventListener("click", () => {
        nav.classList.toggle("nav--show");
    });

}





