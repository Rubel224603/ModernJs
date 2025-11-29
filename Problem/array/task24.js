//  T-025: Write a function to filter employees earning more than 6000.

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];


const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

function higherSalaryEmp(){
    const empLength = employees.length;
    const depLength = departments.length;
    let result = [ ];
    for(let i=0; i<empLength;i++){
        if(employees[i].salary > 6000){
           // console.log(employees[i].name);
            // for(let j=0;j<depLength;j++){
            //     if(departments[j].id === employees[i].departmentId){
            //         console.log(departments[j].name);
            //     }
            // }
            const dept  = departments.find(dep => dep.id === employees[i].departmentId);
           // console.log(dept);
            result.push(
                {
                    name: employees[i].name,
                    salary: employees[i].salary,
                    department:dept.name

                }
            );


        }
    }
   return result;

}
console.log(higherSalaryEmp());

//use find Method in array...

//console.log(employees.find(emp=>emp.salary>6000));