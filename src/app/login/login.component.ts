import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  submitData = () =>{
    this._auth.validateUser(this.user).subscribe(
      data =>{
        sessionStorage.setItem("USER",JSON.stringify(data[0]));
        this._auth.navigate();
      },
      err =>{
        console.log("Something Went Wrong");
      }
    );
  }
  constructor(private _auth : AuthService) { }

  ngOnInit() {
  }

}
