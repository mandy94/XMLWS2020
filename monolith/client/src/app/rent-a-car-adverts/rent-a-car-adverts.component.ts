import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'app/service/advert.service';

@Component({
  selector: 'app-rent-a-car-adverts',
  templateUrl: './rent-a-car-adverts.component.html',
  styleUrls: ['./rent-a-car-adverts.component.css']
})
export class RentACarAdvertsComponent implements OnInit {

  constructor(private adService: AdvertService) { }
  advertList: any;
  finishedLoading = false;
  ngOnInit() {
    this.load();
  }


  load(){
    this.adService.getAllAdverts().subscribe(data => {  this.advertList = data; this.finishedLoading = true;});
  }
}
