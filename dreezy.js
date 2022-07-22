const openMenu = document.querySelector('.logo1 .hamburger');
const closeMenu = document.querySelector('nav .cancel');
const nav = document.querySelector('nav');



openMenu.addEventListener('click', ()=> {
    nav.style.top = '0';
});

closeMenu.addEventListener('click', () => {
    nav.style.top = '-100vh';
});


    
    


