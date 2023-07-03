function multiply(x) {
    if (!x) {
      return;
    } else {
      return function(y) {
        return x * y; // Return the multiplication of x and y
      };
    }
  }
  
  console.log(multiply(2)(-2));
  console.log(multiply(5)(5));
  console.log(multiply(4)(3));
  
  