const btn = document.querySelector('#btn');
const msg = document.querySelector('#msg');

btn.addEventListener('click', function () {
	msg.textContent = 'ご予約はすでに承っております。';
});
