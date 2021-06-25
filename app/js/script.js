const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const navLink = document.querySelectorAll('.navLink');

btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');

    if(header.classList.contains('open')){ // close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

// close menu when it is clicked on
navLink.forEach(item => {
    item.addEventListener('click', () => {
        if(header.classList.contains('open')) {
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        }
    })
})



// Mobile Design 
btnHamburger.addEventListener('touch', function(){
    console.log('open hamburger');

    if(header.classList.contains('open')){ // close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

// close drop down menu when touched

navLink.forEach(item => {
    item.addEventListener('touch', () => {
        if(header.classList.contains('open')) {
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        }
    })
})



