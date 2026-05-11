const targets = document.querySelectorAll('.fade-target');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

targets.forEach((element) => {
  observer.observe(element);
});
