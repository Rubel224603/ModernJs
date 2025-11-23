//Problem : Find the Missing Number
// Input: [1, 2, 4, 5,6]
// Output: 3


//     const input = [1,2,4,5,6,7,8,9,10];          
// let sum  = 0;
// for(let i= 0; i<input.length;i++){
//     // if(input.includes(input[i])){
        
//     //     console.log("Present " + input[i]);
//     // }else{
//     //     console.log("Not Present " + input[i]);
//     // }

//         let previousNumber = input[0];
//         let nextNumber = previousNumber + input[i];
//        // console.log(nextNumber);
//        if(!input.includes(nextNumber)){
//         console.log(nextNumber);
//         break;
//        }

// }


const input = [1,2,4,5,6,7,8,9,10,12,14,15];

for (let i = 1; i < input.length; i++) {
    let current = input[i];
    let previous = input[i - 1];
    console.log("Before Condition current = "+current);

    if ((current - previous )> 1) {
        console.log("Previous = "+ previous);
        console.log("Current = "+ current);
        for (let missing = previous + 1; missing < current; missing++) {
            console.log("Missing = "+ missing);
        }
    }
}


