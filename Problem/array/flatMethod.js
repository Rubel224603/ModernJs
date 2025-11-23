// Flatten nested array
// Input: [1, [2, [3]]] → Output: [1,2,3]

const input = [1, [2, [3,[4],[5]]],[4,5,[6,7,7,[8]]]];
console.log(input.length);

console.log(input.flat(Infinity));