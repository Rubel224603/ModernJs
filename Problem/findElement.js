//problem find target element and it's index....
//[1,2,3,4,5,6]
//target = 4 and index =3 
const arr= [1,2,3,4,5,6];


//console.log(arr.includes(4));

function findElement(terget){
    let tergetElement = terget;
    if (arr.includes(tergetElement)){
        for(let i=0;i<arr.length;i++){
            if(tergetElement === arr[i]){
                console.log("TergetElement: = "+ tergetElement + "\nIndex: = "+ i);
                return;
            }
        }
    }else{
        console.log(tergetElement + " is Not Present the Collection!!");
    }
 }
   
findElement(4);