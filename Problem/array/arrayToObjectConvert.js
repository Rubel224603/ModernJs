// Convert array to object (index as key)

// Input: ['a','b','c']
// Output: {0:'a',1:'b',2:'c'}

function arrayToObjectConvert (){
    const arr =  ['a','b','c'];
    let outputObj = {};
    
    for(let i=0; i<arr.length; i++){
        let key = i;
        if(!outputObj[key]){
            outputObj[key]= arr[i];
           
        }
          //console.log(outputObj); 


    }
     console.log(outputObj); 
   
}
arrayToObjectConvert();