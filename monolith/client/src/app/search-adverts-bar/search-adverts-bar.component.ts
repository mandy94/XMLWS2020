import { Component, OnInit } from '@angular/core';
import { CodebookService } from 'app/service/codebook.service';
import { FormControl } from '@angular/forms';
import { AdvertService } from 'app/service/advert.service';
import { ApiService, ConfigService } from 'app/service';
import { SearchAttributes } from 'app/shared/models/models';

@Component({
  selector: 'app-search-adverts-bar',
  templateUrl: './search-adverts-bar.component.html',
  styleUrls: ['./search-adverts-bar.component.css']
})
export class SearchAdvertsBarComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private config: ConfigService,
    private adservice : AdvertService) { }


    ngOnInit() {
      this.getData();
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
    .subscribe(data => this.codebook = data);
   //  this.adservice.getFilteredAdverts(this.searchAttributes).subcribe();
  }

}
