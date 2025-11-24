// Find smallest number

// Input: [4,2,8,1,6]
// Output: 1

function smallestNumber(){

    const input = [4,2,8,1,6];
    let smallestNumber = input[0];
    for(let i= 0;i<input.length;i++){
        if(smallestNumber > input[i]){
            smallestNumber = input[i];
        }
    }  
    console.log(smallestNumber);

}
smallestNumber();