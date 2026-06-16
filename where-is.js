function main() {

  const locations = [
    "På lokallageret",
    "På serverrommet",
    "På kjøkkenet",
    "På vei til butikken"
  ];

  const activities = [
    "drikker pils",
    "feilsøker nettverk",
    "ignorerer e-post",
    "skylder på DNS",
  ];

  let locationsAmount = Math.floor(Math.random() * locations.length);
  let activitiesAmount = Math.floor(Math.random() * activities.length);

  let locationsWord = locations[locationsAmount];
  let activitiesWord = activities[activitiesAmount];

  document.getElementById("locations").textContent = locationsWord;
  document.getElementById("activities").textContent = activitiesWord;
}

function setupButton() {
  const button = document.getElementById("refreshButton");
  button.addEventListener("click", main);
}

main();
setupButton();
