const moviesList = new Map();
moviesList.set(2020, 'Parasite');
moviesList.set(2019, 'Green Book');
moviesList.set(2018, 'The Shape of Water');
moviesList.set(2017, 'Moonlight');
moviesList.set(2016, 'Spotlight');
moviesList.set(2015, 'Birdman');
moviesList.set(2014, '12 Years a Slave');
moviesList.set(2013, 'Argo');

console.log(`What film won best pictures in 2015 ${moviesList.get(2015)}`); // Birdman

console.log(
  `Does this list contain Best Picture from 2010? 2018? ${moviesList.has(
    2010
  )}, ${moviesList.has(2018)}`
); // false, true

console.log(`How many films are included in this list ${moviesList.size}`); // 8

const movieKeys = moviesList.keys();
movieKeys.next();

console.log(
  `What is the second key in this movies Map? ${movieKeys.next().value}`
); // 2019

const movieValues = moviesList.values();
movieValues.next();
movieValues.next();

console.log(
  `What is the third value in this movies Map? ${movieValues.next().value}`
); // The Shape of Water

const firstEntriesSet = moviesList.entries();
console.log(
  `What is the first set of enteries in the movies map ${
    firstEntriesSet.next().value
  }`
); // [2020, 'Parasite']

moviesList.forEach((value, key) => {
  if (key < 2017) {
    console.log(`${key} : ${value}`);
  }
});

moviesList.delete(2013);
console.log('Movies map after delete 2013', moviesList.has(2013)); //false

moviesList.clear();
console.log(`Did my map clear ${moviesList.size}`); // 0
