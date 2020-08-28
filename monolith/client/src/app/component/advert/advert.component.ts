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
    private apiService: ApiService,
    private config: ConfigService) { }

  usersAdverts = [];
  // Formcontrols
  newAdvert = new AdvertDAO();

  descCtr = new FormControl('');
  manufacturersCtr = new FormControl('');
  modelsCtr = new FormControl('');
  fuelsCtr = new FormControl('');
  gearsCtr = new FormControl('');
  cclassesCtr = new FormControl('');
  pricelistCtr = new FormControl('');
  milageCtr = new FormControl('');
  limitMilageCtr = new FormControl('');
  seatCtr = new FormControl('');
  cdwCtr = new FormControl('');
  // lists
  manufacturersList: any;
  modelList: any;
  fuelList: any;
  gearList: any;
  cclassList: any;
  priceList: any
  // vals for radio buttons
  isLimit: any;
  isCDW;
  isSeat: any

  finished() {
    if (this.descCtr.value != '')
      return false;

  }
  form: FormGroup;
  ngOnInit() {

    this.showMyAdverts();
    this.loadResources();
    let id = this.userService.getMyId();
    this.apiService.get(this.config.get_permission_to_post(id)).subscribe(data =>{this.postPermision = data.canPost} );

  }
  postPermision;
  havePermission(){
    return this.postPermision;
  }
  hasLimit(param) { this.isLimit = param; }
  hasCDW(param) { this.isCDW = param }
  hasBseat(param) { this.isSeat = param; }

  submitAddForm() {
    this.newAdvert.cclass = this.cclassesCtr.value.id;
    this.newAdvert.description = this.descCtr.value;
    this.newAdvert.fuel = this.fuelsCtr.value.id;
    this.newAdvert.gear = this.gearsCtr.value.id;
    this.newAdvert.manufacturer = this.manufacturersCtr.value.id;
    this.newAdvert.model = this.modelsCtr.value.title;
    this.newAdvert.priceList = this.pricelistCtr.value.id;
    this.newAdvert.milage = this.milageCtr.value;
    this.newAdvert.limitMilage = this.isLimit === true ? -1 : this.limitMilageCtr.value;
    this.newAdvert.numberOfKidsSeat = this.isSeat === false ? 0 : this.seatCtr.value;
    this.newAdvert.img = this.selectedFile.name;
    this.newAdvert.CDW = this.isCDW === false ? 0 : this.cdwCtr.value;


    this.apiService.post(this.config.add_advert_url, this.newAdvert)
      .subscribe(data => {
        this.usersAdverts = data;
      })

  }

  //Prikaz svih oglasa od ulogovanog usera
  showMyAdverts() {
    this.advertService.getAdvertsFrom()
      .subscribe(data => {
        this.usersAdverts = data;
      });
  }
  hasAds() {

    return this.usersAdverts.length === 0 ? false : true;
  }
  loadResources() {

    this.apiService.get(this.config.all_codebook_url)
      .subscribe(data => {
        this.manufacturersList = data.manufacturers;
        this.modelList = data.models;
        this.fuelList = data.fuels;
        this.cclassList = data.cclass;
        this.gearList = data.gearType;
      });
    this.apiService.get(this.config.my_pricelist_url)
      .subscribe(data => {
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
      'Authorization': localStorage.getItem("token"),
      'Access-Control-Allow-Origin': '*',
    });
    this.apiService.post(this.config.upload_img_url, uploadImageData, headers).subscribe(() => {
      that.imgUrl = this.config.get_img_url + this.selectedFile.name;

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
