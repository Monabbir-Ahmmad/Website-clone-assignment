const navHamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

navHamburger.addEventListener("click", () => {
  navHamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
  document.body.classList.toggle("stop-scrolling");
});
