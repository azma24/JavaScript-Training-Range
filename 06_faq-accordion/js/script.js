const questions = document.querySelectorAll('.accordion-question');

questions.forEach(function (question) {
	question.addEventListener('click', function () {
		const item = question.closest('.accordion-item');
		const answer = item.querySelector('.accordion-answer');
		answer.classList.toggle('is-open');
	});
});