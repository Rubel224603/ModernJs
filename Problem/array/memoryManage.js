 console.log("Memory Manage");
 //Stack Memory...
 console.log("Static Memory =:Stack");
 let number = 10;
 console.log("The Number = "+ number);

 let anotherNumber = number;
 console.log("Another Number = "+ anotherNumber);

 number = 200;

 console.log("Change the Number value = "+number); 
 console.log("Still The Another Number = "+ anotherNumber);
 console.log('Static Memory given Just a copy ');

 //Dynamic Memory...
 console.log("Dynamic Memory =:Heap");
 console.log("Print the Object");

let Mobile = {
    "name": "Read Me",
    'Model': "V104",
    'camera':"20MgPxl",
    'Battery':"6000AM",
    'Ram':"10gb"
} 

console.log(Mobile);


let AnotherMobile = Mobile;
console.log("Assing AnotherMobile = mobile");

console.log("Print AnotherMobile Object");

console.log(AnotherMobile);

console.log("Now Change the AnotherMobile Object property ");

AnotherMobile.name = "Vivo" ;
AnotherMobile.Ram = "20gb" ;
AnotherMobile.camera = "20mbpxl"; 
AnotherMobile.Battery = "10000AMP";


console.log(AnotherMobile);
console.log("Now check:Mobile Object");
console.log(Mobile);
console.log("Change One object But  change Both place ");
console.log("Dynamic Memory Refer The address Point, Not The Value");


//Reference  Heap Memory exa
// mple :Array....
console.log("Print the Array");

let myArr = [1,2,3,4,4,5,59,57,89];

console.log(myArr);
 let  anotherArray = myArr;
 console.log("Print Another assign Array");
 console.log(anotherArray);
 console.log('Now change Array ');
 anotherArray.push(100);
 console.log("New Array Like:");
 console.log(anotherArray);
 console.log("Check Previous my Array: ");
 console.log(myArr);
 console.log("While I change  the array .Heap Memory referce the address point ");


// try Heap Memory With Function....


 function myWork(obj){
    obj.value = 10;
    console.log(obj);
 }

 let myObj = {value:100};
 myWork(myObj);
 console.log("Out Side of Function = " , myObj);

 //BigInt...
  const bigInt =    1234567890123456789012345678901234567890n;
  console.log(bigInt);

  let limitNumber =10;
  console.log(Number.MAX_SAFE_INTEGER);