


export const counters = Array.from(document.querySelectorAll("[data-counter]"));

export const counterOptions = {
    threshold: 0.21,
    rootMargin: "0px"
}



export function counter(entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.2) {

                let count = 0;
                // function that increase the counter untill it reach the target
                const frame = () => {
                    const target = entry.target.getAttribute("data-target");
                    if (count < target) {
                        count++;
                        entry.target.textContent = count;
                    } else {
                        clearInterval(id);
                    }
                }
                // starting the interval with the frame function
                const id = setInterval(frame, 1);
            
        // resetting the element content so it start over when it intersect again
        } else {
            entry.target.textContent = "0";
        }
    });
}