import { Component, OnInit } from '@angular/core';
import { employeeData } from '../app/data/data';
import { AuthService } from './auth/service/auth.service';
import { Employee } from './model/employee.model';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private employeeService: EmployeeService, private authService: AuthService) {}
  employees: Employee[];
  username: string;

  ngOnInit(): void { //to initialize the objects
    this.employees = this.employeeService.fetchEmployees();
    this.authService.username$.subscribe(data=>{
      this.username = data;

        //this.username = localStorage.getItem('username');
        console.log(this.username);


    })

  }


}

/* Dividing the page into components
1. make a components folder
2. put all the components in that folder etc, calc.somponent.ts, array.component
    address.component, employee-list, employee-add, employee-add-rective
*/