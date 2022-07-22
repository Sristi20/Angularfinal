import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url='https://reqres.in/api/login'
  constructor(private http:HttpClient) { }
  
  users(){
    let url='https://reqres.in/api/login'
    return this.http.get(url);
  }
  saveUser(data:any){
    let url='https://reqres.in/api/login'
    return this.http.post(this.url,data)
  }
}
