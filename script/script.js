// elements
const navEl = document.getElementById("nav");
const barIconEl = document.querySelector(".menu-btn i");
const listEl = document.querySelectorAll("nav ul li");

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
