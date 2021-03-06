import { Component, OnInit } from '@angular/core';
import { ConfigService, ApiService, UserService } from 'app/service';
import * as CanvasJS from 'assets/Chart 2.3.2/canvasjs.min.js';

export interface DataFormat {
  y;
  label;
}
@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.css']
})

export class AdminStatisticsComponent implements OnInit {

  constructor(private apiSevice: ApiService,
    private config: ConfigService,
    private userService: UserService) { }


  chartData1: Array<DataFormat>;
  chartData2: Array<DataFormat>;
  chartData3: Array<DataFormat>;


  maxMilageAdvert;
  mostPopularAdvert;
  avgMilage;
  loading = false;
  ngOnInit() {
    let chart1;
    this.apiSevice.get(this.config._car_milages_stats)
      .subscribe((data) => {

        chart1 = new CanvasJS.Chart("byMilage", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Predjeni kilometri svih vozila"
          },
          data: [{
            type: "column",
            dataPoints: data
          }]
        });
        chart1.render();
      });

    let chart2;
    this.apiSevice.get(this.config._avg_milages_stats)
      .subscribe((data) => {

        chart2 = new CanvasJS.Chart("byAvg", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Prosecna kilometraza po rentiranju"
          },
          data: [{
            type: "column",
            dataPoints: data
          }]
        });
        chart2.render();
      });
      
    let chart3;
    this.apiSevice.get(this.config._rent_number_ad)
      .subscribe((data) => {

        chart3 = new CanvasJS.Chart("byRentNo", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Broj zahteva po automobilu"
          },
          data: [{
            type: "column",
            dataPoints: data
          }]
        });
        chart3.render();
      });
    this.apiSevice.get(this.config._max_milage_ad).subscribe(data => this.maxMilageAdvert = data);
    this.apiSevice.get(this.config._most_popular_ad).subscribe(data => this.mostPopularAdvert = data);



  }


}
