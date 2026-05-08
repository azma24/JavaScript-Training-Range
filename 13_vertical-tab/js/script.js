const items = document.querySelectorAll('.item');
const panels = document.querySelectorAll('.panel');

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    items.forEach((iremove) => {
      iremove.classList.remove('active');
    });
    panels.forEach((premove) => {
      premove.classList.remove('active');
    });

    item.classList.add('active');
    panels[index].classList.add('active');
  });
});