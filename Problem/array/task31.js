
// T-032: Check if all employees earn more than 4000.
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 3000 },
  { id: 11, name: "Alice", departmentId: 1, salary: 4000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 2, salary: 6000 },
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

const empSalayMore4k = employees.filter((emp)=>emp.salary>4000);
console.log(empSalayMore4k);

// Find the first employee in the "Sales" department.
const salesDep  = departments.find((dep)=>dep.name === "Sales");
console.log("Department: ",salesDep);

const firstEmpSalesDep = employees.find(function (emp){
    if(emp.departmentId === salesDep.id){
            return true;
    }
});
console.log("First Emply: ",firstEmpSalesDep);