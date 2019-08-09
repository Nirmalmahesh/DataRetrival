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
search = async() =>{
  await this.cloud.searchPlace(this.latitude,this.longtitude).subscribe(
    data =>{
      console.log(data);
    }
  );
}
  constructor(private cloud:GoogleAPIService) { }

  ngOnInit() {
  }

}
