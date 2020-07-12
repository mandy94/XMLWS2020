import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { UserRequest } from '.';
import { ApiService, ConfigService, UserService } from 'app/service';
import { Advert } from 'app/shared/models/advert';
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

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class AdvertDetailedComponent implements OnInit {
  date = new FormControl(moment());
  date1 = new FormControl(moment());

  constructor( private route: ActivatedRoute,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    private apiService: ApiService,
    private conf :ConfigService,
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
    imgUrl:any;
    owner_username:string;
  ngOnInit() {
    let that = this;
    this.timeList = [ {value : "08:00"},{ value:"10:00"}, {value:"12:00"}, {value:"14:00"},{value:"16:00"},{value:"18:00"}];
    this.apiService.get(this.conf.cities_url).subscribe((data)=> this.cityList = data);
    this.route.params
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((advert: AdvertDTO) => {
      this.advert = advert;
      this.loadPriceList();
      this.apiService.get(this.conf.user_url+'/'+advert.user_id).subscribe(data => that.owner_username = data.username);
           that.imgUrl = this.conf.get_img_url + this.advert.img;
      });

  }
  displayedColumns = ['id', 'name', 'pricePerDay', 'pricePerKm', 'cdw', 'bonus'];
  dataSource;
  loadPriceList() {
    
    this.apiService.get(this.conf.advert_pricelist_url + this.advert.id + '/pricelist' )
      .subscribe((data) => {
        this.dataSource = [data];
        console.log(data);
      });
  }
  myAdvert(){
    // console.log(this.advert);
    // console.log(this.userService.getMyId());
    return Number(this.userService.getMyId()) == this.advert.owner_id ? true : false;
  }

//Gets called when the user selects an image
public onFileChanged(event) {
  this.selectedFile = event.target.files[0];
}

  

newUserRequest= new UserRequest();
selectedRentingTime:any;
selectedReturnTime:any;
selectedReturnDate:any;
submit(){
  this.userService.getMyInfo().subscribe(()=>{
    this.newUserRequest.rentingTime = this.selectedRentingTime;
    this.newUserRequest.returningDate = this.selectedReturnDate;
    this.newUserRequest.advert.id= Number(this.advert.id);
    this.newUserRequest.client.id = Number(this.userService.currentUser.id);
   
  
    this.apiService.post(this.conf.new_request , this.newUserRequest).subscribe(()=> this.newUserRequest = new UserRequest());}
    );

}
updateDate(type:string, event:any){
  
  let formatedDate = moment(event.value).format(dateFormat);
  if(type == "rent"){
    this.newUserRequest.rentingDate = formatedDate;
  }else if(type == "return"){
    this.newUserRequest.returningDate = formatedDate;
  }
  
}
}
