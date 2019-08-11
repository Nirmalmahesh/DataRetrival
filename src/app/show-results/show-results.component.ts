import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { GoogleAPIService } from '../google-api.service';
import { Router } from '@angular/router';
import { FavorateService } from '../favorate.service';
import { CustomError } from '../model/customError';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  @Input() results;
  customError = new CustomError();
  showError = false;
  favorateIds;
  idToCheck;
  constructor(private _auth : AuthService,private google : GoogleAPIService,private router:Router,private favorate : FavorateService) { }
  removeFavorate = (item) =>{
    console.log(item);
    this.favorate.deleteByPlaceId({place_id : item.place_id}).subscribe(
      data=>{
        console.log(data);
        
      }
    );
    this.loadFavIds();
  }
  hideError = () =>{
    this.showError = !this.showError;
  }
  checkIds = (id) =>{    
    return this.idToCheck === id.place_id;
  }
  checkIsFav = (id) =>{
    this.idToCheck = id;   
    return this.favorateIds.find(this.checkIds)
  }
  addFavorate = (place) =>{
    var user = this._auth.getUser();
    let data = {
      user_id : user.user_id,
      place_id : place.place_id
    }
    this.favorate.addFavorate(data).subscribe(
      data =>{
        console.log(data);
        this.customError.message = "Successfully Added To Favorate";
        this.customError.type = "success";
        this.showError = true;
      }
    )

  }
  viewDetails = (placeId) =>{
    this.router.navigate([`user/details/${placeId}`])
  }
  giveImgUrl = (reference)=>{  
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${reference}&key=${this.google.getKey()}`;
  }
  loadFavIds = () =>
  {
    let user_id = this._auth.getUser().user_id;
    this.favorate.getFavorateByUser({user_id : user_id}).subscribe(
      async data=>{
             this.favorateIds = await data;
      }
    );
  }
  ngOnInit() {
    console.log(this.results);
    this.loadFavIds();
  }

}
