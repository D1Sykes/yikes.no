function main() {
  let randomNumber = Math.random() * 100;
  let randomNumberRound = Math.round(randomNumber);

  document.getElementById("beerNumber").textContent = randomNumberRound;
}

function beerReduce() {
  const beerCounter = document.getElementById("beerNumber");

  const currentValue = Number(beerCounter.textContent);
  const newValue = currentValue - 1;

  if (newValue <= 0) {
    beerCounter.textContent = 0;
    document.getElementById("beerWarning").textContent = "DET ER TOMT FOR ØL!";
  }
  else {
    beerCounter.textContent = newValue;
    document.getElementById("beerWarning").textContent = "";
  }
}

function setupButton() {
  const button = document.getElementById("beerButton");
  button.addEventListener("click", beerReduce);
}

main();
setupButton();
