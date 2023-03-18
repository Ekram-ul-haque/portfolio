burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
logo = document.querySelector('.logo');
front = document.querySelector('.front');

burger.addEventListener('click', () => {
    front.classList.toggle('expand-navbar');
    navbar.classList.toggle('small-nav');
    navList.classList.toggle('icons');
    logo.classList.toggle('icons');
    
})

const content_boxes = document.querySelectorAll('.content');

window.addEventListener('scroll', contentBoxes);

function contentBoxes() {
    const triggerBottom = window.innerHeight;
    
    content_boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })

}