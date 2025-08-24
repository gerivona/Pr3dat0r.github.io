// Mobile menu toggle
const menu = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});