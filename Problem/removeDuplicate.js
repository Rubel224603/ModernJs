// Problem: Remove duplicate elements from an array.
// Input: [1, 2, 2, 3, 1]
// Output: [1, 2, 3]
const arr = [1,2,2,3,1,33,33,3,4];
let expectedArray = [];
function removeDuplicateElement(){
    
    for(let i = 0; i<arr.length;i++){
        let checkElement  = arr[i];
        //console.log(checkElement);
       
        if(!expectedArray.includes(checkElement)){
           expectedArray.push(checkElement);
           //console.log(expectedArray);
        }
    }
}

removeDuplicateElement();
console.log(expectedArray);