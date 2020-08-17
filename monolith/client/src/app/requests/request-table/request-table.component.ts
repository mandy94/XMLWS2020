import { Component, OnInit, Input } from '@angular/core';
import { DialogMessage } from 'app/shared/models/display-message';
import { YesNoDialogComponent } from 'app/yes-no-dialog/yes-no-dialog.component';
import { MatDialog } from '@angular/material';
import { ApiService, ConfigService } from 'app/service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})
export class RequestTableComponent implements OnInit {

  @Input() data: any;
  @Input() title: any;
  @Input() subtitle: any;
  @Input() serverUrl: string;
  @Input() reqStatus: string;  
  @Input() reqType: string;

  displayedColumns: string[];
  // flags for action buttons
  showSpinner= false;
  advertsForMe=false;
  reserved=false;
  // --------------
  imgUrl: string;
  constructor(private apiService: ApiService,
    private config: ConfigService, public dialog: MatDialog) { }
  hasRequests() {
    if (this.data === undefined || this.data === null)
      return false;
    if( this.data.length === 0)
      return false;
    else
      return true;
  }
  ngOnInit() {
    this.imgUrl = this.serverUrl;
    
    this.displayedColumns = ['title', 'img', 'renta', 'returning', 'status', 'actions'];
    
    
  }
  dialogMsg: DialogMessage;
  accept(item): void {
    if(item.conflict === undefined) item.conflict = [];
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
         this.saveAccept(item);
        }
      });
    } else {
      this.saveAccept(item);
    }
  }

  saveAccept(item){
    this.apiService.put(this.config.requests_url + '/accept-request', item)
    .subscribe(() => {
      item.status = "RESERVED";
      this.data = this.data.filter(obj => obj.id != item.id);
    
      item.conflict.forEach(function (el) {
        el.status = "CANCELED";
      });
      
    });
  }
  decline(item) {

    this.apiService.put(this.config.requests_url + '/decline-request/', item.id).subscribe(() => {
      item.status = "CENCELED";
    });
  }
  

}
