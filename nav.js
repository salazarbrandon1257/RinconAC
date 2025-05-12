//
//    Toggle Mobile Navigation
//
const navbarMenuSpanish = document.querySelector("#navigation #navbar-menu.spanish");
const navbarMenuEnglish = document.querySelector("#navigation #navbar-menu.english");

const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
    navbarMenuSpanish.classList.toggle("open");
    navbarMenuEnglish.classList.toggle("open");
    hamburgerMenu.classList.toggle("clicked");
});
