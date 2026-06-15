function main() {
  let randomNumber = Math.random() * 100;
  let randomNumberRound = Math.round(randomNumber);

  document.getElementById("beerNumber").textContent = randomNumberRound;
}

main();
