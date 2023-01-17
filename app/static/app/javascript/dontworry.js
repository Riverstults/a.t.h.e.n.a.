const one_button = document.querySelector(".one");
const two_button = document.querySelector(".two");
const three_button = document.querySelector(".three");
const four_button = document.querySelector(".four");
const five_button = document.querySelector(".five");
const six_button = document.querySelector(".six");
const seven_button = document.querySelector(".seven");
const eight_button = document.querySelector(".eight");
const nine_button = document.querySelector(".nine");
const zero_button = document.querySelector(".zero");
const done_button = document.querySelector(".done");
const times_button = document.querySelector(".times");
const plus_button = document.querySelector(".plus");
const sub_button = document.querySelector(".sub");
const clear_button = document.querySelector(".clear");
const display_header = document.querySelector(".display");

var storage = "";

one_button.addEventListener("click", function () {
  storage = storage + "1";
  console.log(storage);
  display_header.innerHTML = storage;
});

two_button.addEventListener("click", function () {
  storage = storage + "2";
  console.log(storage);
  display_header.innerHTML = storage;
});

three_button.addEventListener("click", function () {
  storage = storage + "3";
  console.log(storage);
  display_header.innerHTML = storage;
});

four_button.addEventListener("click", function () {
  storage = storage + "4";
  console.log(storage);
  display_header.innerHTML = storage;
});

five_button.addEventListener("click", function () {
  storage = storage + "5";
  console.log(storage);
  display_header.innerHTML = storage;
});

six_button.addEventListener("click", function () {
  storage = storage + "6";
  console.log(storage);
  display_header.innerHTML = storage;
});

seven_button.addEventListener("click", function () {
  storage = storage + "7";
  console.log(storage);
  display_header.innerHTML = storage;
});

eight_button.addEventListener("click", function () {
  storage = storage + "8";
  console.log(storage);
  display_header.innerHTML = storage;
});

nine_button.addEventListener("click", function () {
  storage = storage + "9";
  console.log(storage);
  display_header.innerHTML = storage;
});

zero_button.addEventListener("click", function () {
  storage = storage + "0";
  console.log(storage);
  display_header.innerHTML = storage;
});

clear_button.addEventListener("click", function () {
  storage = "";
  console.log(storage);
  display_header.innerHTML = "Display";
});

plus_button.addEventListener("click", function () {
  storage = storage + " + ";
  console.log(storage);
  display_header.innerHTML = storage;
});

sub_button.addEventListener("click", function () {
  storage = storage + " - ";
  console.log(storage);
  display_header.innerHTML = storage;
});

times_button.addEventListener("click", function () {
  storage = storage + " * ";
  console.log(storage);
  display_header.innerHTML = storage;
});

done_button.addEventListener("click", function () {
  var total = eval(storage);
  console.log(total);
  display_header.innerHTML = total;
  storage = "";
});
