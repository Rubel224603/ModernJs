//  T-018: Can you give examples of sparse and dense arrays?
//sparse array means some index has empty element
//dense array has not empty elements

const sparArray = ["Rahim","Karim","Asif","",,"Nahid"];
console.log(sparArray.length);
const dens = [21,3,50,3,3,3,3];
console.log(dens);

const hasHoles = Object.keys(sparArray).length !== sparArray.length;

console.log("Yes, empty slot hase available: ",hasHoles);

let fil= sparArray.fill(1,3);
console.log(fil);
