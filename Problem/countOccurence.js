// Count Occurrences
// Input: "banana"
// Output: { b:1, a:3, n:2 }
const input = 'banana Bangla B banb ';
let output = {};

for(let i =0; i<input.length;i++){
  // console.log(input[i]);
  let key = input[i];
  if(output[key]){
    
    output[key] += 1;
    
   }else {
    output[key] = 1;
   
   }
   console.log(output);
}
console.log("\n Expected Output ");
console.log(output);