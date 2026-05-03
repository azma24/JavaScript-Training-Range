const btn = document.querySelector('#bgcolor-btn');
const h2 = document.querySelector('h2');

btn.addEventListener('click', function () {
	document.body.classList.toggle('white');
});

btn.addEventListener('click', function () {
	h2.classList.toggle('black');
});