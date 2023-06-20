const nav = document.getElementById("nav");
const xmark = document.getElementById("xmark");
const burger = document.getElementById("burger");
const body = document.getElementById("body");

burger.addEventListener("click", () => {
    nav.classList.add("open");
});

xmark.addEventListener("click", () => {
    nav.classList.remove("open");
});