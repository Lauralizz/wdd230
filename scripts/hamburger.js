// JavaScript - hamburger.js
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu');
    const nav = document.querySelector('.navigation');

    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
});
