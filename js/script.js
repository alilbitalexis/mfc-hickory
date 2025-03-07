// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector(".mobile-menu-icon").addEventListener("click", () => {
//     document.querySelector("header nav").classList.toggle("open");
//   });
// });

// get the div element
const myDiv = document.querySelector(".mobile-menu");

// add a click event listener to the div
myDiv.addEventListener("click", function () {
  // specify the action to take when the div is clicked
  console.log("Div was clicked!");
  const nav = document.querySelector("header nav");
  console.log(nav);
  nav.classList.toggle("open");
});

// document.addEventListener("DOMContentLoaded", (e) => {
//   const burgerBtn = document.querySelector(".mobile-menu");
//   const nav = document.querySelector("header nav");

//   const toggleMobileMenu = (e) => {
//     nav.classList.toggle("active");
//     /* you can add your mobile menu functionality here */
//   };
//   if (burgerBtn) {
//     burgerBtn.addEventListener("click", toggleMobileMenu);
//   }
// });
