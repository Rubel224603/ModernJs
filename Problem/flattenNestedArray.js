
// Problem: Flatten a nested array of arbitrary depth.
// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]

let arr = [1,
            [2,
                [3,4]
            ], 5
          ];
console.log("The array length= "+arr.length);

let newArr = arr.flat(Infinity); //
console.log(newArr);

