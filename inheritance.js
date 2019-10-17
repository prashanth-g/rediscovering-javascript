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