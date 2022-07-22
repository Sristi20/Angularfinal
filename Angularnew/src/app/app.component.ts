import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 6 Application';
  inputvariable = "Hi I am your Parent Component";
  users:any;
  
  constructor(){
    
  }
  
}

export class Todo{
  sno: number=0
  title: string=''
  desc: string=''
  active: boolean= true
}