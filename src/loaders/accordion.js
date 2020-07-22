
const accordion = Array.from(document.querySelectorAll(".accordion__item"));
// accordion functionality
accordion.forEach(el => {
    // event listener to show the selected content and hide the other content
    el.addEventListener("click", (e) => {
        const target = e.target.closest(".accordion__item");
        const barIcon = target.querySelector(".accordion__icon");
        const content = target.querySelector(".accordion__content");
        Array.from(document.querySelectorAll(".accordion__content")).forEach(el => el.classList.remove("accordion__content--open"));
        Array.from(document.querySelectorAll(".accordion__icon")).forEach(el => el.classList.remove("accordion__icon--open"));
        content.classList.toggle("accordion__content--open");
        barIcon.classList.toggle("accordion__icon--open");
    })
    
    
})