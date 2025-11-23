// Problem: Count how many times each element occurs in an array.
// Input: [1, 2, 2, 3, 2]
// Output: {1:1, 2:3, 3:1}

const arr =  [1, 2, 2, 3, 2,22,20,22];

let check = {}
for(let i = 0; i<arr.length;i++){
    let value = arr[i];
    if(check[value]){
        check[value]+=1;
    }else{
        check[value]=1;
    }


}
console.log(check);