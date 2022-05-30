let input = "William B is quiet";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push("u");
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

console.log(resultArray);
resultString = resultArray.join("").toUpperCase();
console.log(resultString);