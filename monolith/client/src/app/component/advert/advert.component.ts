import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'app/service/advert.service';
import { UserService, ApiService, ConfigService } from 'app/service';
import { Advert } from 'app/shared/models/advert';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { AdvertDTO, AdvertDAO } from '../advert-card';

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
  newAdvert = new AdvertDAO();

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
  description='';
  manufacturer: any;
  model: any;
  fuel: any;
  gear: any;
  cclass: any;
  selpricelist:any;
  milage=0; // koliko je ogranicenje
  kidsSeat= 0;// koiko sedista
  cdw=0;

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
    this.newAdvert.cclass = this.cclass.id;
    this.newAdvert.description = this.description;
    this.newAdvert.fuel = this.fuel.id;
    this.newAdvert.gear = this.gear.id;
    this.newAdvert.manufacturer = this.manufacturer.id;
    this.newAdvert.model = this.model.title;
    this.newAdvert.priceList = this.selpricelist.id;
    this.newAdvert.CDW = this.isCDW === false? 0 : this.cdw;
    this.newAdvert.milage = this.isLimit === false ? -1 : this.milage;
    this.newAdvert.numberOfKidsSeat = this.isSeat === false? 0 : this.kidsSeat;
    this.newAdvert.img = this.selectedFile.name;

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
  selectedFile: any;
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  imgUrl;
  onUpload() {
    const that = this;
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    let headers = new HttpHeaders({
      'Authorization' : localStorage.getItem("token"),
      'Access-Control-Allow-Origin' : '*',  
    });  
    this.apiService.post(this.config.upload_img_url, uploadImageData, headers).subscribe(()=>{
      that.imgUrl = this.config.get_img_url+this.selectedFile.name;
      
    });
  }
  retrieveResonse;
  base64Data;
  retrievedImage;


  // getImage(imageName:string) {
     
  //     this.apiService.get(this.config.get_img_url+imageName,null, true)
  //      .subscribe();
      
  // }
    


 

}
