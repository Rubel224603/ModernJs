// count the vowel  ....
//input: "Hello World"
//output: 3

function countVowel(data) {
    let str = data;
    const vowel = "aeiouAEIOU"
    if (typeof str !== 'string') {
        console.log(str + " is not a string");
    } else {
        // console.log(str + " is  a number");
        // makeArray = str.split('');
        //console.log(makeArray);
        size = data.length;
        let count = 0;
        // console.log(size);
        for (let i = 0; i < size; i++) {
            if(vowel.includes(data[i])){
                count++
            }
            // console.log(makeArray[i]);
           

            // if (data[i] == 'a') {
            //     count++;
            // }
            // else if(data[i] == 'e') {
            //      count++;
            // }
            // else if(data[i] == 'i') {
            //     count++;
            //  }
            // else if(data[i] == 'o') {
            //     count++;
            // }
            // else if(data[i] == 'u') {
            //   count++;
            // }
            
        }
       console.log(count);
    }
  
}


countVowel("Hello World Banlgades Amar SoNar U");