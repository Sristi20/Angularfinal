import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  displayVal2='';
  displayVal='';
  getText(val2:string){
    console.log(val2)
    this.displayVal2=val2
  }
  getValue(val:string){
    console.log(val)
    this.displayVal=val
  }
  constructor() { }

  ngOnInit(): void {
  }

}
