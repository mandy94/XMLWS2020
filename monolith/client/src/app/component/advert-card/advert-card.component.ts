import { Component, OnInit, Input } from '@angular/core';
import { Advert } from 'app/shared/models/advert';
import { AdvertService } from 'app/service/advert.service';
import { Router } from '@angular/router';
import { AdvertDTO } from '.';
import { UserService, ConfigService } from 'app/service';


@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.css']
})
export class AdvertCardComponent implements OnInit {
  @Input() advert = new Advert();
  @Input() myAd: boolean;
  
  finishedLoading = false;
  currAdvert: any;
  usersAdverts = new Array<Advert>();
  constructor(private advertService: AdvertService,
    private userService: UserService,
    private config: ConfigService,
    private router: Router) {
    }
imgUrl;
  ngOnInit() {

    this.showMyAdverts();
    this.imgUrl = this.config.get_img_url + this.advert.imgmain;

  }

  showMyAdverts() {
    console.log("refreshed data")
    this.advertService.getAdvertsFrom()
      .subscribe(data => {
        this.usersAdverts = data;
        this.finishedLoading = true;
      });
  }

  //Brisanje oglasa
  deleteAdvert(advert: Advert) {
    let that = this;
    this.advertService.deleteAdvert(advert.id)
      .subscribe(
        () => this.showMyAdverts()
      );
  }


  gotoItemPage() {
    
    let advertDTO = new AdvertDTO(this.advert);
    this.router.navigate(['/advert-page', advertDTO]);


  }


}
