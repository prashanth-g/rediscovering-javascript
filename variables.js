'use strict';
var oldWay = function() {
    console.log('------ Old Way ------')
    var localVar01 = 2;
    {
        var localVar02 = 3;
        console.log(localVar02);
    }
    console.log(localVar01);
    console.log(localVar02);
    var localVar01 = 3;
}

oldWay();

var newWay = function() {
    console.log('------ New Way with "let, const" ------')
    let localVar01 = 2;
    {
        const localVar02 = 3; // Block scope
        console.log(localVar02);
    }
    console.log(localVar01);
}

newWay();

console.log('------ const powered ------')

const factor = 2;
const printData = (element) => console.log(element * factor);
 
printData(4);

console.log('------ immutable objects ------');


const trek = Object.freeze({name: 'Trek', age: 2});

trek.age = 3; // Blows up
console.log(trek);