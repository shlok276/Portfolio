var typed = new Typed(".text", {
    strings: ["Computer Engineer", "Computer Engineer", "Computer Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
