//check array method static or not...

const numbres= [1,3,4,5,6,6];
Array.isArray(1);
console.log(Array.isArray(numbres));

const newArray  = Array.of(1,2,4,55);
console.log(newArray);

//create array useing the constructor with 5  elements;

const cars = new Array("BMW","Toyoto","Marcidus","ff",'eee');
console.log(Array.isArray(cars));

// create an array of  3 empty slot...
 
const flowers = new Array(3);
console.log(flowers);
//create array 6 elements useing  array litarel  and access 4 element useing length property;


const colors = ['red','green','white',"black","yellow","brown"];
const length = colors.length;
console.log(length);
console.log(colors[length-3]);
