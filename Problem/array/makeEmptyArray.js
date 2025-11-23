//Make an empty array
//input : ["a","b","c","d","e"];
//output: []

function makeEmptyArray(){
    const arr = ["a","b","c","d","e"];
    const length  = arr.length;
    console.log("Array: ",arr);
    for(let i= 0; i<length; i++){
       arr.pop();
       console.log(arr);
    }
    console.log("Use pop method to make empty array:=",arr);
   
  
}
 makeEmptyArray();


 //useing splice method make empty array;

 function emptyArrya(){
    const numbers = [1,3,3,4,6,4];
    console.log("array:=",numbers);
    numbers.splice(0,numbers.length);
    console.log("use splice method to make empty:=",numbers);
 }
 emptyArrya();

 //make empty array useing shif method...
  function shiftMethodToEmptyArray(){
    const arr1 = ["apple",'banana','orange',"mango"];
     console.log(arr1);

        // console.log(arr1);
        const sizeArray = arr1.length;

        for(let start = 0 ; start<= sizeArray;start++){
            arr1.shift();
           
        }
         console.log("use shift method:=",arr1);
  }
  shiftMethodToEmptyArray()

  //change the array Length

function lengthToMakeEmpty(){
  const flowers = ['rose','lily','lotus'];
  console.log(flowers);
  flowers.length=0 ;
  console.log("use length propety:=",flowers);

}
lengthToMakeEmpty();

//direct assign to sqaure bracket make it empty
function sqaureBracMakeEmpty(){
    let cars = ['BMW',"towto","marcidis"];
    console.log("the Array: ",cars);
    cars = [];
    console.log("Empty Array use [] assign:=",cars);
}

sqaureBracMakeEmpty();

