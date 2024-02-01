// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     // TODO
//     if(distanceToPump / mpg <= fuelLeft) {
//         return true;
//     } else {
//         return false;
//     }
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return distanceToPump / mpg <= fuelLeft;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
