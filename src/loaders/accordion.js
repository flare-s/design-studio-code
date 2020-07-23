
const accordion = Array.from(document.querySelectorAll(".accordion__item"));
// accordion functionality
accordion.forEach(el => {
    // event listener to show the selected content and hide the other content
    el.addEventListener("click", (e) => {
        const target = e.target.closest(".accordion__item");
        const barIcon = target.querySelector(".accordion__icon");
        const content = target.querySelector(".accordion__content");
        accordion.forEach(el => {
            if (target === el) {
                content.classList.toggle("accordion__content--open");
                barIcon.classList.toggle("accordion__icon--open");
            } else {
                el.querySelector(".accordion__content").classList.remove("accordion__content--open");
                el.querySelector(".accordion__icon").classList.remove("accordion__icon--open");

            }
        })
    })
    
    
})