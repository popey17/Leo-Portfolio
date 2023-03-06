const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-content');
const closeBtn = document.querySelector('.close-btn');

menuBtn.onclick = function show() {
  nav.classList.add('show');
};

closeBtn.onclick = function close() {
  nav.classList.remove('show');
};
