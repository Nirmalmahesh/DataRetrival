import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GoogleAPIService {
  key = "AIzaSyB6JDv_BjUUeSTJJG8YF_1chKvSX1mtfgo";
  type = "schools"
  query = `${this.type} in `
  lat = null;
  long = null;
  header = new HttpHeaders();
  city = null;
  
  
  dataLoadSeachByLatLong = () =>{
    var placeserarch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.long}&radius=1500&type=${this.type}&key=${this.key}`;
    return this.http.get(placeserarch);
  }
  dataLoadSearchByCity = () =>{
    var placeserarch = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.query} ${this.city}&key=${this.key}`;
    return this.http.get(placeserarch);
  }
  getKey = ()=>{
    return this.key;
  }
  searchPlaceByCity = (city) =>{
    this.city = city;
    return this.dataLoadSearchByCity();
  }
searchPlace = (lat,long) =>{  
   this.lat = lat;
   this.long = long;   
  return this.dataLoadSeachByLatLong();
}
findPlace = (placceId) =>{
  var placeserarch = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placceId}&fields=photo,name,rating,formatted_phone_number,formatted_address,place_id,url&key=${this.key}`;
  return this.http.get(placeserarch);
}
  constructor(private http : HttpClient) { }
}
