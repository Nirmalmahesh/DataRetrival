import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url = "http://localhost:5000/"

 navigate = () =>{
   if(this.getUser())
   {
     this.router.navigate(['user']);
   }else{
     this.router.navigate(['login']);
   }
 }
 getUser = () =>{
   let user = JSON.parse(sessionStorage.getItem("USER"));
   if(user)
   {
    return user;
   }else{
     return null;
   }
 }
  validateUser = (user) =>{
    return this._http.post(this.url+'api/user/validateUser',user);
  }
  constructor(private _http : HttpClient,private router : Router) { }
}
