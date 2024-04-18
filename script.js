var navbar = document.querySelector(".navbar");

function showMenu() {
    navbar.style.right = "0px";
}

function hideMenu() {
    navbar.style.right = "-200px";
}

window.addEventListener("scroll", function(){
var header = this.document.getElementById("header");
header.classList.toggle("stikcy", window.scrollY > 0);
});