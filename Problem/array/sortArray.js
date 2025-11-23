// Sort array without using .sort()
//input =[1,3,4,2,4,10];
//output = [1,2,3,4,4,10]

    

    const input = [1,3,4,2,4,10];

    let output = [];
    firstElement = input[0]
    function sorting(){
        for(let i = 0; i<input.length;i++){
            if(input[i] >firstElement){
                //let current = firstElement;
                firstElement = input[i];
            }
        }
        output.push(firstElement)
        console.log(output);
    }
    sorting();

    //arry length modify...
    const myArr = [1,2,4,4,5,67,7];
    myArr.length = 10;
    console.log(myArr);
    
    "use stric";

    const cash = [1000,2000,3000,4990,5000,9003];
    Object.defineProperty(cash,'length',{writable:false});
    cash.length = 4;
    console.log(cash.length);