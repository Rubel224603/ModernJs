const sentence = " I am * a           Web programmer * jj   ";

function countWord() {
  
    let cleaned = sentence.replace(/\s*[*#]\s*/g, ' ');

    console.log(cleaned);
    cleaned = cleaned.replace(/\s+/g, ' ');

    console.log(cleaned);

    cleaned = cleaned.trim();

   
    const words = cleaned.split(' ');

    console.log("Words array:", words);
    console.log("Word count:", words.length);
}

countWord();

// const str = "hello world Bangladesh kkk";
// let spildStirng =str.split(' ');
// console.log(spildStirng.length);