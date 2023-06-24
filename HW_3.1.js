//all args sum, no math

/* function addThemAll(a,b,...args){
    console.log(args);
    let sum = a + b;
    for  (let arg of args) {
        sum += args;
    }
    return sum;
} */

function addThemAll() {
    console.log(arguments);
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    } 
    return sum;
}

console.log(addThemAll(2,4));
console.log(addThemAll(1,2,3,4));
console.log(addThemAll(5,5,10));
