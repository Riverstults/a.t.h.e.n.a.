function darkTheme() {
  document.body.style.background = "#1f1a24";
  document.body.style.color = "#bb86fc";
}

function lightTheme() {
  document.body.style.background = "white";
  document.body.style.color = "black";
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
