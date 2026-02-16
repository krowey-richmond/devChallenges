const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("darkmode");
});


const openBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const navBar = document.querySelector(".nav__theme");

openBtn.addEventListener("click", () => {
  navBar.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("show");
  document.body.style.overflow = "";
});
