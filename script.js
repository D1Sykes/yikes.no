function main() {
  let randomNumber = Math.random() * 100;
  let randomNumberRound = Math.round(randomNumber);

  document.getElementById("beerNumber").textContent = randomNumberRound;
}

function beerReduce() {
  const beerCounter = document.getElementById("beerNumber");

  const currentValue = Number(beerCounter.textContent);
  const newValue = currentValue - 1;

  beerCounter.textContent = newValue;
}

function setupButton() {
  const button = document.getElementById("beerButton");
  button.addEventListener("click", beerReduce);
}

main();
setupButton();
