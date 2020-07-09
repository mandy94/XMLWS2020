import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'app/service/advert.service';
import { FormControl } from '@angular/forms';
import { ApiService, ConfigService } from 'app/service';
import { SearchAttributes } from 'app/shared/models/models';

@Component({
  selector: 'app-rent-a-car-adverts',
  templateUrl: './rent-a-car-adverts.component.html',
  styleUrls: ['./rent-a-car-adverts.component.css']
})
export class RentACarAdvertsComponent implements OnInit {

  constructor( private apiService: ApiService,
    private config: ConfigService,
    private adservice : AdvertService) { }
  advertList: any;
  finishedLoading = false;
  ngOnInit() {
    this.load();
    this.getData();
  }


  load(){
    this.adservice.getAllAdverts().subscribe(data => {  this.advertList = data; this.finishedLoading = true;});
  }

private selected: any;
private searchAttributes: SearchAttributes;

selmanu=[];
selmodel=[];
selfuel=[];
selgear=[];
selcc=[];

manuCtrl= new FormControl();
modelCrtl= new FormControl();
fuelCrtl= new FormControl();
gearCrtl= new FormControl();
cclassCrtl= new FormControl();
cityList = new FormControl();

codebook = [];

getData(){
  
  this.apiService.get(this.config.all_codebook_url).subscribe(data => this.codebook = data);
}
submitSearchForm(){
  this.searchAttributes={
    cclass : this.selcc,
    models : this.selmodel,
    manufacturers : this.selmanu,
    gearType : this.selgear,
    fuels :this.selfuel
  }
  console.log(this.searchAttributes);
  this.apiService.post(this.config.search_advert_url, this.searchAttributes)
  .subscribe(data => this.advertList = data);
 //  this.adservice.getFilteredAdverts(this.searchAttributes).subcribe();
}

}
