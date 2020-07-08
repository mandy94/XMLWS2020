import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private apiService: ApiService,
    private config: ConfigService,) { }
    
    displayedColumns: string[] = [ 'title','img','city','renta','returning','status', 'actions'];   
    myRequests = new Array<any>();
    clicked: boolean;
  ngOnInit() {
    this.clicked = false;
   this.getMyRequests();
  }

  getMyRequests(){
    this.apiService.get(this.config.my_request)
    .subscribe(data=> {
      this.myRequests = data;
      this.myRequests.forEach(el => {
        console.log(el);
      });
    })
  }
  hasRequests(){
    return this.myRequests.length === 0 ? false : true;
  }
  accept(id){
    this.clicked=true;
    this.apiService.put(this.config.requests_url+'/accept-request/',id).subscribe(()=>this.getMyRequests());
  }
  decline(id){
    this.clicked=true;
    this.apiService.put(this.config.requests_url+'/decline-request/', id).subscribe(()=>this.getMyRequests());
  }
}
