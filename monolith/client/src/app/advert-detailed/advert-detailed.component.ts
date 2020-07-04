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

  ngOnInit() {
    this.timeList = [ {value : "08:00"},{ value:"09:00"}, {value:"10:00"}];
    this.apiService.get(this.conf.get_cities_url).subscribe((data)=> this.cityList = data);
    this.route.params
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((advert: AdvertDTO) => {
      this.advert = advert;
      });

  }
 

//Gets called when the user selects an image
public onFileChanged(event) {
  this.selectedFile = event.target.files[0];
}
onUpload() {
  console.log(this.selectedFile);
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  //Make a call to the Spring Boot Application to save the image
  this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
}
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    let type = this.imageName.split('.');
    console.log("Trazimo sliku: " + this.imageName + " tipa : " + type[1]);
    
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
    .subscribe(
      res => {
        console.log(" VRATILI: " + res);
        if(res != null){
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          let objectUri = 'data:image/jpeg;base64,' + this.base64Data;
          this.retrievedImage = this.sanitizer.bypassSecurityTrustUrl(objectUri);
      
    }else{
         console.log(" Nema slike");
     }
    }
    );
}


newUserRequest= new UserRequest();
selectedRentingTime:any;
selectedReturnTime:any;
submit(){
  this.userService.getMyInfo().subscribe(()=>{
    this.newUserRequest.rentingTime = this.selectedRentingTime;
    // this.newUserRequest.returningDate = this.selectedReturnDate;
    this.newUserRequest.advertid = Number(this.advert.id);
    this.newUserRequest.user_id = Number(this.userService.currentUser.id);
    
    console.log(this.newUserRequest);

    this.apiService.post(this.conf.new_request , this.newUserRequest).subscribe(()=> this.newUserRequest = null);}
    );

}
updateDate(type:string, event:any){
  
  let formatedDate = moment(event.value).format(dateFormat);
  if(type == "rent"){
    this.newUserRequest.rentingDate = formatedDate;
  }else if(type == "return"){
    this.newUserRequest.returningDate = formatedDate;
  }
  
  console.log(this.newUserRequest);
}
}
