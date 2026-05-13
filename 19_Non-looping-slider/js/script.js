const sliderList = document.querySelector('.slider-list');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let slideIndex = 0;

function updateSlider() {
	sliderList.style.transform = `translateX(${-slideIndex * 400}px)`;
}

nextBtn.addEventListener('click', () => {
	if (slideIndex < slides.length - 1) {
		slideIndex++;
	} else {
		slideIndex = 0;
	}
	updateSlider();
});

prevBtn.addEventListener('click', () => {
	if (slideIndex > 0) {
		slideIndex--;
	} else {
		slideIndex = slides.length - 1;
	}
	updateSlider();
});