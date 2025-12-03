// Assume each employee has a projects array. 
// Find the total number of unique projects being handled across all employee



const employees = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
  { id: 2, name: "Bob", projects: ["Project B", "Project C"] },
  { id: 3,  name: "Charlie", projects: ["Project D", "Project A"] },
  { id: 3,  name: "Charlie", projects: ["Project D", "Project A","Project E"] }
];


let unique = [];

employees.forEach(emp => {
    emp.projects.forEach(project => {
        if(!unique.includes(project)){
            unique.push(project);
        }
    });
});
console.log("Unique Project: ",unique);

//show all the projects...

// employees.forEach(emp =>emp.projects.forEach(project=>console.log(project)));


// [1,3,,4,5,6,].forEach(n=>console.log(n));