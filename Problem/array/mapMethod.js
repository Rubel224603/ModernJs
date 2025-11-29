
//Map method....
//Map method not mutable .. retun new array via logic
//if objec.. & change ... original array will also look changed
// because objects are stored by reference - both arrays point to the same object in memory.

const studentsMarks = [10,20,30,50,68,89,70,41];
const meritStudent = studentsMarks.map((mark)=>{
    return mark>=60;
});
console.log(meritStudent);

const meritMark = studentsMarks.filter((mark)=>{
    return mark>=60
});
console.log(meritMark);






const citizen  = [
    {id:1,name:"Navain",age: 22,profession:"Student",gender:"M",  married:"no"},
    {id:1,name:"Tom",age: 25,profession:"Cartoonist",gender:"M", married:"no"},
    {id:1,name:"Adam Marqueen",age: 60,profession:"Bussiness",gender:"F", married:"yes"},
    {id:1,name:"Smith",age: 58,profession:"Govt Employee",gender:"M", married:"yes"},
    {id:1,name:"Jonly",age: 65,profession:"retirement",gender:"F",married:"yes"},
    {id:1,name:"Merry",age: 26,profession:"job searching",gender:"F",married:"no"}
];

 
// console.log(citizen);

const citizenTitle = citizen.map(function(ctz){
    if(ctz.gender === "M"){
        ctz['title'] = "Mr" + " " + ctz.name;
    }else if(ctz.gender === "F" && ctz.married ==="yes" ){
       ctz['title'] = "Mrs" + " " + ctz.name;

    }else{
        ctz['title'] = "Miss" + " " + ctz.name;

    }
    return ctz;
});

//console.log(citizenTitle);

//find out  seniour citizen...

const people  = [
    {id:1,name:"Navain",age: 18,profession:"Student"},
    {id:2,name:"Tom",age: 20,profession:"Cartoonist"},
    {id:3,name:"Adam",age: 30,profession:"Bussiness"},
    {id:4,name:"Smith",age: 41,profession:"Govt Employee"},
    {id:5,name:"Jon",age: 60,profession:"Bussiness"},
    {id:6,name:"Jo",age: 55,profession:"Polytician"},
    {id:7,name:"Biden",age: 52,profession:"Teacher"}
];
//use map method for old people...

const seniorPeople  = people.map((person)=>person.age>50);
console.log(seniorPeople);

//search all the old person...

const olderPeople = people.filter((person)=>person.age>50);
console.log(olderPeople);


//find only first Old Person...

const firstOldPerson  = people.find(((person)=>person.age>50));
console.log(firstOldPerson);
