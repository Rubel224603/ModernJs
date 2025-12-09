//  T-018: Can you give examples of sparse and dense arrays?
//sparse array means some index has empty element
//dense array has not empty elements

const sparArray = ["Rahim","Karim","Asif","",,"Nahid"];
console.log(sparArray.length);
const dens = [21,3,50,3,3,3,3];
console.log(dens);

const hasHoles = Object.keys(sparArray).length !== sparArray.length;

console.log("The array has empty element: ",hasHoles);
const checkDenseArry = dens.length === Object.keys(dens).length;
console.log("Dense array:= ",checkDenseArry);

let fil= sparArray.fill(1,3);
console.log(fil);
