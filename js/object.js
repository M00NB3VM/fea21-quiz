// Rör ej
const person = {
  firstName: "Oscar",
  lastName: "Nilsson",
  age: 30,
};

// Skriv klart funktionen som skriver ut mitt fulla namn
// OBS: Du får inte ändra funktions-parametrarna.
function printName(first, last) {
  return first.concat(" ", last);
}

// Du kommer även behöva ändra anropet här nedan

// Förstod ej hur jag skulle ändra anropet
printName(person.firstName, person.lastName); // "Oscar Nilsson"

module.exports = printName;
