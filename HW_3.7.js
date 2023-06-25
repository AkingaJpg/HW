function someFunction() {
    let mau = ("Cat meows 🐈")
    console.log(arguments);
    console.log(mau);
    return;
}


function slower(func, seconds) {
    function wrapper(...args) {
        console.log("Chill out, you will get you result in 5 seconds");
        setTimeout(() => someFunction(...args), seconds * 1000);
    }
    return wrapper;
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(1)