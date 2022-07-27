import { Component, OnInit } from '@angular/core';
import { employeeData } from './data';
import { Employee } from './model/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  x:number=10;
  y:number=5;
  result:number = 0;
  arr:number[];
  tempArr:number[];
  showAddress:boolean;
  lbladdress:string;
  employees:Employee[];

 

  constrctor(){}

  ngOnInit(): void {
    this.x = 10;
    this.y=5;
    this.result=0;
    this.arr=[2,5,1,3,6,7,9,8];
    this.tempArr = this.arr;
    this.showAddress=false;
    this.lbladdress="Show Address";
    this.employees =employeeData;
    // console.log(this.employees.forEach(e=>console.log(e)));

  }

  display():void{
    console.log('display called');
  }

  add():void{

    this.result = this.x + this.y;

  }
 sub():void{
  this.result = this.x - this.y;

  }
  mul():void{
    this.result = this.x * this.y;

  }
  div():void{
    this.result = this.x / this.y;

  }

  even():void {
    this.reset();
    this.arr = this.arr.filter(e=>e%2 ==0);
  }

  odd():void {
    this.reset();
    this.arr = this.arr.filter(e=>e%2 ==1);
  }


  reset():void {
    this.arr = this.tempArr;
  }

  toggleAddress():void{
    this.showAddress = !this.showAddress;

    if(this.showAddress == true)
      this.lbladdress="HideAddress";

    else
      this.lbladdress="Show Address";
  
  }




}