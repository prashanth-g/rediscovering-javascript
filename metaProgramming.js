'use strict';

const classFactory = function(...properties) {
    return class {
        constructor(...values) {
            for (const [index, property] of properties.entries()) {
                this[property] = values[index];
            }
        }
    };
}

const Book = classFactory('title', 'pages');

console.log(typeof(Book));

const book01 = new Book("Joker", 100);

console.log(typeof(book01));
console.log(book01);

const Car = classFactory('color', 'price');

const car = new Car('green', '$20K');

console.log(typeof(car));
console.log(car);