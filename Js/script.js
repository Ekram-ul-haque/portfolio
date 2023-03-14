burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
logo = document.querySelector('.logo');
front = document.querySelector('.front');

burger.addEventListener('click', ()=> {
    front.classList.toggle('expand-navbar');
    navbar.classList.toggle('small-nav');
    navList.classList.toggle('icons');
    logo.classList.toggle('icons');
    
})
