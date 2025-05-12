

//
//    The Dark Mode System
//

/* Body and Toggle */
var body = document.querySelector("body");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// Get Status of Dark Mode
let darkMode = localStorage.getItem("darkMode");

// Enable Dark Mode
const enableDarkMode = () => {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled")
}

// Disable Dark mode
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null)
}

// Check the state of dark mode in local storage
if (darkMode == "enabled") {
  enableDarkMode();
}

// add event listener to the dark mode button toggle
darkModeToggle.addEventListener('click', () => {
  // on click, check localstorage for the dark mode value
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    // if dark mode is not enabled, run this function to set it to enabled
    enableDarkMode();
  } else {
    // if dark mode is enabled, run this function to set it to disabled
    disableDarkMode();
  }
})



//
//    English/Spanish
//

var body = document.querySelector("body");
const englishToggle = document.querySelector("#english-button");

let isEnglish = localStorage.getItem("isEnglish");
let isSpanish = localStorage.getItem("isSpanish");

const setToEnglish = () => {
  console.log("Set to english");
  body.classList.add("isEnglish");
  localStorage.setItem("isEnglish", "enabled")
  body.classList.remove("isSpanish");
  localStorage.setItem("isSpanish", null)
}

if (isEnglish == "enabled" || (isEnglish == null && isSpanish == null)) {
  setToEnglish();
}

englishToggle.addEventListener('click', () => {
  console.log("english toggled");
  isEnglish = localStorage.getItem("isEnglish");
  console.log("isEnglish: ", isEnglish);
  if (isEnglish !== "enabled") {
    console.log("set to English");
    setToEnglish();
  } 
})

var body = document.querySelector("body");
const spanishToggle = document.querySelector("#spanish-button");


const setToSpanish = () => {
  body.classList.add("isSpanish");
  localStorage.setItem("isSpanish", "enabled")
  body.classList.remove("isEnglish");
  localStorage.setItem("isEnglish", null)
}

if (isSpanish == "enabled") {
  setToSpanish();
}

spanishToggle.addEventListener('click', () => {
  console.log("Spanish toggled");
  Spanish = localStorage.getItem("isSpanish");
  console.log("isSpanish: ", isSpanish);
  if (Spanish !== "enabled") {
    console.log("set to Spanish");
    setToSpanish();
    console.log("isSpanish: ", isSpanish);
  } 
})