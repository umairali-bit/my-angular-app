import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";


@Injectable({
    providedIn: "root"
})
export class EmployeeService{

    public sortSalary(employees: Employee[], flag: number): Employee[]{


        /* e1.salary - e2.salary = if(positive) => swap
         if(negative) => remians same */
         
         if(flag ==1 )
          employees = employees.sort( (e1,e2)=>e1.salary - e2.salary);
        
         else
            employees = employees.sort( (e1,e2)=>e2.salary - e1.salary);
        
        
         return employees;

    }


}