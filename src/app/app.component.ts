import { Component, OnInit } from '@angular/core';
import { employeeData } from './data/data';
import { Employee } from './model/employee.model';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


 

  constructor(private employeeService : EmployeeService){}
  employees: Employee[];

  ngOnInit(): void { //to initialize the objects
    this.employees = this.employeeService.fetchEmployees();

  }


}

/* Dividing the page into components
1. make a components folder
2. put all the components in that folder etc, calc.somponent.ts, array.component
    address.component, employee-list, employee-add, employee-add-rective
*/