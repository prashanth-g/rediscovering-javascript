'use strict';

console.log('---- Old way Prototypal inheritance ----');

const car = { 'name': 'Bently' };

const use = function(vehicle) {
    try {
        vehicle.openDoor();
    } catch (error) {
        console.log('Oh oh some error!, Probably method not found');
    }
}

use(car);

const truck = {
    openDoor: function() {
        console.log('Opening the door...');
    }
}

Object.setPrototypeOf(car, truck);

use(car);

const Car = function() {
    this.drive = function(distance) {
        this.miles = distance;
    }
}

Car.prototype.miles = 0;

const car1 = new Car();
const car2 = new Car();

console.log(car1.miles);

car1.drive(10);
console.log(car1.miles);
console.log(car2.miles);

console.log('---- New Way ----');

class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    toString() {
        return `${this.first} ${this.last}`;
    }
}

class CoolPerson extends Person {
    constructor(first, last, index) {
        super(first, last);
        this.index = index;
    }

    toString() {
        return `${super.toString()} ${this.index}`;
    }
}

const alan = new CoolPerson('alan', 'turing', 100);

console.log(alan);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(alan)));
