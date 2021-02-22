const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
});

const showMenu = () => {
    const menuBtn = document.getElementById('menu-btn'),
    nav = document.getElementById('nav')

    if(menuBtn && nav) {
        menuBtn.addEventListener('click', ()=> {
            menuBtn.classList.toggle('open')
            nav.classList.toggle('open')
        })
    }
};

showMenu();

const back = () => {
    const backBtn = document.getElementById('back-btn')

    if(backBtn) {
        backBtn.addEventListener('click', ()=> {
            window.history.go(-1)
        }) 
    }
};

back();