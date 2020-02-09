var navMain = document.querySelector('.header__list--closed');
var navToggle = document.querySelector('.header__toggle');
var navTogglebtn = document.querySelector('.header__toggle');


navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__list--closed')) {
        navMain.classList.remove('header__list--closed');
        navMain.classList.add('header__list--opened');
        navTogglebtn.classList.add('header__toggle--cross');
    } else {
        navMain.classList.add('header__list--closed');
        navMain.classList.remove('header__list--opened');
        navTogglebtn.classList.add('header__nav__toggle');
        navTogglebtn.classList.remove('header__toggle--cross');
    }
});