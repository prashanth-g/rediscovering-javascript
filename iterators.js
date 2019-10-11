class Wheel { }

class Car {
    constructor() {
        this.wheels = [
            new Wheel(),
            new Wheel(),
            new Wheel(),
            new Wheel(),
        ];
    }

    // Naive implementation
    [Symbol.iterator]() {
        let index = 0;
        const self = this;
        return {
            next: function () {
                return {
                    done: index == 4, value: self.wheels[index++]
                };
            }
        };
    }

    // Generators
    *[Symbol.iterator]() {
       yield *this.wheels;
    }


}

const car = new Car();

for (const wheel of car) {
    console.log(wheel);
}