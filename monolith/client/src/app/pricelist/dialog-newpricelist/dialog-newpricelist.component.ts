import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import {  PricelistInterface, Pricelist } from 'app/shared/models/advert';
import { ApiService, ConfigService } from 'app/service';

@Component({
  selector: 'app-dialog-newpricelist',
  templateUrl: './dialog-newpricelist.component.html',
  
  
})
export class DialogNewpricelistComponent  {

  data = new Pricelist();
  constructor(
    private apiService:ApiService,
    private config:ConfigService,
    public dialogRef: MatDialogRef<DialogNewpricelistComponent>,
   ) {
    this.getBonuses();
     
   }
   my_bonuses:any;
   getBonuses(){
    this.apiService.get(this.config.my_bonuses_url).subscribe(data => this.my_bonuses = data);    
  } 
  onNoClick(): void {
    this.dialogRef.close();
  }

  
  create(newObj:PricelistInterface){  
    console.log(newObj);
    this.apiService.post(this.config.new_pricelist_url, newObj).subscribe();
    this.dialogRef.close();
  }
}
