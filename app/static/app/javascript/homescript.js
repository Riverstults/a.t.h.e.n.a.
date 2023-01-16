function darkTheme() {
  document.body.style.background = "#1f1a24";
  document.body.style.color = "#bb86fc";
}

function lightTheme() {
  document.body.style.background = "white";
  document.body.style.color = "black";
}

function check() {
  if (localStorage.getItem("dark") === "true") {
    console.log("dark");
    darkTheme();
  } else if (localStorage.getItem("dark") === "false") {
    console.log("light");
    lightTheme();
  }
}

check();
