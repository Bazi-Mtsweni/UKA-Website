const menu = document.querySelector(".mobile-menu");
const nav = document.querySelector("#navigation");

menu.addEventListener('click', ()=> {
    nav.classList.toggle("show");
})