const input = document.querySelector('#input');
const msgName = document.querySelector('#msg-name');

input.addEventListener('keyup', function () {
	msgName.textContent = input.value;
});