(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  // RESULT BUTTON - condition: execute the result only if screen is not empty
  equal.addEventListener("click", (e) => {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let result = eval(screen.value);
      screen.value = result;
    }
  });

  clear.addEventListener("click", (e) => {
    screen.value = "";
  });
})();
