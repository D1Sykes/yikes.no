function main() {
  
  const verdicts = [
    "Nei",
    "Sannsynligvis ikke",
    "Kanskje",
    "Teknisk sett ja",
    "Kun under tvang"
];

const evidence = [
    "ble observert ved kaffemaskinen.",
    "skylder på sykdom.",
    "var i møte om et møte.",
    "sendte én e-post og kalte det en produktiv dag.",
    "har åpnet Excel."
];

  let verdictsAmount = Math.floor(Math.random() * verdicts.length);
  let evidenceAmount = Math.floor(Math.random() * evidence.length);

  let verdictsWord = verdicts[verdictsAmount];
  let evidenceWord = evidence[evidenceAmount];

  document.getElementById("verdicts").textContent = verdictsWord;
  document.getElementById("evidence").textContent = evidenceWord;

}

function setupButton() {
  const button = document.getElementById("refreshButton");
  button.addEventListener("click", main);
}

main();
setupButton();
