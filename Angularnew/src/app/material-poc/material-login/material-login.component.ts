import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-material-login',
  templateUrl: './material-login.component.html',
  styleUrls: ['./material-login.component.css']
})
export class MaterialLoginComponent implements OnInit {
  loginForm= new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  })
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  constructor(private auth:AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  submit(){
    
    console.log(this.loginForm)
    this.auth.loginUser(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.route.navigate(['material-poc/material-user'])
      },
      err => {
        console.log(err)
      }
    )
  }

}