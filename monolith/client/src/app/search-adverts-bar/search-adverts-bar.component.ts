import { Component, OnInit } from '@angular/core';
import { CodebookService } from 'app/service/codebook.service';
import { FormControl } from '@angular/forms';
import { AdvertService } from 'app/service/advert.service';

@Component({
  selector: 'app-search-adverts-bar',
  templateUrl: './search-adverts-bar.component.html',
  styleUrls: ['./search-adverts-bar.component.css']
})
export class SearchAdvertsBarComponent implements OnInit {

  constructor(private cbservice : CodebookService,
    private adservice : AdvertService) { }

  private cities: any;
  private selected: any;
  private searchAttributes: any;
  ngOnInit() {
    this.showCities();
  }

  cityList = new FormControl();
  
  showCities(){
    
    this.cbservice.getCities().subscribe(data => {this.cities = data});
  }
  submitSearchForm(){
    this.searchAttributes.setCitySearch(this.selected);
   //  this.adservice.getFilteredAdverts(this.searchAttributes).subcribe();
  }

}
