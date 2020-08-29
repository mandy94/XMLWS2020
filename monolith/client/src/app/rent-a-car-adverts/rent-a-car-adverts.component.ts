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
    this.adservice.getAllAdvertsWithPriceList().subscribe(data => {  this.advertList = data; this.finishedLoading = true;});
  }

private searchAttributes: SearchAttributes;
orderByCtr = new FormControl({prop: undefined});
manuCtrl= new FormControl([]);
modelCrtl= new FormControl([]);
fuelCrtl= new FormControl([]);
gearCrtl= new FormControl([]);
cclassCrtl= new FormControl([]);
cityList = new FormControl([]);
minPrice = new FormControl();
maxPrice = new FormControl();
kidsSeat = new FormControl();
milage = new FormControl();
CDWProtecton = new FormControl();

codebook = [];
orderOptions= [ {prop:"pricePerKm" , order:"up", text: "Po ceni opadajuce"},
                {prop:"pricePerKm", order:"down",text: "Po ceni rastuce"},
                {prop:"title", text: "Po nazivu"}  ];

onOrderChanged(){ 
  console.log(this.orderByCtr.value.prop);  
  this.sortedAdvertList();

}
sortedAdvertList(){
  let prop = this.orderByCtr.value.prop;
  let criteria = this.orderByCtr.value.order;
  if(prop != undefined){
    if(criteria == "up")
      this.advertList = this.advertList.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    if(criteria == "down")
    this.advertList = this.advertList.sort((a, b) => a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);

  }
  return this.advertList;

}
getData(){
  
  this.apiService.get(this.config.all_codebook_url).subscribe(data => this.codebook = data);
}
submitSearchForm(){
  this.searchAttributes={

    cclass : this.cclassCrtl.value,
    models : this.modelCrtl.value,
    manufacturers : this.manuCtrl.value,
    gearType : this.gearCrtl.value,
    fuels :this.fuelCrtl.value,
    minPrice: this.minPrice.value == undefined ? 0 : this.minPrice.value,
    maxPrice: this.maxPrice.value == undefined ? -1 : this.maxPrice.value,
    kidsSeat : this.kidsSeat.value == undefined ? -1 :this.kidsSeat.value,
    milage : this.milage.value,
    cdw : this.CDWProtecton.value,

  }
  
  this.apiService.post(this.config.search_advert_url, this.searchAttributes)
  .subscribe(data => this.advertList = data);
 
}

}
