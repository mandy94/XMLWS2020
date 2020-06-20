import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService, UserService } from 'app/service';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {

  constructor(private apiService: ApiService,
    private conf: ConfigService,
    private userService: UserService) { }

    itemRequests: any;
    displayedColumns: string[] = ['id','img', 'title','status'];
   
  ngOnInit() {
 

    if(this.userService.getMyId() == null)
    this.userService.getMyInfo().subscribe(()=>{
    this.apiService.get(this.conf.kart_url +"/" + this.userService.getMyId() )
                .subscribe((data) => this.itemRequests = data);
    });
  else{
    this.apiService.get(this.conf.kart_url +"/" + this.userService.getMyId() )
                .subscribe((data) => this.itemRequests = data);
  }
}
}
