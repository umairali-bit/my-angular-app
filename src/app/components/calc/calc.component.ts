import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  x:number=10;
  y:number=5;
  result:number = 0;

  constructor() { }

  ngOnInit(): void {

    this.x = 10;
    this.y=5;
    this.result=0;
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

}
