import { Component, OnInit, Input } from '@angular/core';
import { Advert } from 'app/shared/models/advert';
import { AdvertService } from 'app/service/advert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.css']
})
export class AdvertCardComponent implements OnInit {
  @Input() advert: any;
  @Input() myAd: boolean;
  currAdvert : any;
  usersAdverts: Advert[];
  constructor(private advertService: AdvertService,private router: Router) { }

  ngOnInit() {
      this.showMyAdverts();
    }

  showMyAdverts(){
    this.advertService.getAdvertsFrom()
    .subscribe( data => this.usersAdverts = data);   
  } 
  
   //Brisanje oglasa
   deleteAdvert(advert: Advert)
   {
     this.advertService.deleteAdvert(advert.id)
     .subscribe(
       res => this.showMyAdverts()
     );      
   }
addToKart(advertId){
  console.log(advertId);
}

gotoItemPage(advert){
  this.router.navigate(['/advert-page', advert]);
  }


}
