import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import * as moment from 'moment';
import { DialogMessage } from 'app/shared/models/display-message';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from 'app/yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private apiService: ApiService,
    private config: ConfigService,
    public dialog: MatDialog) { }

  displayedColumns: string[] = ['title', 'img', 'renta', 'returning', 'status', 'actions'];
  myRequests = new Array<any>();
  clicked: boolean;
  imgUrl: string;
  conflictRequests: any;
  ngOnInit() {
    this.clicked = false;
    this.imgUrl = this.config.get_img_url;// + this.advert.img;
    this.getMyRequests();
  }

  getMyRequests() {
    this.apiService.get(this.config.my_request)
      .subscribe(data => {
        this.myRequests = data;
        this.checkConflicts();

      });
  }
  hasRequests() {
    return this.myRequests.length === 0 ? false : true;
  }
  convertToMomentDate(date) {
    let [day, month, year] = date.split('.');
    return moment(new Date(parseInt(day), parseInt(month), parseInt(year)));
  }
  checkConflicts() {
    let arrayOfReq = []; // storage array for comparing - history 
    let that = this;

    this.myRequests.forEach(function (bundle) { // initializing dataz
      bundle.content.forEach(element => {
        element.conflict = [];
        arrayOfReq.push(element);
      })
    });

    this.myRequests.forEach(function (bundle) { // returns bundles
      bundle.content.forEach(element => { // returns requests         
        arrayOfReq.forEach(function (el) {
          if (el.id != element.id && that.convertToMomentDate(element.rentingDate).isBetween(that.convertToMomentDate(el.rentingDate), that.convertToMomentDate(el.returningDate), undefined, '[]')) {
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
  dialogMsg: DialogMessage;
  accept(item): void {
    if (item.conflict.length > 0) {
      let itemString = [];
      item.conflict.forEach(function (el) {
        itemString.push({ text: el.advertManufacturer + " u periodu od  " + el.rentingDate + " " + el.returningDate });
      })
      const dialogRef = this.dialog.open(YesNoDialogComponent, {
        width: '750px',
        data: {
          textType: "Obavestenje",
          displayedText: "Prilikom potvrde ovog zahteva, sistem ce automatski odbiti zahteve ciji se termini poklapaju. U pitanju su sledeci oglasi : ",
          displayContent: itemString
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log(item);
          this.apiService.put(this.config.requests_url + '/accept-request', item).subscribe(() => this.getMyRequests());
        }
      });
    } else {
      // samo potvrdi
    }
  }
  // accept(item) {
  // this.clicked = true;

  // this.apiService.put(this.config.requests_url+'/accept-request/',id).subscribe(()=>this.getMyRequests());
  // this.apiService.get(this.config.requests_url+'/check-cover/'+ id).subscribe((data)=>this.conflictRequests = data);

  // }
  decline(id) {
    this.clicked = true;
    this.apiService.put(this.config.requests_url + '/decline-request/', id).subscribe(() => this.getMyRequests());
  }
}
