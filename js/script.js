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

const date = new Date();

// add current year to footer
const currentYear = (document.querySelector(".current-year").innerHTML = date.getFullYear());

// add inclement weather banner based upon weather date
const inclementWeatherDate = "February 19, 2025";

function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "America/New_York",
  }).format(date);
}

const inclementWeatherBanner = document.querySelector(".inclement-weather");

if (!!inclementWeatherBanner) {
  if (formatDate(new Date()) === formatDate(new Date(inclementWeatherDate))) {
    inclementWeatherBanner.classList.add("active");
  }
  document.querySelector(".weather-date").innerHTML = inclementWeatherDate;
}

// change menu viewed
const menuButtons = document.querySelectorAll(".menu-buttons button");
menuButtons.forEach((mb) =>
  mb.addEventListener("click", () => {
    if (!mb.classList.contains("active")) {
      menuButtons.forEach((mb2) => mb2.classList.toggle("active"));
      document.querySelectorAll(".left-menu, .right-menu").forEach((menu) => menu.classList.toggle("active"));
    }
  })
);
