//count even number
// Input: [1,2,3,4,5,6]
// Output: 3

function countEvenNumber(){
    const numbres = [1,2,3,4,5,6,8,9];
    let count = 0;
    
    for(let i= 0; i < numbres.length;i++){
        if(numbres[i] %2 == 0){
            count++;
           // console.log(count);
        }
    }
    console.log("Final Even number:=",count);
}
countEvenNumber();