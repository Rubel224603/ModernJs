// Problem: Calculate factorial of a number using recursion.
// Input: 5
// Output: 120

// function fact(input){
    
//     if(input===0){
//         console.log(input +" is's Factorial= " + 1);
//         return
//     }
//     let fact = 1;
//     for(let i = 1; i<=input;i++){
//          fact= fact*i;
        
//         //console.log(fact)
//     }
//      console.log(input +" is's Factorial = " + fact)
// }
// fact(0);
// fact(2);
// fact(1);
// fact(3);
// fact(4);
// fact(5);

function factorial(input) {
    if (input > 1) {
        return input * factorial(input - 1);
    } else {
        //console.log(input + " is's factorial = 1");
        return 1; 
    }
}

console.log("Factorial =", factorial(1));