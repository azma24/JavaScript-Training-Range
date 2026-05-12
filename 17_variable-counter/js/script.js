const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const display = document.querySelector('#display');

let count = 0;

plusBtn.addEventListener('click', () => {
	count++;
	display.textContent = count;
});

minusBtn.addEventListener('click', () => {
	count--;
	display.textContent = count;
});