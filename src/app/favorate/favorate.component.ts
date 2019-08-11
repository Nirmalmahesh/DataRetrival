import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GoogleAPIService } from '../google-api.service';
import { FavorateService } from '../favorate.service';

@Component({
  selector: 'app-favorate',
  templateUrl: './favorate.component.html',
  styleUrls: ['./favorate.component.css']
})
export class FavorateComponent implements OnInit {

  constructor(private _auth : AuthService,private google : GoogleAPIService,private favorate : FavorateService) { }

  favorates;
  results = {
    results : []
  };
  available = false;
  temp;
  loadFullDetailes = async () =>{
    this.favorates.map((favorate)=>{
      this.google.findPlace(favorate.place_id).subscribe(
        data =>{
          this.temp = data;
          console.log(data);
          this.results.results.push(this.temp.result)          
        }
      )
    })
   setTimeout(() => {
    this.available = true;
    console.log(this.results);
   }, 300);
    
    
  }
  getFavorateOfYour = async () =>{
    let user = this._auth.getUser();
    let data = {user_id : user.user_id};
    await this.favorate.getFavorateByUser(data).subscribe(
     async data =>{
        this.favorates = data;
        setTimeout(()=>{
          this.loadFullDetailes()
        },1000)
        
        
      }
    );
    
  }

  ngOnInit() {
    this.getFavorateOfYour();
  }

}
