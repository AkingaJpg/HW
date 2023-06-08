const resultArray = [1, 2, [3, [4]]];

function multiplyArrayElements(array) {
  let multipliedArray = 1;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      multipliedArray *= multiplyArrayElements(array[i]);
    } else {
      multipliedArray *= array[i];
    }
  }

  return multipliedArray;
}

const productofArray = multiplyArrayElements(resultArray);
console.log(productofArray);