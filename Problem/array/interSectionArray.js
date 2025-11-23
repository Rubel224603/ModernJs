// Find intersection of two arrays
// Input: [1,2,3] and [2,3,4] 
//  Output: [2,3]

const arr1  = [1,2,3,5];
const arr2  = [3,4,5];
let output= [];
 function interSection(){

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]== arr2[j]){
                output.push(arr1[i]);
                console.log(output);
            };
        }
        
    }
    //console.log(output);
}

interSection()