//Why closure.... 
// [ a function return another function ] 
// [ inner function remember varible form outer function even after finishing the outer function running]
// [ use case: make private variable only change returning function ]



// function outer(a){

//     return function sum(b){

//        console.log(a + b); 
//     };
// }

// let add = outer(5); 
// add(2);  

// add(10); 




function fn(){
    //console.log("Outer function");
   return function inner(){
        console.log("Inner function");
    }
    //  inner();
}
//console.log(fn());
let innerFun = fn();
console.log(innerFun);
innerFun(); 