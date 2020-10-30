
export function initTablist() {
    const tabs = Array.from(document.querySelectorAll("[data-tab]"));
    const tabsContent = Array.from(document.querySelectorAll("[data-content]"));
    // tablist functonality
    tabs.forEach(tab => {
        // event listener to show the selected content and hide the other content
        tab.addEventListener("click", (e) => {
            const target = e.target.getAttribute("data-tab");
            document.querySelector(".tabs__content--show").classList.remove("tabs__content--show");
            document.querySelector(`[data-content="${target}"]`).classList.add("tabs__content--show");
            tabs.forEach(tab => {
                (tab.getAttribute("data-tab") === target) ? tab.classList.add("tabs__tab--selected") : tab.classList.remove("tabs__tab--selected");
            });


        })
    });
}