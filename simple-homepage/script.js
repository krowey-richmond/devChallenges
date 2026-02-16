const themeToggle = document.getElementById("theme-toggle");
const openBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const navBar = document.querySelector(".nav__theme");
const logoDiv = document.querySelector(".header__logo");
const logoImage = document.querySelector(".logo__image");


themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    logoImage.src = "./resources/logo-dark.svg";
  } else {
    logoImage.src = "./resources/logo-light.svg";
  }
});

openBtn.addEventListener("click", () => {
  navBar.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("show");
  document.body.style.overflow = "";
});
