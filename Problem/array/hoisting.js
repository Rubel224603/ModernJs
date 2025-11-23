//JavaScript Hoisting....
//When Creation Phage  is going to find all the varibale & function declaration  and allocate to the space in memory.... This process is called hoisting
console.log("Hoisting in JavaScript");
//GEC...

//Global Execution Context 
//Js Engine follow two step to code run... 
//   1.Createion phage
//   2.Execution phage
 

// Lexical scope: A function can access the variables in its own scope and other functions defined in the same scope, as well as the variables in its parent scope.


console.log(name);

var name = "Global";

console.log("Access the Global Scop: "+ name);

function outer(){
   
    //name = "outer";
    console.log("Access the Global varibel in Outer function: = " + name);

    
    function inner(){

        console.log("Access Global  Variable in inner funciton: = " + name); //for lexical scop...

    }
    inner();
}
 outer();
 console.log("Normally Access Global Variable: = "+ name);


// Creation Phage...
//  1. Memory allocation
//  2. Variable undefine
//  3. Scop chain
//  4. this binding




//Execuation Phage...
