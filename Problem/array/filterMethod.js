//find out  seniour citizen...
const citizen  = [
    {id:1,name:"Navain",age: 52,profession:"Student"},
    {id:1,name:"Tom",age: 40,profession:"Cartoonist"},
    {id:1,name:"Adam",age: 60,profession:"Bussiness"},
    {id:1,name:"Smith",age: 58,profession:"Govt Employee"},
    {id:1,name:"Jon",age: 65,profession:"retirement"}
]

const seniorCitzen = citizen.filter(function (ctz){
    return ctz.age >= 58;
});

console.log("Useing Filter method: ",seniorCitzen);


//find in specfic element ...
const specficCitizen = citizen.find(function(ctz){
    return ctz.age>58;
});

console.log("Find Method: ",specficCitizen);