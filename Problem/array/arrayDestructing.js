// T-007: Create an array containing the name of your favourite foods(10 foods). 
// Destructure the 6th food element from the array using destructuring.

const foods = ["chiken","fruits","vegitables","sweet","Ice cream","Salad",'Pizza','Burger','Chocolate','Pasta'];
const [,,,,,six,,,,,] = foods;
console.log(six);

console.log(foods[5]);
//use array method...
let seventh = foods.at(6);
console.log("7th vlaue: ",seventh);
let negtive = foods.at(-1);
console.log(negtive);
//swap element value ....
let gest ="nahid";
let admin ="admin";
 [admin,gest] = [gest,admin];
console.log(admin);

