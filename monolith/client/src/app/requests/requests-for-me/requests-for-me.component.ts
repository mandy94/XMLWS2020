import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import * as moment from 'moment';

@Component({
  selector: 'app-requests-for-me',
  templateUrl: './requests-for-me.component.html',
  styleUrls: ['./requests-for-me.component.css']
})
export class RequestsForMeComponent implements OnInit {

  constructor(private apiService: ApiService,
    private config: ConfigService,
  ) { }

  displayedColumns: string[] = ['title', 'img', 'renta', 'returning', 'status', 'actions'];
  
  pendingRequestsForMe = new Array<any>();  
  reservedRequestsForMe = new Array<any>();
  cencelRequestForMe = new Array<any>();

  clicked: boolean;
  loadedData = false;

  ngOnInit() {
    this.clicked = false;
    this.getPendingRequests();
    this.getResevedRequests();
    this.getCancelRequests();
  }

  isDataLoaded = false;

  getPendingRequests() {
   
      this.apiService.get(this.config.get_pending_request('for-me'))
      .subscribe(data => {
        this.pendingRequestsForMe = data;        
        this.checkConflicts();
        this.isDataLoaded = true;
      });
  } 
  getResevedRequests() {
    this.isDataLoaded = false;   
      this.apiService.get(this.config.get_reserved_request('for-me'))
      .subscribe(data => {
        this.reservedRequestsForMe = data;
        
        this.isDataLoaded = true;
      });    
      
  }
  getCancelRequests() {
    this.isDataLoaded = false;    
      this.apiService.get(this.config.get_cencel_request('for-me'))
      .subscribe(data => {
        this.cencelRequestForMe = data;
        this.isDataLoaded = true;
      });
  }
 
  convertToMomentDate(date) {
    let [day, month, year] = date.split('.');
    return moment(new Date(parseInt(day), parseInt(month), parseInt(year)));
  }

  
  
  checkConflicts() {
    let arrayOfReq = []; // storage array for comparing - history 
    let that = this;

    this.pendingRequestsForMe.forEach(function (bundle) { // initializing dataz
      bundle.content.forEach(element => {
        element.conflict = [];
        arrayOfReq.push(element);
      })
    });

    
    this.pendingRequestsForMe.forEach(function (bundle) { // returns bundles
      bundle.content.forEach(element => { // returns requests         
        arrayOfReq.forEach(function (el) {
          if (el.id != element.id && el.advert.id == element.advert.id && that.convertToMomentDate(element.rentingDate).isBetween(that.convertToMomentDate(el.rentingDate), that.convertToMomentDate(el.returningDate), undefined, '[]')) {
            element.conflict.push({
              rentingDate: el.rentingDate,
              returningDate: el.returningDate,
              id: el.id,
              advertManufacturer: el.advert.manufacturer.title,
              advertId: el.advert.id,
            });
            el.conflict.push({
              rentingDate: element.rentingDate,
              returningDate: element.returningDate,
              id: element.id,
              advertManufacturer: element.advert.manufacturer.title,
              advertId: element.advert.id,
            });
          }
        });
      });
    })
  }
}
