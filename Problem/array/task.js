//check array method static or not...

const numbres= [1,3,4,5,6,6];
Array.isArray(1);
console.log(Array.isArray(numbres));

const newArray  = Array.of(1,2,4,55);
console.log(newArray);

//create array useing the constructor with 5  elements;

const cars = new Array("BMW","Toyoto","Marcidus","ff",'eee');
console.log(Array.isArray(cars));

// create an array of  3 empty slot...
 
const flowers = new Array(3);
console.log(flowers);
//create array 6 elements useing  array litarel  and access 4 element useing length property;


const colors = ['red','green','white',"black","yellow","brown"];
const length = colors.length;
console.log(length);
console.log(colors[length-3]);

// filter employees who work in the "Engineering" department?

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 3, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 0, name: "Executive" },
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];


const departmentLength = departments.length ;
const employeLength = employees.length; 

console.log("Department Length: ", departmentLength); 
console.log("Employees Length: ", employeLength); 


function getEngineers(){

    for(let i= 0;i<departmentLength;i++){
        //console.log(departments[i]);
        if(departments[i].name === "Engineering"){
            console.log("Department Name: = ",  departments[i].name);
            console.log("Department Id: = ", departments[i].id);
            const engineeringId = departments[i].id;
         

            for(let j = 0; j<employeLength; j++){

               if(employees[j].departmentId === engineeringId){
                 console.log(employees[j].name);

               };
            }
        }
    }
}

getEngineers();