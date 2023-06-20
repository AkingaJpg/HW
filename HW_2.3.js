// sum uneven + numbers

function recursiveOddSumTo(number) {
    if (number <= 0) { 
        return 0; 
    }
    if (number % 2 === 1) { 
        return recursiveOddSumTo(number - 2) 
        + number; 
    }
    if (number % 2 === 0) { 
        return recursiveOddSumTo(number - 1); 
    }
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) //25

function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 1) { sum = sum + i; }
    }
    return sum;
}

console.log(iterativeOddSumTo(1)) // 1       
console.log(iterativeOddSumTo(10)) // 25

