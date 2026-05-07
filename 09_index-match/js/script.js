const btns = document.querySelectorAll('.btn');
const texts = document.querySelectorAll('.text');

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    texts.forEach((text) => {
      text.classList.remove('active');
    });
    texts[i].classList.add('active');
  });
});