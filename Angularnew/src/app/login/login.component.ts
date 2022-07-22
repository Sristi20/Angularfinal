import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  title="Login Page";
  loginForm= new FormGroup({
    email:new FormControl(''),
    password: new FormControl(''),
  })
    constructor(private auth:AuthService, private route: Router) {     
     }
  
    ngOnInit(): void {
    }
    submit(){
      this.auth.loginUser(this.loginForm.value).subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.route.navigate(['/home'])
        },
        err => {
          console.log(err)
        }
      )
    }
  
  }
  