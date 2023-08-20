const resOne = { id: 1234 };
const resTwo = { id: 5678 };
const resThree = { id: 9012 };
const resFour = { id: 3456 };

const surveryResponse = new WeakSet();

// add
surveryResponse.add(resOne).add(resTwo).add(resThree).add(resFour);
console.log(`surveryResponse : ${surveryResponse}`); // weakSet obj
// has
console.log(`Does our weakSet have 9012?, ${surveryResponse.has(resThree)}`); // false
console.log(
  `Does our weakSet have 0123, ${surveryResponse.has({ id: '0123' })}`
); // false

// delete
surveryResponse.delete(resThree); // true
console.log(`Has resThree ? ${surveryResponse.has(resThree)}`); // false
