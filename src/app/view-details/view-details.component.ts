import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAPIService } from '../google-api.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  place ;
  placeId;
  constructor(private route:ActivatedRoute,private google : GoogleAPIService,private router : Router) { }
  
  giveImgUrl = (reference)=>{  
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${reference}&key=${this.google.getKey()}`;
  }
  ngOnInit() {
    this.placeId = this.route.snapshot.paramMap.get("id");
     this.google.findPlace(this.placeId).subscribe(
       data =>{
         this.place = data;
         console.log(data);
       }
     );
    
  }

}
