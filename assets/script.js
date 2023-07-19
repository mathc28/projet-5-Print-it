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

	//const image banière
const carouselImg = document.querySelector(".banner-img");
	//const tagline banière 
const carouselTitle = document.querySelector(".carousel-title");
	//const dot 
const dot = document.querySelectorAll(".dot");
	//const indice début de carousel//
let currentSlide = 0

	//const flèche G & D
let arrow_Left = document.querySelector(".arrow_left");
let arrow_Right = document.querySelector(".arrow_right");


/**
 * Modifie le carousel en fonction d'une slide donnée
 */
function setBannerInformations (slide) {
	carouselTitle.innerHTML = slide.tagLine
	carouselImg.setAttribute('src', `./assets/images/slideshow/${slide.image}`) 
}

/**
 * décrémenter de -1 la constante currentslide
 */
function updateCurrentSlidePrevious(){
	currentSlide = currentSlide - 1;
	if (currentSlide < 0)  {
		currentSlide = 3;
	  }
}

/**
 * incrémenter de +1 la constante currentslide
 */
function updateCurrentSlideNext () {
	currentSlide = currentSlide + 1;
	if (currentSlide > 3)  {
		currentSlide = 0; 
	  }
}

setBannerInformations(slides[currentSlide])

//ajoutEventListener flèche gauche
 arrow_Left.addEventListener("click", function () {

	dot[currentSlide].classList.remove("dot_selected");

	updateCurrentSlidePrevious()
	
	setBannerInformations(slides[currentSlide])
	
	dot[currentSlide].classList.add("dot_selected");

});

//ajoutEventListener flèche droite
arrow_Right.addEventListener("click", function () {
	dot[currentSlide].classList.remove("dot_selected");

	updateCurrentSlideNext()
	
	setBannerInformations(slides[currentSlide])
	
	dot[currentSlide].classList.add("dot_selected");
})









