import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { UserRequest, NewRentingRequest } from '.';
import { ApiService, ConfigService, UserService } from 'app/service';

import { AdvertDTO } from 'app/component/advert-card';



export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
// Format za cuvanje.
const dateFormat = "DD.MM.YYYY";

@Component({
  selector: 'app-advert-detailed',
  templateUrl: './advert-detailed.component.html',
  styleUrls: ['./advert-detailed.component.css'],
  providers: [

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AdvertDetailedComponent implements OnInit {


  constructor(private route: ActivatedRoute,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    private apiService: ApiService,
    private conf: ConfigService,
    private userService: UserService
  ) { }
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  selectedFile: File;
  selectedCity: string;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  advert: AdvertDTO;
  timeList: any;
  cityList: any;
  imgUrl: any;
  owner_username: string;
  readyToSubmit: boolean;
  ngOnInit() {
    let that = this;
    this.timeList = [{ value: "08:00" }, { value: "10:00" }, { value: "12:00" }, { value: "14:00" }, { value: "16:00" }, { value: "18:00" }];
    this.apiService.get(this.conf.cities_url).subscribe((data) => this.cityList = data);
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((advert: any) => {
        console.log(this.advert)
        this.advert = advert;
        // this.apiService.get(this.conf.user_url + '/' + advert.user.id).subscribe(data => that.owner_username = data.username);
        that.imgUrl = this.conf.get_img_url + this.advert.imgmain;
        this.loadPriceList();
      });
  

 
  }
  displayedColumns = ['name', 'pricePerDay', 'pricePerKm', 'cdw', 'bonus'];
  dataSource;
  
  loadPriceList() {

    this.apiService.get(this.conf.advert_pricelist_url + '/'+(this.advert.id).toString())
    .subscribe((data) => {
     this.dataSource = [data];
      console.log(data);
    });
  }

  myAdvert() {
    return Number(this.userService.getMyId()) == this.advert.owner_id ? true : false;
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }



  newUserRequest = new NewRentingRequest();
  selectedRentingTime: any;
  selectedReturnTime: any;
  
  selectedRentingDate = new FormControl(moment());
  selectedReturningDate = new FormControl(moment());
  submit() {
   
   
      this.newUserRequest.rentingTime = this.selectedRentingTime;
      this.newUserRequest.returningTime = this.selectedReturnTime;
      this.newUserRequest.advertid = this.advert.id;      
      this.newUserRequest.rentingDate = this.selectedRentingDate.value.format(dateFormat);
      this.newUserRequest.returningDate = this.selectedReturningDate.value.format(dateFormat);
      console.log(this.newUserRequest)
      this.apiService.post(this.conf.new_request, this.newUserRequest).subscribe(() =>{
         this.newUserRequest = new NewRentingRequest();
         this.newUserRequest.rentingDate = null;
         this.newUserRequest.returningDate = null;
         this.selectedRentingTime = '';
         this.selectedReturnTime = '';
     
        });
  


  }
  whenReadyToSubmit() {
    if (this.newUserRequest.rentingDate != '' && this.newUserRequest.returningDate != '') {
      if (this.selectedRentingTime != null && this.selectedReturnTime != null)
        if(this.validateRentDate() && this.validateReturnDate())
          return true;
    }
    return false;
  }
  errorMsg;
  validateRentDate(){
    this.errorMsg = null;
    if(this.selectedRentingDate.value.isBefore(moment()))
    {
      this.errorMsg = "Datum iznajmljivanja mora biti u skladu sa fizikom - od sutra";
      return false;
    }
    return true;
  }
  validateReturnDate(){
    this.errorMsg = null;
    if(this.selectedRentingDate.value.isAfter(this.selectedReturningDate.value))
    {
      this.errorMsg = "Datum iznajmljivanja mora biti u skladu sa fizikom - pre datuma vracanja";
      return false;
    }
    return true;
  }
}

