const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const box = document.querySelector('.box');

let position = 0;

plusBtn.addEventListener('click', () => {
	position++;
	box.style.transform = `translateX(${position * 400}px)`;
});

minusBtn.addEventListener('click', () => {
	position--;
	box.style.transform = `translateX(${position * 400}px)`;
});