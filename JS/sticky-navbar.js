const navMenu = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (this.scrollY > 200) {
    navMenu.classList.add("nav-scroll-active");
  } else {
    navMenu.classList.remove("nav-scroll-active");
  }
});
