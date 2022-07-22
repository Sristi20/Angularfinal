import { Component, Input, OnInit, Output } from '@angular/core';
import{ Todo } from "../app.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() myinput:string='';
  user:Todo[];
  constructor() {
    this.user =[
      {
        sno:1,
        title: "This is title1",
        desc: "Description",
        active: true
      },
      {
        sno:2,
        title: "This is title2",
        desc: "Description",
        active: true
      },
      {
        sno:3,
        title: "This is title3",
        desc: "Description",
        active: true
      }
    ]
   }

  ngOnInit(): void {
    console.log(this.myinput)
  }

} 