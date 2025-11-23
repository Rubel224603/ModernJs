// Problem: Check if a number is prime.
// Input: 7
// Output: true

function checkPrime(number){
    let userInput = number;
    // if(userInput%2 !== 0 && userInput%3 !==0 && userInput%5 !==0 && userInput%7 !==0){
    //    console.log(true);
    // }else{
    //   console.log(false);
    // }
    if(number ===1 ){
        console.log(number + " = is Not Prime Number");
        return;
    }
    for(let i=2; i<=number;i++){
        if(number%2 !== 0){
            console.log(number +" = Prime Number");
            return;
        }
    }
     console.log(number +"=Not Prime Number");
}
// checkPrime(1);
 checkPrime(1434);