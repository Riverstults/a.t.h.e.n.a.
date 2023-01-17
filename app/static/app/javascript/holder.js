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

if (localStorage.getItem("toggle") === "false") {
  lightTheme();
} else {
  darkTheme();
}

console.log("localstorage('toggle') = " + localStorage.getItem("toggle"));

console.log("localstorage('dark-mode') = " + localStorage.getItem("dark-mode"));

console.log("DRK_BTN:");
console.log(DRK_BTN);

function darkTheme() {
  var box = document.querySelector(".box");
  console.log(box);
  document.body.style.background = "#121212";
  document.body.style.color = "#bb86fc";
  box.style.background = "#1f1a24";
}

function lightTheme() {
  var box = document.querySelector(".box");
  console.log(box);
  document.body.style.background = "#ffffd0";
  document.body.style.color = "#A555EC";
  box.style.background = "#eaeac7";
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
