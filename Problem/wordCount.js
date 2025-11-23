//Problem Remove the extra space & count the word
//input : "         Hello  Bangladesh   &        we live in Here      "
//output:  7

const input = "         Hello  Bangladesh   &        we live in Here      ";

function wordCount(){
    const removeSpace = input.trim().split(new RegExp("\\s+")); // \\is the pattern and s+ extra space 
    //console.log(removeSpace); 
    const word = removeSpace.length;
    console.log(word);
}

wordCount();

