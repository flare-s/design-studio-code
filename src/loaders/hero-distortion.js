import hoverEffect from "hover-effect";

//function to assign dynamic classes for group of items
export function assignClass(element, name, index) {
	element.forEach(el => el.classList.remove(`${name}`));
	element[index].classList.add(`${name}`);
}

//function to assign dynamic styles for group of items
export function assignStyle(element, property, value, spValue, index) {
	element.forEach(el => el.style[property] = `${value}`);
    element[index].style[property] = `${spValue}`;
}


//function to add distortion to elements
export function createDist(element, img1, img2, deplacement) {
	    const variable  = 
			new hoverEffect({
			parent: document.querySelector(element),
			image1: `${img1}`,
			image2: `${img2}`,
			displacementImage: `${deplacement}`,
			hover: false
			})
		;
		return variable;
}




