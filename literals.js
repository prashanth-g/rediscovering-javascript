console.log("---- template literals -----");

const price = 50.50;

const template = function() {
    console.log(`The price of the device is $${price}`);
}

template();

console.log("\n---- object literals with lexical scoped variables -----")
const name = 'Google Home';
const devicePrice = 25;
const device = {
    name,
    devicePrice
};

console.log(device);