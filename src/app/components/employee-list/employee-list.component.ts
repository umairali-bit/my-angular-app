import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { employeeData } from 'src/app/data/data';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employees =employeeData;
    // console.log(this.employees.forEach(e=>console.log(e)));
  }

  sortSalary(flag:number):void{
    this.employees = this.employeeService.sortSalary(this.employees,flag)

  }

}
