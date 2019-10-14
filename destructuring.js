console.log('---- Array destructuring ----');

const getPerson = function () {
    return ['one', 'two', 'three'];
}

const [one, ...rest] = getPerson();

console.log(`${one} ${rest}`);

console.log('\n---- Object destructuring ----');

const getPersonObject = function () {
    return { first: 'one', middle: 'two', last: 'three' }
};

const {first, middle, last} = getPersonObject();

console.log(`${first} ${middle} ${last}`);