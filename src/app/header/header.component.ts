import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { async } from 'q';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title = "Data Retrival System";
  constructor(private _auth : AuthService) { }
logout = async() =>{
    await sessionStorage.clear();
    this._auth.navigate();
}
  ngOnInit() {
  }

}
