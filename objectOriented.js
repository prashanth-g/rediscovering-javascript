'use strict';
console.log('--- Old way ---');

const Car = function() {
    console.log(new.target);
    console.log('Inside Car');
}

new Car();
Car();

console.log('--- New way ---');

class NewCar {
    constructor(year) {
        this.year = year;
        this.miles = 0;
        this.color = 'green';
    }

    drive(distance) {
        this.miles += distance;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

}

const newCar = new NewCar(2019);

console.log(newCar);
newCar.color = 'red';
console.log(newCar);

