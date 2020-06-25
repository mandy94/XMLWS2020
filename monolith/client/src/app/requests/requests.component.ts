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

    myRequests = Array<Request>();
  ngOnInit() {
    this.apiService.get(this.config.requests_url)
    .subscribe(data=> {this.myRequests = data;})
  }

}
