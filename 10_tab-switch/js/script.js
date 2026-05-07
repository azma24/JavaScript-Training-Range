const tabBtn = document.querySelectorAll('.tab-btn');
const tabBody = document.querySelectorAll('.tab-body');

tabBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    tabBtn.forEach((btn) => {
      btn.classList.remove('active');
    });
    tabBody.forEach((body) => {
      body.classList.remove('active');
    });
    tabBtn[i].classList.add('active');
    tabBody[i].classList.add('active');
  });
});