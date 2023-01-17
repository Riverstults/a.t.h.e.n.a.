var box = document.querySelector(".box");
console.log(box);
function darkTheme() {
  document.body.style.background = "#121212";
  document.body.style.color = "#bb86fc";
  box.style.background = "#1f1a24";
}

function lightTheme() {
  document.body.style.background = "#ffffd0";
  document.body.style.color = "#A555EC";
  box.style.background = "#eaeac7";
}

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
