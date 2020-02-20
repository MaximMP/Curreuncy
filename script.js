const currencyFrom = document.getElementById("curreuncy-one");
const currencyTo = document.getElementById("curreuncy-two");
const amountFrom = document.getElementById("amount-one");
const amountTo = document.getElementById("amount-two");
const spaw = document.getElementById("swap");
const rate = document.getElementById("rate");

currencyFrom.addEventListener("change", calculate);
currencyTo.addEventListener("change", calculate);
amountFrom.addEventListener("input", calculate);
amountTo.addEventListener("input", calculate);

function calculate() {
  const currencyFromVaule = currencyFrom.value;
  const currencyToVaule = currencyTo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFromVaule}`)
    .then(res => res.json())
    .then(data => {
      const rateVaule = data.rates[currencyToVaule];
      rate.innerText = `1 ${currencyFromVaule} = ${rateVaule} ${currencyToVaule}`;
      amountTo.value = (amountFrom.value * rateVaule).toFixed(2);
    });
}
swap.addEventListener("click", () => {
  const temp = currencyFrom.value;
  currencyFrom.value = currencyTo.value;
  currencyTo.value = temp;
  calculate();
});
