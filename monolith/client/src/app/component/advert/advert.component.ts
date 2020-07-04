import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'app/service/advert.service';
import { UserService } from 'app/service';
import { Advert } from 'app/shared/models/advert';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  constructor(
    private advertService: AdvertService,
    private userService: UserService) { }
    
  currentUser: any;
  usersAdverts: Advert[];
  new_advert: Advert;
  message:string;

  ngOnInit() {
    //Bitan redosled jer se u novi_oglas referencira id korisnika.
    this.new_advert = new Advert();
    
    this.showMyAdverts();
    this.getMyInfo();

  }
  //Metoda za vracanja celog objekta korisnika/agencije/admina i referenciranje svakog novog entiteta ka njemu*
  getMyInfo() {
    this.userService.getMyInfo()
      .subscribe(data => {
        this.currentUser = data,
        this.new_advert.user = this.currentUser
      });

  }
  //Prikaz svih oglasa od ulogovanog usera
  showMyAdverts() {
    this.advertService.getAdvertsFrom()
      .subscribe(data => {
        this.usersAdverts = data;

      });
  }
  isAddingDisabled() {

    // if (this.userService.amIUser()) {
    //   if (this.usersAdverts.length >= 3) {
       
    //     return true;
    //   }
    // }
    return false;
  }
  //Dodavanje novog oglasa  
  submitAddForm() {
    if(this.isAddingDisabled())
    {
      this.message = "Objavili ste 3 oglasa. Nemate pravo na vise.";
      
    }
    this.advertService.postNewAdvert(this.new_advert)
      .subscribe(() => { this.showMyAdverts() });

  }

}
