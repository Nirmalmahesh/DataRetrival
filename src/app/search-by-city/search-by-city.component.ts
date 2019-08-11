import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GoogleAPIService } from '../google-api.service';

@Component({
  selector: 'app-search-by-city',
  templateUrl: './search-by-city.component.html',
  styleUrls: ['./search-by-city.component.css']
})
export class SearchByCityComponent implements OnInit {
  city;
  constructor(private _auth : AuthService,private google : GoogleAPIService) { }
  results ;
  available = false;
  search = () =>{
    this.google.searchPlaceByCity(this.city).subscribe(
      data =>{
        this.results = data;
        console.log(data);
        this.available = true;
      }
    )
  }
  ngOnInit() {
  }

}
