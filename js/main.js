const toggleMenu = document.getElementById('toggle')
const header = document.getElementById('header')

toggleMenu.addEventListener('click', () => {
    header.classList.toggle('show')
})