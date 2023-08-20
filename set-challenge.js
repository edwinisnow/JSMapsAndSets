const guesses = new Set();
guesses.add('r').add('s').add('t').add('l').add('n').add('e');

const hasP = guesses.has('p');
console.log(`If set has p ${hasP}`); // false
if (!hasP) {
  guesses.add('p');
}
console.log(`If set has p ${guesses.has('p')}`); // true

console.log(`Number of guesses ${guesses.size}`); // 7

console.log(`Delete letter l ${guesses.delete('l')}`); // true
console.log(`Number of guesses ${guesses.size}`); // 6

const guessesValues = guesses.values();
const secondValue = guessesValues.next();
console.log(`Second value ${guessesValues.next().value}`); // s

const guessesEntries = guesses.entries();
console.log(`First entry ${guessesEntries.next().value}`); // r, r

const vowelsStr = 'aeiou';
const vowels = vowelsStr.split('');
guesses.forEach((value) => {
  const lettetType = vowels.includes(value) ? 'vowel' : 'consonant';
  console.log(`The letter ${value} is a ${lettetType}`);
});

guesses.clear();
console.log(`Number of guesses ${guesses.size}`); // 0
