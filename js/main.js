const header = document.getElementById('header')
const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    nav.classList.toggle('open')
});

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
});