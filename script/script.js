const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    mobile.classList.toggle("active");
});

const navlink = document.querySelectorAll(".menu__link");
const btn = document.querySelectorAll(".button");

btn.forEach(n=> n.addEventListener("click", closeMenu))

navlink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    mobile.classList.remove("active");
}