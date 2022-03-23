// mission car fleet
// define an array object
const fleet = [
  {
    id: '2020-04',
    make: 'Toyota',
    mileage: 57620,
  },
  {
    id: '2021-02',
    make: 'Toyota',
    mileage: 24800,
  },
  {
    id: '2021-03',
    make: 'Nissan',
    mileage: 18230,
  },
  {
    id: '2020-10',
    make: 'Ford',
    mileage: 23450,
  },
  {
    id: '2020-11',
    make: 'Ford',
    mileage: 50800,
  }
];

console.log(fleet);
console.log('Array length: ', fleet.length);

// read
console.log('First Item: ', fleet[0]);
console.log('Third Item: ', fleet[2]);
console.log('Last Item: ', fleet[fleet.length - 1]);

// write
console.log('***************  write *******************');
fleet[2].mileage = 30000;
console.log('Third Item: ', fleet[2]);

// push
console.log('***************  push *******************');
let newVehicle = {};
newVehicle.id = "2022-07";
newVehicle.make = "Hyundai";
newVehicle.mileage = 100;
fleet.push(newVehicle);
console.log('Push - new last item: ', fleet[fleet.length - 1]);

// for loop
console.log('*************** forEach method *******************');
fleet.forEach(outputfn);

function outputfn(vehicle) {
  console.log(`${vehicle.make}(${vehicle.id.substring(0,4)}): ${vehicle.mileage}`);
}

console.log('*************** sorted by mileage *******************');
const sortedFleet = fleet.sort((a, b) => b.mileage - a.mileage);
fleet.forEach(outputfn);

console.log('************** filter for 2021 vehicles ********************');
const fleet2021 = fleet.filter(x => x.id.charAt(3) === '1');
console.log(fleet2021);

console.log('************** reduce for total mileage ********************');
const totalMileage = fleet.reduce((total, vehicle) => total + vehicle.mileage, 0);
console.log(`Total Mileage: ${totalMileage.toLocaleString("en-US")} miles.`);

console.log('************** find instance - return object ********************');
const findFirstFord = fleet.find(vehicle => vehicle.make === 'Ford');
console.log(`First Ford ID: ${findFirstFord.id}`);

console.log('************** SOME - return boolean ********************');
const milemark = 1000;
const carlessthan1000miles = fleet.some((vehicle) => vehicle.mileage < milemark);
console.log(`Exists: ${carlessthan1000miles}`);