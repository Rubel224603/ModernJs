//input [1,3,4,5,6,20,26 ];
// output: 20;

const input = [50,120,233,400,3,4,5,6,20,26 ,77];

function findSecondLarge(){
    let large = input[0];
    let secondLarge  = input[1];
    let temp;
    if(large < secondLarge){
        //console.log("Second Large : " + secondLarge);
        let temp;
        temp = large;
        large = secondLarge;
        secondLarge = temp;
        console.log("Second Large:=" + secondLarge);
        console.log("Large=:" + large);
        
    }else{
        console.log("Large: " + large);
        console.log("Second Large: "+ secondLarge);
    }

    for(let i = 2;i<input.length;i++){
        if(input[i]>large){
            secondLarge = large;
            console.log("if block second large: " + secondLarge);
            large = input[i];
            console.log("if block Present large:=" + large);
        }else if(input[i] < large && input[i] > secondLarge){
            secondLarge= input[i];
            console.log("else block Second large:= "+ secondLarge);
        }
    }
    console.log("Final  Large =:" + large);
    console.log("Final Second Large =:" + secondLarge);
}
findSecondLarge();