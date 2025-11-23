//heigher order function ....

function  sum(fn){
    return fn + 3;
}

function fn(a){
    return a;
}

// fn(6);
let result = sum(10);
// console.log(result);

    function doSoemthing(n){

        function myWork(n){
            return 1+ n;
        }
        //console.log(myWork(2));
        return myWork(5);
    }
   console.log(doSoemthing(n));

    function n(anotherNumber){
        return anotherNumber;
    }
    n(5);

    // array destructure....

    const arr=[21,22,34];
    console.log("The array = " + JSON.stringify(arr));
    const [a,b]= arr;
    console.log("array destructure");
    console.log(a);
    console.log(b);