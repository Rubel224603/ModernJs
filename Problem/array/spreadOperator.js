//spread Operator...
const arr1 = [1,2,3,4,5];
//console.log(...arr);
console.log(arr1);
const arr2 = [40,50,60,70,80];
const newArr = [...arr1 , ...arr2];
console.log("Marge Array: =",newArr);

//in object...

const obj1 = {
    name: "RH",
    age:60,
    location:"Dhaka"
}
const obj2 = {
    name: "Lorem",
    age: 25,
    location: "Uttora",
    mobile: "012344"
}

const margeObj = {
    ...obj1, ...obj2

}
console.log("Marge Object:=",margeObj);

//copy an array ...
 const numberArray  = [1,2,3,4,5,6];
 

   console.log("Main Array:",numberArray);
 numberArray.push(10);
 console.log("Added new Valu: ",numberArray);
 const copyNumberArray = [...numberArray];

 console.log("clone array: ",copyNumberArray);
 
 console.log(numberArray === copyNumberArray);

 //join array check...

const mobile = ["nokia","vivo","realMe","Iphonr"];
const pc = ["lenovo",'walton','hp','asus'];
const mixMobilePC = [mobile,pc];
console.log("Join Array: ",mixMobilePC);
const margMobilePc = [...mobile, ...pc];
console.log("Marge Array :" , margMobilePc); 