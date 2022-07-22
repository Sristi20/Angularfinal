import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

export interface PeriodicElement {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

@Component({
  selector: 'app-material-user',
  templateUrl: './material-user.component.html',
  styleUrls: ['./material-user.component.css']
})
export class MaterialUserComponent implements OnInit {
  data: any;
 

  constructor(private _user: UserServiceService) { 
    this._user.getData().subscribe((data: { data: any; })=>{
      this.data=data.data
    })
  }

  ngOnInit(): void {
  }

  
  displayedColumns: string[] = ['id','email', 'firstname', 'lastname', 'avatar'];
  clickedRows = new Set<PeriodicElement>();
}