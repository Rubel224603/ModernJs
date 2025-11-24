//AramSrong Number or not
// input: 153
// output:true

function checkAramStrong(){
    const input = 153;
    console.log("Given input:=",input);
    let makeString = input.toString();
    //console.log( makeString.length);
    let output = 0;
    let totalDigit = makeString.length;
    for(let i=0; i< totalDigit; i++){
       // makeString[i]*totalDigit;
        output +=  makeString[i]* makeString[i]* makeString[i];
        //console.log(output);
    }
    console.log("After Proceesing:=",output);
    
    if(input === output){
      console.log("The AramStrong Number =",true);

    }else{
        console.log("The AramStrong Number =",false);
    }

}
checkAramStrong();