import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleAPIService {
  key = "AIzaSyB6JDv_BjUUeSTJJG8YF_1chKvSX1mtfgo";
  type = "restaurant"
  lat = null;
  long = null;
placeserarch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.long}&radius=1500&type=${this.type}&key=${this.key}`;
searchPlace = (lat,long) =>{
  this.lat = lat;
  this.long = long;
  var header = new HttpHeaders();
  header.append("Access-Control-Allow-Origin", "*");
  header.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");

  return this.http.get(this.placeserarch,{headers:header});

}
  constructor(private http : HttpClient) { }
}
