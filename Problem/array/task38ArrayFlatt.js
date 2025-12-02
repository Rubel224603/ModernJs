const arr1 = [0, 1, 2, [3, 4], [5,6,[1,3,3,4,[5,6,7]]]];


console.log(arr1.flat());
const array2 = [1, , 3, undefined, ["a", , ["d", , "e",[3,4,5]]], null];
console.log(array2.flat(2));

//Assume each employee can have multiple skills. Create an array of employee skills and flatten them.
// Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

const employees = [
    {id:1,name:"Jon",depId: 1, skills:["Excell","Management","Development"]},
    {id:2,name:"Tom",depId: 2, skills:["Finance","Acount"]},
    {id:3,name:"Adam",depId: 3, skills:["Math","Sciecce"]}
];
const skillArray  = employees.map(function(emp){
   return emp.skills;
});
console.log(skillArray.flat(Infinity));
const skil = employees.filter(emp=>emp.skills); //filter dosen't work because return an object
console.log(skil.flat(Infinity));



const numbres = [1,3,4,4,5];
const filterNumbers = numbres.filter(num=>num>1);
console.log(filterNumbers.flat())