// Empty an array using its length property
const cars = [
    "BMW","yahmahs","oyot",
    "Volkswagen",
    "Mercedes-Ben",
    "Ford",
    "BMW",
    'Honda',
    "Tesla",
    "Hyundai",
    "Chevrole",
    "Nissan"
];
console.log(cars);
cars.length = 0;
console.log(cars);
//  Create an Array of 10 elements. Use the splice() method to empty the array.

//what happend if two empty array concatenate
let con = []+[];
console.log("empty Array: ", ([]+[]));
console.log("Concatenate Array type : ",typeof con);
console.log("Concatenate length:", con.length);

