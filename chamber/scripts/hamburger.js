// JavaScript - hamburger.js

const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('.navigation');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})