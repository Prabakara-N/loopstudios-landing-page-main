// elements
const navEl = document.querySelector(".hero-container");
const barIconEl = document.querySelector(".menu-btn i");
const listEl = document.querySelectorAll("nav ul li");
const desktopImageEl = document.querySelectorAll(
  ".image-collections-desktop div"
);
const mobileImageEl = document.querySelectorAll(
  ".image-collections-mobile div"
);
const seeAllBtn = document.getElementById("btn");

// eventlistneres
// navbar
barIconEl.addEventListener("click", () => {
  navEl.classList.toggle("active");
});

listEl.forEach((val) => {
  val.addEventListener("click", () => {
    let activeLi = document.querySelector("nav ul li.active");
    activeLi.classList.remove("active");
    val.classList.add("active");
  });
});

// images for desktop
seeAllBtn.addEventListener("click", () => {
  desktopImageEl.forEach((img) => {
    img.classList.toggle("show");
  });
});

// images for mobile
seeAllBtn.addEventListener("click", () => {
  mobileImageEl.forEach((img) => {
    img.classList.toggle("show");
  });
});
