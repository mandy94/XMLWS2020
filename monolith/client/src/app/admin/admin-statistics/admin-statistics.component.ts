import { Component, OnInit } from '@angular/core';
import { ConfigService, ApiService } from 'app/service';

@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.css']
})
export class AdminStatisticsComponent implements OnInit {

  constructor(private apiSevice:ApiService, private config: ConfigService) { }

  ngOnInit() {
   
  }

}
