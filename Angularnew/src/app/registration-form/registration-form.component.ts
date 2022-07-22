import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
title= 'Angular Reactive Form';
loginForm= new FormGroup({
  email:new FormControl(''),
  password: new FormControl(''),
})
constructor(private auth:AuthService, private route: Router) {}
      
  ngOnInit(): void {
  }

  submit(){
    
   }
}
