// Count frequency of each element in array
// Input: [1,1,2,3,2] → Output: {1:2, 2:2, 3:1}


const input = [1,1,2,3,2];

let output = {}
 
    function checkSameElement(){
        let count = 0;
        for(let i=0; i<input.length;i++){
            let key = input[i];
            if(output[key]){
                output[key] = output[key]+1;
               
            }else{
                output[key] = 1;
            }
        }
        console.log(output);
    }
checkSameElement();