class Vehicle {
  run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}

class LCV extends Vehicle {
  capacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());

// необязательно использовать instance класса, можно и передать обычный объект со свойством run, так как "extends" у дженерика работает по типу интерфейса
const customLCV = kmToMiles({run: 3});


// interface IVehicle {
//   run: number;
// }
//
// interface ILCV extends IVehicle {
//   capacity: number;
// }
//
// kmToMiles({run: 8})

function logId<T extends string | number, Y>(id: T, additionalData: Y): { id: T, data: Y } {
  console.log(id);
  return {
    id,
    data: additionalData
  };
}