
const menuIcon = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".side-menu");

menuIcon.addEventListener("click", function () {
  sideMenu.classList.toggle("side-menu--open");
});