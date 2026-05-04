const menuBtn = document.querySelector('#hamburgerBtn');
const nav = document.querySelector('#nav');

menuBtn.addEventListener('click', function () {
	nav.classList.toggle('is-open');
});