import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import * as moment from 'moment';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private apiService: ApiService,
    private config: ConfigService,
  ) { }

  displayedColumns: string[] = ['title', 'img', 'renta', 'returning', 'status', 'actions'];
  pendingRequests = new Array<any>();
  clicked: boolean;

  conflictRequests: any;
  canceledRequests: any;
  reservedRequests: any;
  ngOnInit() {
    this.clicked = false;

    this.getMyRequests();

  }

  isDataLoaded = false;
  getMyRequests() {
    this.apiService.get(this.config.pending_request)
      .subscribe(data => {
        this.pendingRequests = data;
        this.checkConflicts();
        this.apiService.get(this.config.cencel_request)
          .subscribe(data => {
            this.canceledRequests = data;
            this.apiService.get(this.config.accepted_request)
              .subscribe(data => {
                this.reservedRequests = data;
                 this.isDataLoaded = true;
              });
          });

      });

  }

  convertToMomentDate(date) {
    let [day, month, year] = date.split('.');
    return moment(new Date(parseInt(day), parseInt(month), parseInt(year)));
  }
  checkConflicts() {
    let arrayOfReq = []; // storage array for comparing - history 
    let that = this;

    this.pendingRequests.forEach(function (bundle) { // initializing dataz
      bundle.content.forEach(element => {
        element.conflict = [];
        arrayOfReq.push(element);
      })
    });

    this.pendingRequests.forEach(function (bundle) { // returns bundles
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
