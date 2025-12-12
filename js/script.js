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
const banner = document.querySelector(".banner");
const today = new Date();

const inclementWeatherDate = "November 4, 2025";
const holidays = {
  thanksgiving: ["November 27, 2025", "November 28, 2025"],
  christmas: ["December 25, 2025", "January 5, 2026"],
};
const tgEarlyDate = getEarlyDate("thanksgiving");
const xmasEarlyDate = getEarlyDate("christmas");

function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "America/New_York",
  }).format(date);
}

function getEarlyDate(holiday) {
  const temp = new Date(holidays[holiday][0]);
  return new Date(temp.setDate(temp.getDate() - 14));
}

function setHolidayMessage(holiday, reason, extraMessage) {
  banner.classList.add("active", holiday);
  document.querySelector(".banner-text").innerHTML = `We will be closed from ${holidays[holiday].join(" to ")} for ${reason}. ${extraMessage ?? ""}`;
  document.querySelector(".holiday-hours").innerHTML = `*Closed ${holidays[holiday].join(" to ")}`;
}

if (formatDate(today) === formatDate(new Date(inclementWeatherDate))) {
  banner.classList.add("active", "inclement-weather");
  document.querySelector(".weather-date").innerHTML = inclementWeatherDate;
} else if (today >= tgEarlyDate && today <= new Date(holidays.thanksgiving[1])) {
  setHolidayMessage("thanksgiving", "Thanksgiving");
} else if (today >= xmasEarlyDate && today <= new Date(holidays.christmas[1])) {
  setHolidayMessage("christmas", "Christmas and floor repairs", "We wish you a safe and happy holiday season!");
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
