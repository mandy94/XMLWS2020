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
  displayedColumns: string[] = ['title', 'img', 'city', 'renta', 'returning', 'status', 'actions'];


  ngOnInit() {

    this.loadData()
  }
  loadData() {

    if (this.userService.getMyId() == null) {
      this.userService.getMyInfo().subscribe(() => {

        this.apiService.get(this.conf.kart_url + "/" + this.userService.getMyId().toString())
          .subscribe((data) => { this.itemRequests = data });
      });
    } else {
      this.apiService.get(this.conf.kart_url + "/" + this.userService.getMyId().toString())
        .subscribe((data) => this.itemRequests = data);
    }
  }
  delete(id: number) {
    this.apiService.delete(this.conf.delete_request + "/" + id).subscribe(() => { this.loadData() });
  }
}
