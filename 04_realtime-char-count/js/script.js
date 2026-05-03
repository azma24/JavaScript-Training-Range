const textarea = document.querySelector('#textarea');
const count = document.querySelector('#count');

textarea.addEventListener('keyup', function () {
	count.textContent = textarea.value.length;
});