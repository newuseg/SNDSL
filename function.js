function togg() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle("navs")
    var box = document.querySelector('.box');
    box.classList.toggle('js');
}
function home() {
    location.reload();  // reload the current page...
}