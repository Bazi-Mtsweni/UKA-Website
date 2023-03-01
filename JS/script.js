const menu = document.querySelector(".mobile-menu");
const nav = document.querySelector("#navigation");
const submitBtn1 = document.querySelectorAll(".submit-btn1");
const submitBtn2 = document.querySelectorAll(".submit-btn2");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

AOS.init();

// function validateForm(e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const tel = document.getElementById("tel").value;
//   const message = document.getElementById("message").value;

  
// }

// submitBtn1.addEventListener("click", function (){
//     console.log("Hello");
// })