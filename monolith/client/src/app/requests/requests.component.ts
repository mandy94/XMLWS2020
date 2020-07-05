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
  ngOnInit() {
    this.apiService.get(this.config.my_request)
    .subscribe(data=> {this.myRequests = data;})
  }

  hasRequests(){
    return this.myRequests.length === 0 ? false : true;
  }

}
