// Program to countdown till 1 use recursion

function counter(input){
    if(input>=1){
        console.log(input);
        input--;
        
        counter(input);
    }else{
        return;
    }
}

counter(5);
