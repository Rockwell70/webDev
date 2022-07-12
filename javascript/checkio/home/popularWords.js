"use strict";

/** @param {string} text
 * @param {Array} words Words to search for
 * @return {dictionary} Number of occurrences of each word on words
 */
function popularWords(text, words) {
  let counts = {};
  let countKeys = [];
  //line break regex
  const regex = /\n/gm;
  /**Convert text to lowercase, remove leading/trailing spaces
   * and replace line breaks with a single space
   */
  let textNoBreak = text.toLowerCase().trim().replace(regex, " ");
  //Split text into a list of words
  let textWords = textNoBreak.split(" ");
  //Add textWords word count to counts
  textWords.forEach((word) => {
    if (words.includes(word)) {
      counts[word] = counts[word] ? counts[word] + 1 : 1;
    }
  });
  //Create list of counts dictionary values
  for (const [key] of Object.entries(counts)) {
    countKeys.push(key);
  }
  /**Add words list words to count dictionary
   * with a value of zero if word is not in
   * count dictionary.
   */
  words.forEach((word) => {
    if (!countKeys.includes(word)) {
      counts[word] = 0;
    }
  });
  return counts;
}


console.log('Example:')
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']))