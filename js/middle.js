// Skriv en funktion som tar mitten-elementet
// från den givna arrayen och returnerar det värdet
//
// Hårdkodad index (t.ex. array[2]) är fel svar, utgå från att du inte vet längden på
// arrayen men att den alltid är ojämnt lång (dvs: 1, 3, 7, 9, 13).

const middle = (array) => {
  const evenArray = array.length - 1;
  const count = evenArray / 2;
  const middleValue = array[count];
  return middleValue;
};

const result1 = middle(["1", "2", "3", "4", "5"]); // "3"
const result2 = middle(["A", "B", "C", "D", "E", "F", "G", "H", "I"]); // "E"
console.log(result1);
console.log(result2);

module.exports = middle;
