// Skriv en funktion som räknar antalet tecken
// som anges som parameter till funktionen

function count(string) {
  return string.length;
}

// Ändra inte dessa
const result = count("ABCDEFG123");
console.log(result); // 10

module.exports = count;
