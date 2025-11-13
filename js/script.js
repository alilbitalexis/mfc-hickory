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
const inclementWeatherDate = "November 4, 2025";
const thanksgivingDates = ["November 27, 2025", "November 28, 2025"];
const tgEarlyDate = new Date(thanksgivingDates[0]);
new Date(tgEarlyDate.setDate(tgEarlyDate.getDate() - 14));
console.log(new Date(thanksgivingDates[0]));
console.log(tgEarlyDate);

function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "America/New_York",
  }).format(date);
}

const banner = document.querySelector(".banner");
const today = new Date();
console.log(today >= tgEarlyDate);
console.log(today <= new Date(thanksgivingDates[0]));
console.log(today);

if (!!banner) {
  if (formatDate(today) === formatDate(new Date(inclementWeatherDate))) {
    banner.classList.add("active", "inclement-weather");
    document.querySelector(".weather-date").innerHTML = inclementWeatherDate;
  } else if (today >= tgEarlyDate && today <= new Date(thanksgivingDates[1])) {
    banner.classList.add("active", "thanksgiving");
    document.querySelector(".banner-text").innerHTML = `We will be closed on ${thanksgivingDates.join(" and ")} for Thanksgiving.`;
  }
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
