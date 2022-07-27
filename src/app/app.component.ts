import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  x:number=10;
  y:number=5;
  result:number = 0;
  arr:number[]=[];

  constrctor(){}

  ngOnInit(): void {
    this.x = 10;
    this.y=5;
    this.result=0;
    this.arr=[2,5,1,3,6,7,9,8];
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
