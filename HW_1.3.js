const resultArray = [1, 2, [3, [4]]];

const initialValue = 1;
const product = resultArray.flat(Infinity).reduce(
(prev, current) => {
  return prev * current;
},
initialValue
);

console.log(product);
