//use find method access element in array...

const employees = [
    {id:1,name:"Hasan",worK:"Developer",salary:1000},
    {id:2,name:"Nahid",worK:"Designer",salary:2000},
    {id:3,name:"Hasib",worK:"Marketer",salary:3000},
    {id:4,name:"Rahim",worK:"HR",salary:4000},

];

const findEmp = employees.find(function(emp){
        if(emp.salary>1000){
            return emp.salary;
        }
      });

 console.log(findEmp);
