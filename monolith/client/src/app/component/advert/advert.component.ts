import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'app/service/advert.service';
import { UserService, ApiService, ConfigService } from 'app/service';
import { Advert } from 'app/shared/models/advert';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  constructor(
    private advertService: AdvertService,
    private userService: UserService,
    private apiService:ApiService,
    private config: ConfigService) { }
    
  usersAdverts: Advert[];
  // Formcontrols
  newAdvert = new Advert();

  descCtr = new FormControl();
  manufacturers = new FormControl();
  models = new FormControl();
  fuels = new FormControl();
  gears = new FormControl();
  cclasses= new FormControl();
  pricelist= new FormControl();  
  milageCtr = new FormControl();
  seatCtr = new FormControl();
  cdwCtr = new FormControl();
  // lists
  manufacturersList : any;
  modelList: any;
  fuelList: any;
  gearList: any;
  cclassList: any;
  priceList:any
 
  
  //selected vals
  description:any;
  manufacturer: any;
  model: any;
  fuel: any;
  gear: any;
  cclass: any;
  selpricelist:any;
  milage=''; // koliko je ogranicenje
  kidsSeat= '';// koiko sedista
  cdw='';

  // vals for radio buttons
    isLimit:any;
    isCDW:any;
    isSeat:any    

    finished(){
      if(this.description != '')
        return false;      

    }
  form: FormGroup;
  ngOnInit() {
  
    this.showMyAdverts();
    this.loadResources();
  
  }
  hasLimit(param){this.isLimit = param;}
  hasCDW(param){this.isCDW = param}
  hasBseat(param){this.isSeat = param;}

  submitAddForm(){
    this.newAdvert.cclass = this.cclass;
    this.newAdvert.cdwprotection = this.isCDW;
    this.newAdvert.description = this.description;
    this.newAdvert.fuel = this.fuel;
    this.newAdvert.gear = this.gear;
    this.newAdvert.manufacturer = this.manufacturer;
    this.newAdvert.model = this.model.title;
    this.newAdvert.priceList = this.selpricelist;
    this.newAdvert.milage = Number(this.milage);

    console.log(this.newAdvert);
    this.apiService.post(this.config.add_advert_url, this.newAdvert)
                    .subscribe(data => {
                      this.usersAdverts= data;
                    })

  }
  //Prikaz svih oglasa od ulogovanog usera
  showMyAdverts() {
    this.advertService.getAdvertsFrom()
      .subscribe(data => {
        this.usersAdverts = data;
      });
  }
  loadResources(){
    
    this.apiService.get(this.config.all_codebook_url)
        .subscribe(data=>{
          this.manufacturersList = data.manufacturers;      
          this.modelList = data.models;
          this.fuelList = data.fuels;
          this.cclassList = data.cclass;
          this.gearList = data.gearType;
    });   
    this.apiService.get(this.config.my_pricelist_url)
    .subscribe(data =>{      
      this.priceList = data;
    });
   
  }
 

}
