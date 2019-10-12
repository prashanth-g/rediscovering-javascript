// Oldway
const greetOldWay = function(name) {
    console.log(`Hi--${name}`);
}

greetOldWay(';=; old');

const greetArrow = name => console.log(`Hi--${name}`);

greetArrow(';=; arrow');

// Scoping
const a = 4; // Lexical
this.dynamic = 12; // Dynamic
const base = function(n) {
    console.log(n);
    console.log(a);
    console.log(this.dynamic);
}

const baseArrow = (n) => {
    console.log(n);
    console.log(a);
    console.log(this.dynamic);
}

base.call({dynamic: 56}, 5);
console.log(`---------`);
baseArrow.call({dynamic: 56}, 5);