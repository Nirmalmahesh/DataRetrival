import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavorateService {
url = "http://localhost:5000/";
  addFavorate = (data) =>{
    return this._http.post(this.url+'api/favorate/addFavorate',data);
  }

  deleteByPlaceId = (data) => {
    return this._http.post(this.url+'api/favorate/deleteById',data);
  }
  getFavorateByUser = (user) =>{
    return this._http.post(this.url+'api/favorate/getAllFavoratesByUser',user);
  }

  constructor(private _http : HttpClient) { }
}
