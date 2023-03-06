const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-content');
// const closeBtn = document.querySelector('.close-btn')

menuBtn.onclick = function show() {
  nav.classList.toggle('show');
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-xmark');
};
