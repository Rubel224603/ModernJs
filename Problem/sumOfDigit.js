//Problem Sum of digit...
// Input: 1234
// Output: 10

function sumDigit(input){
    if( typeof input === 'number'){
        let sum = 0;
        
        let numberString  = input.toString();
        //console.log(typeof numberString);
      
        for(let i = 0 ;i<numberString.length;i++){
           // console.log(numberString[i]);
           sum = sum + Number(numberString[i]);
           //console.log(sum);
       
        }
        console.log(sum);
    }else{
        console.log("Input is not a number");
    }
}


sumDigit(1234);
sumDigit("1234");
sumDigit(14785);
sumDigit(20005);