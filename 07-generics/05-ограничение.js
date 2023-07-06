"use strict";
class Vehicle {
    constructor() {
        this.run = 4;
    }
}
class LCV extends Vehicle {
    constructor() {
        super(...arguments);
        this.capacity = 3;
    }
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({
    run: 55
});
function kmToMiles2(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
kmToMiles2({
    run: 43
});
function logId(id, additionData) {
    console.log(id);
    console.log(additionData);
    return {
        id,
        data: additionData
    };
}
