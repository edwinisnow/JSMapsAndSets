const iceCream = new Set();
iceCream
  .add('chocoloate')
  .add('vanilla')
  .add('coffee')
  .add('coffee')
  .add('strawberry')
  .add('vanilla');

console.log(iceCream);

// has => boolean
console.log(
  `Does our set have mint chocoloate chip ${iceCream.has(
    'mint chocoloate chip'
  )}`
); // false

console.log(`Does our set have coffee ${iceCream.has('coffee')}`); // true
console.log(`Our set contains :${iceCream.size} elements`); // 4

// iterator methods

// values
const iceCreamValues = iceCream.values();
iceCreamValues.next();
console.log(`Second item ${iceCreamValues.next().value}`); // vanilla
// entries => [value, value]
const iceCreamEntries = iceCream.entries();
const firstEntry = iceCreamEntries.next().value;
console.log(`First entry is ${firstEntry}`); // chocolate
// hack to return only one values
const [firstValue, secondValue] = iceCreamEntries.next().value;
console.log(`First value is ${firstValue}`); // vanilla

// forEach
iceCream.forEach((value) => {
  if (value !== 'vanilla') {
    console.log('Flavour ::', value);
  }
});

// delete
console.log(` Coffee is removed from list ${iceCream.delete('coffee')}`); // true
console.log(`Our set contains :${iceCream.size} elements`); // 3

// clear
iceCream.clear();
console.log(`Our set contains :${iceCream.size} elements`); // 0
