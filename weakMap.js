const newYork = { city: 'New York' };
const nolo = { city: 'New Orleans' };
const chicago = { city: 'Chicago' };
const losAngles = { city: 'Los Angles' };

const cities = new WeakMap();

// set
cities.set(newYork, 'NY');
cities.set(nolo, 'NO');
cities.set(chicago, 'CG');
cities.set(losAngles, 'LA');
// get
console.log(`What is the value of Nolo weakmap ? ${cities.get(nolo)}`); // NO

const dallas = { city: 'Dallas' };
// has
console.log(`Does our map has dallas? ${cities.has(dallas)}`); // false
console.log(`Does our map has newyork? ${cities.has(newYork)}`); // true
// delete
console.log(`Delete newyork ${cities.delete(newYork)}`); // true
console.log(`Does our map has newyork now? ${cities.has(newYork)}`); // false
