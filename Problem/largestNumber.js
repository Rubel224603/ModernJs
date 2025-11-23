//find the largest Number =>use spread operator with  loop or  Math.max
//input : 100,30,50,40,700;
//output:700

const number1 = [100,30,50,40,700,20];

const  number2 =[20,10,30,40,50];
let margeNumber = [...number1, ...number2];
 console.log("Marged array: = "+ JSON.stringify(margeNumber));

console.log("Spread opertator:...");
console.log(...[number1]);
 let largeNumber= number1[0];

for(let i = 0;i<number1.length;i++){
  
    if(number1[i] >largeNumber){
        largeNumber = number1[i];
         
    }


}
console.log("Larg Number: =" + largeNumber);
   

//object marged
 const obj1 = {
    name: "Rubel Hosen",
    age:25,
    address: "Dhaka",
 }
 const obj2= {
    name: "Asif",
    age: 23,
    address: "Kushtia",
    phone: 9148474,

 }

 let margeObj = {...obj1, ...obj2}
 console.log(margeObj);


 let ar1 = [10,10,20,30];
 let ar2 = ar1;
 let copyArray = [...ar1];
 console.log("The orginal Array:="+ JSON.stringify(ar1));
 console.log("Copy array:= "+ JSON.stringify(copyArray));
 if(copyArray === ar1){
    console.log("Both are same reference");
 }else{
    console.log("Both are Not same reference");
 }
 
 if( ar1=== ar2){
    console.log("Both are same Refrence")
 }

 console.log(ar1);
 console.log(ar2);
 ar1[0]=20;
 ar1[4]=200;
 ar2[5]=500;
 console.log("The old array element: = "+ar1);
 console.log(ar2);
 console.log("Add new Element");
 ar2.push(1000,200,500);
 console.log(ar1);


 if(ar1 == ar2){
    console.log("same reference");
 }
//  ar2=[10,20,30,50,99,33,44];
 console.log("The array: ="+ar2);