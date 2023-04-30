class Vehicle {
  run: number = 4;
}

class LCV extends Vehicle {
  capacity: number = 3;
}


function kmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({
  run: 55
})




// с интерфейсами тоже возможно
interface Vehicle2 {
  run: number;
}

interface LCV2 extends Vehicle2 {
  capacity: number;
}

function kmToMiles2<T extends Vehicle2>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}


kmToMiles2({
  run: 43
})







function logId<T extends string | number, Y>(id: T, additionData: Y): { id: T, data: Y } {
  console.log(id);
  console.log(additionData);
  return {
    id,
    data: additionData
  }
}
