const amount = document.getElementById("amount");
const percentage = document.getElementById("percentage");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  result.value = (amount.value * percentage.value) / 100;
});
