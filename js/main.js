const toggleMenu = document.getElementById('toggle-menu')
const toggleClose = document.getElementById('toggle-close')
const banner = document.getElementById('banner')

toggleMenu.addEventListener('click', () => {
    toggleClose.style.display='block'
    toggleMenu.style.display='none'
    banner.classList.toggle('show')
})

toggleClose.addEventListener('click', () => {
    toggleClose.style.display='none'
    toggleMenu.style.display='block'
    banner.classList.remove('show')
})