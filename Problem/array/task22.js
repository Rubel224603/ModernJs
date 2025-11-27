 //Find the highest salary among employees.
 
const employees = [
  { id: 1, name: "Alice", departmentId: 2, salary: 12000 },
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
 
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

function heighestSalary(){

    let heighSalary = employees[0].salary;
    let heighSalaryEmpDepId = employees[0].departmentId;
    let heighSalaryEmpName = employees[0].name;
    let finalDepartmentName;
    
   // console.log(highSalaryEmployeeId);

    for(let i = 1; i<employees.length; i++){
       
        if(employees[i].salary > heighSalary){
           heighSalary = employees[i].salary;
           heighSalaryEmpDepId = employees[i].departmentId;
           heighSalaryEmpName = employees[i].name;
         
        }
    }
    //find Department ...

    for(let j = 0; j<departments.length; j++){
         if(heighSalaryEmpDepId === departments[j].id){
              //console.log("Department Name: ",departments[j].name);
               finalDepartmentName = departments[j].name;
           }
            
     }
      // console.log(departments[heighSalaryEmpDepId].name) ;

    console.log("Heighest Salary: "+ heighSalary ,"\nDepartMent: " + finalDepartmentName,"\nName: " + heighSalaryEmpName);
    

}

heighestSalary()