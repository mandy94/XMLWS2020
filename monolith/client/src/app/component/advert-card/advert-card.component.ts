import { Component, OnInit, Input } from '@angular/core';
import { Advert } from 'app/shared/models/advert';
import { AdvertService } from 'app/service/advert.service';
import { Router } from '@angular/router';
import { AdvertDTO } from '.';


@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.css']
})
export class AdvertCardComponent implements OnInit {
  @Input() advert = new Advert();
  @Input() myAd: boolean;
  finishedLoading = false;
  currAdvert : any;
  usersAdverts = new Array<Advert>();
  constructor(private advertService: AdvertService,private router: Router) { 
    this.showMyAdverts(); 
  }

  ngOnInit() {
    
      // this.showMyAdverts();
    }

  showMyAdverts(){
    this.advertService.getAdvertsFrom()
    .subscribe( data => {
      this.usersAdverts = data ;
      this.finishedLoading = true;});  
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
  let advertDTO = new AdvertDTO(advert);
  
  this.router.navigate(['/advert-page', advertDTO]);
  }


}
