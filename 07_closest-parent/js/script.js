const changeBtns = document.querySelectorAll('.change-btn');

changeBtns.forEach(function (btn) {
	btn.addEventListener('click', function () {
		const card = btn.closest('.card');
		card.classList.toggle('change-bgcolor');
	});
});