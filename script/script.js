// elements
const navEl = document.querySelector(".hero-container");
const barIconEl = document.querySelector(".menu-btn i");
const listEl = document.querySelectorAll("nav ul li");
const imageEl = document.querySelectorAll(".image-collections-desktop div");
const seeAllBtn = document.getElementById("btn");

// eventlistneres
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

seeAllBtn.addEventListener("click", () => {
  imageEl.forEach((img) => {
    img.classList.toggle("show");
  });
});
