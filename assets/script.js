const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bulletPoints = document.querySelector(".dots")
const tagLine = document.querySelector("#banner p");

let currentSlide = 0;

function changeSlide(direction) {
    switch (direction) {
        case "left":
            currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
            break;
        case "right":
            currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
            break;
		default:
            console.error(`Invalid direction. Expected "left" or "right".`);
            return; 
    }
    updateSlide();
}

arrowLeft.addEventListener("click", function() {
    changeSlide("left");
});

arrowRight.addEventListener("click", function() {
    changeSlide("right");
});

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("span");
	dot.classList.add("dot");

	if (i === 0) {
		dot.classList.add("dot_selected");
	}

	dot.addEventListener("click", function() {
		currentSlide = i;
		updateSlide();
	})

	bulletPoints.appendChild(dot);
}

function updateSlide() {
	const imagePath = "./assets/images/slideshow/" + slides[currentSlide].image;
	const taglineContent = slides[currentSlide].tagLine;
	document.querySelector(".banner-img").src = imagePath;
	tagLine.innerHTML = taglineContent;

	const dotSelected = bulletPoints.querySelector(".dot_selected");
	const nextDot = bulletPoints.children[currentSlide];
	dotSelected.classList.remove("dot_selected");
	nextDot.classList.add("dot_selected");
}