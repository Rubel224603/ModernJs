const binaryArr = [1, 3, 4, 5, 10, 40, 6, 7, 12];

let sortedArray = binaryArr.sort((a, b) =>{ 
    return a - b
});
console.log(sortedArray); //[1,  3,  4,  5, 6, 7, 10, 12, 40]

function binarySearch() {
    let target = 3;
    let lowerIndex = 0;
    let higherIndex = sortedArray.length - 1;
    let midIndex;
    console.log("Terget Value = " + target+"\n");

    console.log("Lower Index = " + lowerIndex);
    console.log("Higher Index = " + higherIndex);
    
    while (lowerIndex <= higherIndex) {  
        midIndex = Math.floor((lowerIndex + higherIndex) / 2);  
        console.log("Middle Index= " + midIndex);
        console.log("Middle Index value= " + sortedArray[midIndex]);


        if (target == sortedArray[midIndex]) {
            return midIndex; 
        } else if (target > sortedArray[midIndex]) {
            lowerIndex = midIndex + 1;
            console.log("\nLower Update Index = "+lowerIndex);
        } else {
            higherIndex = midIndex - 1;
            console.log("\nheigher Index updated= "+higherIndex);
        }
    }

    return -1; // not foun
}

let result = binarySearch();
console.log("Result Index = " + result);
