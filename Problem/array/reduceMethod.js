//reduce method in js...

const numbers = [10,20,30,40,50];

const total = numbers.reduce((sum,numb ) => sum = sum + numb ,0);
console.log(total);


const names = ['a', 'b', 'c'];

// Output: '(a: 0) (b: 1) (c: 2) '

const output = names.reduce((acc,nameValue,index)=>{
   return acc +`( ${nameValue}:${index})`
},'');
console.log(output);


//Even index value summation
const arr = [10, 20, 30, 40, 50];
const sumationEvenIndex = arr.reduce((total,currentValue,currentIndex)=>{
    if(currentIndex % 2 == 0){
        total = total + currentValue;
        return total; 
    }   
    return total;
},0);
console.log(sumationEvenIndex);