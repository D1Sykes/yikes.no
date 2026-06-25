function main() {
  let locationsAmount = Math.floor(Math.random() * locations.length);
  let activitiesAmount = Math.floor(Math.random() * activities.length);
  let confidenceAmount = Math.floor(Math.random() * confidence.length);
  let locationsWord = locations[locationsAmount];
  let activitiesWord = activities[activitiesAmount];
  let confidenceWord = confidence[confidenceAmount];

  document.getElementById("locations").textContent = locationsWord;
  document.getElementById("activities").textContent = activitiesWord;
  document.getElementById("confidence").textContent = confidenceWord;
}

function setupButton() {
  const button = document.getElementById("refreshButton");
  button.addEventListener("click", main);
}

main();
setupButton();
