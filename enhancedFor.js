const beverages = ['Coffee', 'Green Tea'];

console.log(`--- Imperative ---`);
for (let index = 0; index < beverages.length; index++) {
    console.log(`${index} -- ${beverages[index]}`);
}

console.log(`--- Destructuring ---`);

for(const [i, beverage] of beverages.entries()) {
    console.log(`${i} -- ${beverage}`);
}