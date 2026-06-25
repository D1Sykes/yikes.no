function main() {
  let verdictsAmount = Math.floor(Math.random() * verdicts.length);
  let evidenceAmount = Math.floor(Math.random() * evidence.length);
  let confidenceAmount = Math.floor(Math.random() * confidence.length);

  let verdictsWord = verdicts[verdictsAmount];
  let evidenceWord = evidence[evidenceAmount];
  let confidenceWord = confidence[confidenceAmount];

  document.getElementById("verdicts").textContent = verdictsWord;
  document.getElementById("evidence").textContent = evidenceWord;
  document.getElementById("confidence").textContent = confidenceWord;
}

function setupButton() {
  const button = document.getElementById("refreshButton");
  button.addEventListener("click", main);
}

main();
setupButton();
