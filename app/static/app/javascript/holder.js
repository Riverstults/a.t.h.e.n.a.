var LGT_BTN = document.getElementById("darkMode");

console.log(LGT_BTN);

// LGT_BTN.addEventListener("click", function () {
//   console.log("changing to lightmode");
//   document.body.style.background = "white";
// });

function darkTheme() {
  document.body.style.background = "#1f1a24";
  document.body.style.color = "#bb86fc";
}

function lightTheme() {
  document.body.style.background = "white";
  document.body.style.color = "black";
}

LGT_BTN.addEventListener("change", function () {
  localStorage.setItem("dark", this.checked);
  if (this.checked) {
    darkTheme();
  } else {
    lightTheme();
  }
});

console.log(localStorage.getItem("dark"));

function check() {
  if (localStorage.getItem("dark") == true) {
    console.log("dark");
    darkTheme();
  } else if (localStorage.getItem("dark") == false) {
    console.log("light");
    lightTheme();
  }
}

check();
