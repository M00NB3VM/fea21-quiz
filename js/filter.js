// Skriv en funktion som tar bort räliga matvaror från
// en given array och returnerar en ny array med acceptabel mat.
// Använd dig av .filter()

const nastyFoods = ["Pannkakor", "Lingonsylt", "Fläsksvålar"];

function noNastyFood(array) {
  return array.filter((i) => !nastyFoods.includes(i));
}

const result = noNastyFood([
  "Korv",
  "Sylta",
  "Pannkakor",
  "Chips",
  "Lingonsylt",
]);
console.log(result); // ["Korv", "Sylta", "Chips"]

module.exports = noNastyFood;
