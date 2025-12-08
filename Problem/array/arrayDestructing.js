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

 //T-008: Take out the last 8 food items from the above array using the Array destructuring. 
 // Hint: rest parameter.
 const length  = foods.length;
 console.log(length);
 const [fristIndex, secondIndex, ...lastEightindex]= foods;
 console.log(lastEightindex);

 //Clone an Array(Shallow cloning)

 const numbers = [1,2,3,4,{x:10}];
 const clone = [...numbers];
 numbers[4].x = 400;
    console.log(numbers[4].x);
    console.log(clone[4].x);