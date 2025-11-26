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

//array method;

const days = ["sta","sun","mon","tues","wed","april"];

const sortedDay = days.toSorted();
console.log("Sorted array:",sortedDay);
console.log("The original Array:",days);
console.log("toSorted Method Immutable");
const reversDay = sortedDay.toReversed();
console.log("Reverse Array:",reversDay);

const spilceDay  = reversDay.toSpliced(2,2);
console.log("Remove Some elements:",spilceDay);
console.log(reversDay);

//only sort method...
const numbers= [10,30,3,30,20,100];
console.log("Unsorted Array:",numbers);
numbers.sort((a,b)=>{return b-a});
console.log("Sorted array:",numbers);