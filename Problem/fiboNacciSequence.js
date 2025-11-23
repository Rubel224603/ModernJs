//Problem: Return the first n Fibonacci numbers.
//Input: 5
//Output: [0, 1, 1, 2, 3]

function checkFibonacci(data){
    const userInput = data;
    let firstNumber  = 0;
    let secondNumber = 1;
    if(userInput<0){
        return ;
    }
    
    if(userInput === 1){
        console.log(firstNumber);
        console.log(secondNumber);
        return;
    }
    console.log(firstNumber);
    console.log(secondNumber);

    for(let i = 2;i<userInput;i++){
      
        let nextNumber = firstNumber + secondNumber;
        console.log(nextNumber);
        firstNumber = secondNumber;
        secondNumber = nextNumber;
   
    
    }
   
}
checkFibonacci(5);

  //default  0     = 0
  //default 1      = 1
          // 0 + 1 = 1
          // 1 + 1 = 2
          // 1 + 2 = 3
          // 2 + 3 = 5
          // 3 + 5 = 8
