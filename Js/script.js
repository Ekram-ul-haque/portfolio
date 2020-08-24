burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
logo = document.querySelector('.logo');

burger.addEventListener('click', ()=> {
    navbar.classList.toggle('small-nav');
    navList.classList.toggle('icons');
    logo.classList.toggle('icons');
    
})
