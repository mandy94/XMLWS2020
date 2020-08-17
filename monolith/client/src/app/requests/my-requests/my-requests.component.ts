import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
 

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {  
  
    constructor(private apiService: ApiService,
      private config: ConfigService,
    ) { }
  
    displayedColumns: string[] = ['title', 'img', 'renta', 'returning', 'status', 'actions'];
    myPendingRequests = new Array<any>();  
    myReservedRequests = new Array<any>();  
    myCencelRequests = new Array<any>();
    
  
    clicked: boolean;
    loadedData = false;
  
    conflictRequests: any;
    canceledRequests: any;
    
    ngOnInit() {
      this.clicked = false;
      this.getPendingRequests();
      this.getResevedRequests();
      this.getCancelRequests();
    }
  
    isDataLoaded = false;
  
    getPendingRequests() {
      this.apiService.get(this.config.get_pending_request('my'))
        .subscribe(data => {
          this.myPendingRequests = data;
          this.isDataLoaded=true;
        });
      
    } 
    getResevedRequests() {
      this.isDataLoaded = false;
      this.apiService.get(this.config.get_reserved_request('my'))
        .subscribe(data => {
          this.myReservedRequests = data;
          
        });
       
        
    }
    getCancelRequests() {
      this.isDataLoaded = false;
      this.apiService.get(this.config.get_cencel_request('my'))
        .subscribe(data => {
          this.myCencelRequests = data;
          this.isDataLoaded=true;
        });
      
    }
  
 
  
  }
  