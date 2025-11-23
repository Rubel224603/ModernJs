//check the it's palindrome or not 
// input:121 
//output:121


function palinDrome(data){
    
    const input = data;
    //console.log(typeof input);

    if(typeof input ==='number'){
        let convertInput  = input.toString();

        //console.log(typeof convertInput)

        let makeArray = convertInput.split('');

        //console.log(makeArray);

        let reverseArray = makeArray.reverse();

        //console.log(reverseArray);

        let joinArray = reverseArray.join('');
        let makeNumber = Number(joinArray);

        //console.log(typeof joinArray);

        if(makeNumber === input){
            console.log(input + "= is Palindrome");
        }else{
            console.log(input +" = is not Palindrome");
        }
    }
    if(typeof input ==='string'){
        //console.log(typeof input);
        let makeArray = input.split('');

        //console.log(makeArray);

        let reverseArray = makeArray.reverse();

        //console.log(reverseArray);

        let joinArray = reverseArray.join('');

        //console.log(typeof joinArray);

        if(joinArray === input){
            console.log(input + "= is Palindrome");
        }else{
            console.log(input +" = is not Palindrome");
        }

    }

  
}
 palinDrome(121);