//destructing array with 
//... rest parameter

// const colors = ['red','yellow',"green","white","syan"];
// const [frist, second,...rest] = colors;
// console.log(frist); 
// console.log(second); 
// console.log(rest); 

//Adding Number useing rest parameter...

function add(a,...rest){
    let total =0;
    for(let i=0;i<rest.length;i++){
        total+= rest[i];
        console.log(total);
    }
    let sum = total + a;
    console.log("Final adding: = ", sum);
}
add(1,2,3,4,5);

//Array Destructing...
//swap ....

let happy= "happy";
let sad= "sad";

[sad,happy] = [happy,sad];
console.log("Sad:=",sad);
console.log("Happy= ",happy);


