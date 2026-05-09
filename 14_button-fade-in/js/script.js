const trigger = document.querySelector('.trigger');
const fade = document.querySelector('.fade-target');

trigger.addEventListener('click',()=>{
  fade.classList.add('visible');
})