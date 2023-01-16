var DRK_BTN = document.querySelector(".dark-button");

var darkMode;

if (localStorage.getItem("dark-mode") !== null) {
  darkMode = localStorage.getItem("dark-mode");
} else {
  var darkMode = "light";
}

localStorage.setItem("dark-mode", darkMode);

var tog;

if (localStorage.getItem("toggle") !== null) {
  tog = localStorage.getItem("toggle");
} else {
  var tog = false;
}

localStorage.setItem("toggle", tog);
console.log("localstorage('toggle') = " + localStorage.getItem("toggle"));

console.log("localstorage('dark-mode') = " + localStorage.getItem("dark-mode"));

console.log("DRK_BTN:");
console.log(DRK_BTN);

function darkTheme() {
  document.body.style.background = "#1f1a24";
  document.body.style.color = "#bb86fc";
}

function lightTheme() {
  document.body.style.background = "white";
  document.body.style.color = "black";
}

DRK_BTN.addEventListener("click", function () {
  if (localStorage.getItem("toggle") === "false") {
    darkTheme();
    localStorage.setItem("toggle", true);
  } else {
    lightTheme();
    localStorage.setItem("toggle", false);
  }
});

// DRK_BTN.addEventListener("change", function () {
//   localStorage.setItem("dark", this.checked);
//   if (this.checked) {
//     darkTheme();
//   } else {
//     lightTheme();
//   }
// });

// function check() {
//   if (localStorage.getItem("dark") === "true") {
//     console.log("dark");
//     darkTheme();
//   } else if (localStorage.getItem("dark") === "false") {
//     console.log("light");
//     lightTheme();
//   }
// }
