// JavaScript - hamburger.js

const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('.navigation');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

const modeButton = document.querySelector('#mode');
const page = document.querySelector('html');
//const dark = document.querySelector('#darkBtn');
//const light = document.querySelector('#lightBtn');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('dark')) {
        page.style.background = '#474847';
        modeButton.textContent = 'light';
    } else {
        page.style.background = 'white';
        page.style.color = 'black'
        modeButton.textContent = 'dark';
    }
})