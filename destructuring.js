console.log('---- Array destructuring ----');

const getPerson = function () {
    return ['one', 'two', 'three'];
}

const [one, ...rest] = getPerson();

console.log(`${one} ${rest}`);

console.log('\n---- Object destructuring 01 ----');

const getPersonObject = function () {
    return { first: 'one', middle: 'two', last: 'three' }
};

const {first, middle, last} = getPersonObject();

console.log(`${first} ${middle} ${last}`);

console.log('\n---- Object destructuring 02 ----');

const printIt = function({name, age, 
    residential_address: { street },
    mailing_address: { street: mailing_street }}) {
    console.log(`${name} is ${age} years old`);
    console.log(street);
    console.log(mailing_street);
}

const xin = {
    name: 'Xin',
    age: 20,
    residential_address: { street: '101, Main Street'},
    mailing_address: { street: '102, West Street'},
}

printIt(xin);