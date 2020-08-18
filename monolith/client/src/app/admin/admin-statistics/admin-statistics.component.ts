import { Component, OnInit } from '@angular/core';
import { ConfigService, ApiService, UserService } from 'app/service';
import * as CanvasJS from 'assets/Chart 2.3.2/canvasjs.min.js';
export interface DataFormat{
  y;
  label;
}
@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.css']
})

export class AdminStatisticsComponent implements OnInit {

  constructor(private apiSevice:ApiService,
               private config: ConfigService,
               private userService: UserService) { }

        
  chartData : Array<DataFormat>;               
  ngOnInit() {
    let chart;
    this.apiSevice.get(this.config.get_car_milages_stats)
    .subscribe((data)=>{
 
      chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Predjeni kilometri vasih vozila"
        },
        data: [{
          type: "column",
          dataPoints: data
        }]
      });
      chart.render();
    });
    
    

  }
   
  
}
