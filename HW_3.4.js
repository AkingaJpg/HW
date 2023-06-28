"use strict";

function detonatorTimerForSpecialOperations(timeInSeconds) {
    let intervalId;
    const func = () => {
        if (timeInSeconds === 0) {
            clearInterval(intervalId);
            console.log("BoOm🎆");
            return;
        }
        console.log(`${timeInSeconds}`)
        timeInSeconds--;
    }
    intervalId = setInterval(func, 1000);
}

detonatorTimerForSpecialOperations(3);


/* function detonatorTimer(delay) {
    console.log(delay);
        if (delay > 0) {
            delay --;
            setTimeout(detonatorTimer, 1000, delay);
        }if(delay === 0) {
            console.log('BOOM!');
        }
    }

detonatorTimer(3); */

