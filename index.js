// construct a map
const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

// console.log(saturday); // Map

// get
console.log(saturday.get(1)); // undefined
console.log(saturday.get(8)); // walk the dogs

// has
console.log(saturday.has(1)); // false
console.log(saturday.has(8)); // true

// size
console.log(saturday.size); // 3

// delete
console.log(saturday.delete(1)); // false
console.log(saturday.delete(8)); // true
console.log(saturday.size); // 2

// clear
// console.log(saturday.clear()); // undefined
// console.log(saturday.size); // 0

// keys (iterator)
const satKeys = saturday.keys();
const firstKey = satKeys.next().value;
console.log('firstKey', firstKey); // 12

// values (iterator)
const satValues = saturday.values();
satValues.next();
const secondValue = satValues.next().value;
console.log('secondValue', secondValue); // watch a movie

// enteries (iterator)
const satEntries = saturday.entries();
satEntries.next();
const movieEntry = satEntries.next().value;
console.log('movieEntry ', movieEntry); // [3, 'watch a movie']

// ForEach (value, key, map)
saturday.forEach((value, key) => {
  console.log(`${key} ---> ${value}`);
  // 12 ----> lunch
  // 3 ---> watch a movie
});
