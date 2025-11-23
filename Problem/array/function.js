console.log("Js Function...");

function sum(a,b){
   return a+b;
}
 console.log("The Sum = "+sum(25,2));

 //rest paremeter....
  
 console.log("This is rest opertator");
 function rest(x,...y){
   console.log(x);
   console.log(y);

 }

 rest(10,2,3,4,5,6,3,3,7,8);

 //arrow function ...
 const printThis = ()=>{
    console.log("This is arrow function");
 }
 printThis();

 //if arrow funciton in sigleStatemnet....
 const arr = (a,b)=>console.log(a+b);
 arr(10,20);

 console.log(this);

//in function this refer global object....
  function show(){
    console.log(this);
 }
 show();

 //function with clousure...
 function outer(x){

    console.log(x);

    function inner(){
        return x*5;
    }
    return inner;
 }
 //outer(4);
 const result = outer(5); 
console.log(result.toString());


//function with callback....one function use parameter via another funtion that's call back function

console.log("callback function:");

function sayHello(name){
    console.log(name);
}

function greetUser(callBack){
    user ="Rubel Hosen";
    callBack(user);
}
greetUser(sayHello); //sayHello  is the callback function...

//function group operator...
(function group(){
    console.log("group operator");
})();


//functin recursion....

function faceWater(count){
    console.log("Recursion..." + count);
    if(count===10){                             //recusion need one base condition ... without it progrtam will be crash...
        console.log("Recursion over");
        return;

    }

    faceWater(count +1);
}
faceWater(1);

//problem factorial ....

function fact(f){
    console.log("Factorial...");
  
    if(f==1){
        console.log("factorial Over");
       return 1 ;
    }
   return f * fact(f-1);
  

}
console.log(fact(5));




