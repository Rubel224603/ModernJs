// Find second largest number
//input [10,20,35,80,100,40];
//output = 80

// const number = [10,20,35,80,100,40];

// function secondLargestNumber(){
//    let largeNumber = number[0]; 
//    let secondLarge = number[1];
//     for(let i = 2;i<number.length; i++){
//         if(number[i] > largeNumber ){           
//             secondLarge = largeNumber;
//             largeNumber = number[i];
//         }else if(number[i] > secondLarge && number[i] < largeNumber){
//            secondLarge=number[i];
//         }
//     }
//     return secondLarge;
// }

// console.log(secondLargestNumber());


const number = [3,40,45,30,90,100];

 function findSecondLarge(){

    let largeNumber = number[0];
    console.log("first Number = " +  largeNumber);
    let secondLargeNumber = number[1];
    console.log("secondLargeNumber = " +  secondLargeNumber);

    for(let i= 2; i<number.length; i++){
        if(number[i] > largeNumber){
            secondLargeNumber = largeNumber
            //console.log("secondLarge=+: ",secondLargeNumber);
            largeNumber = number[i];
            //console.log(largeNumber);
        }else if(number[i] > secondLargeNumber && number[i] <largeNumber  ){
           secondLargeNumber=number[i];
          // console.log(secondLargeNumber);
        }
      
    }
      console.log("Final Second Largest Number = "+ secondLargeNumber);
      return secondLargeNumber;
 }
 findSecondLarge();