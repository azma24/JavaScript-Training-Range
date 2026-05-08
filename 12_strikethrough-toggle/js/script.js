const books = document.querySelectorAll('.book');

books.forEach((item) => {
  item.addEventListener('click',()=>{
    item.classList.toggle('read');
  });
});