
//find the number,string & charecter...

console.log("hi");
let arr= [120,'Rubel Hosen','RH',22,98,'e',300,'i','Web Developer'];


let num = [];
let str = [];
let ch = [];

console.log( arr);

arr.forEach(function(ele){
    //console.log(ele);
   if( typeof ele == 'number'){
     num.push(ele);
   }else if(typeof ele == 'string'){
        if(ele.length>1){
        str.push(ele);
        } else{
        ch.push(ele);
    }
   }
  
})
//console.log(typeof(123),typeof "rubel", typeof 'c');
console.log(num);
console.log(str);
console.log(ch);

//slice & splice method ....

 const myArry = ['Web Developer','Digital',13,33,'I',510,'ff'];

  console.log("Array lenght =" + myArry.length);
  console.log("arry=" + JSON.stringify(myArry)); // output show same as array...
  console.log("New array used slice method");
  console.log(myArry.slice(1,5)); // slice method making new array starting index & ending index...
  console.log("New array used spilce method");
  let ar=[1,2,30,490,4,50,5,6,7,100];
  console.log("New array=");
    console.log(ar);
    console.log("use splice method: remove 3 number index  with 2 elements");
    console.log(ar.splice(3,2));//remove 3 number index  with 2 elements...
    console.log("Now the array =");
    console.log(ar);

    //find & filter method...

    let numberArray = [100,10,20,4,0,500,300,600,200];

    console.log("The New Array = "+ JSON.stringify(numberArray));
    numberArray.find(function (ele){   // if condition match then not check....
        if(ele > 10  ){
           console.log("Find item = " + ele);
           return true;
        }
    });


    numberArray.filter(function(ele){
        if(ele > 100){
            console.log("Filter item = "+ ele);
            return true;
        }
    });


    //object join....
    let  carObj = {
        'name':"BMW",
        "color":"red",
        "price":10000,
        'company':"tesla"
    }

    let pcObj ={
        'name':"HP",
        'ram':"4gb",
        'ssd':"120gb",
        "processor":"coreI5",
        "price":499999,
    }

    console.log({...carObj, ...pcObj});

    let obj1={
        'name':"Rubel Hosen",
        'address':"jhenaidah"

    }

    let obj2= {
        name:"Abir Khan",
        age:25,
        profession:'learner',
        address:"Unkwonn"
    }

    let joinObj =  {...obj1 , ...obj2}  //spread operator...
    console.log(joinObj);
    console.log("Join all the Object");
    console.log(Object.assign({},obj2,pcObj,carObj,obj1)) ;

    //find the output below objects.....
     const firstObj = {
        name:"Natore"
     }
     console.log("The first object = "+ JSON.stringify(firstObj));

     const secondObj ={
        name: "Dhaka"
     }
     console.log("The Second Object = "+ JSON.stringify(secondObj));

     const thirdObj ={
        name:"Uttora"
     }
    //  console.log("Third Object = "+ JSON.stringify(thirdObj));

    //  firstObj[secondObj]={
    //         name:"Jheanaidah"
    //  }
    //  console.log("first and second = "+ JSON.stringify(firstObj[secondObj]));
  
    //  firstObj[thirdObj]={
    //         name:"Kushtia"
    //  }

     console.log("third object = "+thirdObj[firstObj]);

     console.log("Final Object = "+JSON.stringify(firstObj[thirdObj]));
     console.log("Final Output  = "+ firstObj[thirdObj]);
