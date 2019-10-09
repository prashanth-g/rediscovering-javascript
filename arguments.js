'use strict';
const maxOldWay = function() {
    console.log(arguments);
    let large = 0;
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index] > large) {
            large = arguments[index];
        }
    }
    return large;
}

console.log(maxOldWay(3, 5, 11));

const maxNewWay = function(...numbers) {
    let large = 0;
    for (let index = 0; index < numbers.length; index++) {
        if(arguments[index] > large) {
            large = numbers[index];
        }
    }
    return large;
}

console.log(maxNewWay(1, 8, 21))

// Rest

const maxFunctionalWay = function(...numbers) {
    return numbers.reduce((max, e) => e > max ? e : max);
}

console.log(maxFunctionalWay(1, 8, 31))

// Spread

const values = [4, 9, 13];

console.log(maxFunctionalWay(...values));