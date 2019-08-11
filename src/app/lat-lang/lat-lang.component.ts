import { Component, OnInit } from '@angular/core';
import { GoogleAPIService } from '../google-api.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-lat-lang',
  templateUrl: './lat-lang.component.html',
  styleUrls: ['./lat-lang.component.css']
})
export class LatLangComponent implements OnInit {
latitude:string;
longtitude:string;
results;
available;
search = async() =>{  
  await this.cloud.searchPlace(this.latitude,this.longtitude).subscribe(
    data =>{           
      this.results = data;      
      this.available = true;
    }
  );
}
  constructor(private cloud:GoogleAPIService) { }

  ngOnInit() {
  }

}
