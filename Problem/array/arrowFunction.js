//Normal Function...


function arrow(a,b){
    
    return a+b;
}
console.log(arrow(5,7));


//anonymous  function...
 
let anoFun = function (c,d){
    return c*d;
}
console.log(anoFun(10,2));
 

//arrow function...

let arrowFun = (e,f)=> e*f;

console.log(arrowFun(10,3));


//arrow funciton no need function keyword,(qurly {}bracket & return No need if single statement)...
//arrow will work this way

let myArroFun = (x,y) => { return x+y };
console.log(myArroFun(1,2));

//arrow funciton  not work  this way...
 let arrFun = (x,y) => {x*y};
 console.log(arrFun(10,20)); // undefine...

 //arrow function not work another way...

//let arFn = (m,n) => return m*n; 
//console.log(arFn(2,3));        //unexpected token return



