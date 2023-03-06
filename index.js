const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-content');

menuBtn.onclick = function show() {
  nav.classList.toggle('show');
};